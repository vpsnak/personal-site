import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import SEO from '../components/seo'
import {Layout} from '../components/Layout'
import {Single} from './structure'
import {Related} from './post/index'

class PostTemplate extends Component {
    render() {
        if (postQuery.errors)
            throw new Error(postQuery.errors);

        const {
            data,
            location
        } = this.props;

        const post = data.post;

        return (
            <Layout>
                <SEO
                    location={location}
                    title={post.title}
                    description={post.content.replace(/(<([^>]+)>)/ig, "").substring(0, 160)}
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
                <Single
                    item={post}
                    url={location.href}
                />
                <Related
                    callerId={post.wordpress_id}
                />
            </Layout>
        )
    }
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
};

export default PostTemplate

export const postQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      wordpress_id
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
