import React, {Component} from 'react'
import {graphql, StaticQuery} from 'gatsby'
import {Col, Container, Nav, NavItem, Row} from 'reactstrap'
import {Link} from 'react-scroll'

class Menu extends Component {
  state = {
    isOpen: false,
    isActive: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleScroll = () => {
    const top = window.scrollY
    if ((top) > 0) {
      this.setState({
        isActive: true
      })
    } else if ((top) === 0) {
      this.setState({
        isActive: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // @TODO add mobile menu
  render() {
    const data = this.props.data.wordpressWpApiMenusMenusItems

    return (
      <div className={'menu' + (this.state.isActive ? ' menu--active ' : '')}>
        <Container>
          <Row>
            <Col md={12} className="menu__wrapper">
              <nav className={'menu_list'}>
                <Nav className={'menu__nav'}>
                  {data.items && data.items.map((item, key) =>
                    <NavItem
                      id={'menu-item-' + item.wordpress_id}
                      className={'menu-item menu-item-type-' + item.type + ' menu-item-object-' + item.object + ' menu-item-' + item.wordpress_id}
                      key={key}
                    >
                      <Link
                        activeClass="active"
                        to={item.object_slug}
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={800}
                      >{item.title}</Link>
                    </NavItem>
                  )}
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
            query Menu ($id: String = "header") {
              wordpressWpApiMenusMenusItems(slug: {eq: $id}) {
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