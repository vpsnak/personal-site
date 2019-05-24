import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import SEO from '../components/seo'
import {Layout} from '../components/Layout'
import {Single} from './structure'

class PageTemplate extends Component {
    render() {
        if (pageQuery.errors)
            throw new Error(pageQuery.errors);

        const {
            data,
            location
        } = this.props;

        const page = data.page;

        return (
            <Layout>
                <SEO
                    location={location}
                    title={page.title}
                    description={page.content.replace(/(<([^>]+)>)/ig, "").substring(0, 160)}
                    meta={[
                        {'og:title': page.title},
                        {'og:description': page.title},
                        {'og:type': `article`},
                        {'twitter:card': page.title},
                        {'twitter:creator': page.title},
                        {'twitter:title`': page.title},
                        {'twitter:description`': page.title}
                    ]}
                />
                <Single
                    item={page}
                    url={location.href}
                />
            </Layout>
        )
    }
}

PageTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
};

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    page: wordpressPage(id: { eq: $id }) {
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
