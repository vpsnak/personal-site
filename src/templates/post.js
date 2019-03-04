import React, {Component} from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import {rhythm} from "../utils/typography"
import Layout from "../components/Layout/index"
import PostIcons from "../components/post-icons"
import SEO from "../components/seo"

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
                <h1 dangerouslySetInnerHTML={{__html: post.title}}/>
                <PostIcons node={post} css={{marginBottom: rhythm(1 / 2)}}/>
                <div dangerouslySetInnerHTML={{__html: post.content}}/>
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
      ...PostIcons
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
