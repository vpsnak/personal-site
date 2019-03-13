import React, {Component} from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout/index"
import SEO from "../components/seo"
import PostSingle from "./post/single"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost;

        return (
            <Layout>
                <SEO title={post.title}
                     description={post.content.replace(/(<([^>]+)>)/ig, "").substring(0, 160)}
                     keywords={[`gatsby`, `application`, `react`]}
                     meta={[
                         {'og:title': post.title},
                         {'og:description': post.title},
                         {'og:type': `article`},
                         {'twitter:card': post.title},
                         {'twitter:creator': post.title},
                         {'twitter:title`': post.title},
                         {'twitter:description`': post.title}
                     ]}
                />
                <PostSingle post={post}/>
            </Layout>
        )
    }
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
};

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      ...PostMeta
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
