import React, {Component} from "react"
import {graphql} from "gatsby"
import Header from "../components/Layout/Header"
import PostIcons from "../components/post-icons"
// import Layout from "../layouts"

import {rhythm} from "../utils/typography"

class PageTemplate extends Component {
    render() {
        const currentPage = this.props.data.wordpressPage;

        return (
            <div>
                <Header/>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <PostIcons node={currentPage} css={{marginBottom: rhythm(1 / 2)}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
            </div>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
