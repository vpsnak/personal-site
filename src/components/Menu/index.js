import React, {Component} from "react"
import {StaticQuery, graphql} from "gatsby"
import {
    Container,
    Row,
    Col,
    Nav
} from 'reactstrap';

import Item from "./Item";

class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            isOpen: false,
            isActive: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleScroll() {
        const top = window.scrollY;
        if ((top) > 0) {
            this.setState({
                isActive: true
            });
        } else if ((top) === 0) {
            this.setState({
                isActive: false
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        const data = this.props.data.wordpressWpApiMenusMenusItems;

        const itemList = data.items.map((item) =>
            <Item key={item.wordpress_id} item={item} />
        );

        return (
            <div className={"menu" + (this.state.isActive ? " menu--active " : "")}>
                <Container>
                    <Row>
                        <Col md={12} className="menu__wrapper">
                            <nav className={"menu_list"}>
                                <Nav className={"menu__nav"}>
                                    {itemList}
                                </Nav>
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
        query($id: String = "header"){
          wordpressWpApiMenusMenusItems(slug: {eq: $id}){
            name
            items {
              wordpress_id
              order
              wordpress_parent
              title
              url
              attr
              target
              classes
              xfn
              description
              object_id
              object
              object_slug
              type
              type_label
            }
          }
          site {
            siteMetadata {
              title
            }
          }
        }
    `}
        render={data => <Menu data={data} {...props} />}
    />
)