import React, {Component} from "react"
import Link from 'gatsby-link'
import {StaticQuery, graphql} from "gatsby"
import PropTypes from "prop-types"
import Header from "../components/Layout/Header"

class Blog extends Component {
    render() {
        const data = this.props.data.allWordpressPost.edges;
console.log(data);
        const itemList = data.map((item) =>
            <li>
                <Link to={item.node.slug}>{item.node.title}</Link>
            </li>
        );

        return (
            <div>
                <Header/>
                <h1>Blog Page</h1>
                {/*<PostIcons node={currentPage} css={{marginBottom: rhythm(1 / 2)}}/>*/}
                {/*<div dangerouslySetInnerHTML={{__html: currentPage.content}}/>*/}
                <ul>{itemList}</ul>
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
        query ($status: String = "publish") {
          allWordpressPost(filter: {status: {eq: $status}}) {
            edges {
              node {
                id
                title
                slug
                status
                template
                format
              }
            }
          }
        }
    `}
        render={data => <Blog data={data} {...props} />}
    />
)

Blog.propTypes = {
    data: PropTypes.isRequired,
};

// export default Blog