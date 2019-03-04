import React, {Component} from "react"
import {StaticQuery, graphql} from "gatsby"
import PropTypes from "prop-types"

import Item from "../components/Menu/Item";

class Test extends Component {
    render() {
        const data = this.props.data.wordpressWpApiMenusMenusItems;

        const itemList = data.items.map((item) =>
            <Item item={item}/>
        );

        return (
            <nav>
                <ul className={"menu"}>{itemList}</ul>
            </nav>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
        query($id: String = "main-menu"){
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
        }
    `}
        render={data => <Test data={data} {...props} />}
    />
)

Test.propTypes = {
    data: PropTypes.isRequired,
};