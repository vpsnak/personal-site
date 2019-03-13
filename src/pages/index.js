import React, {Component} from "react"
import {graphql} from "gatsby"
// import "gatsby-transform-sharp"
// import "gatsby-plugin-sharp"

import Layout from "../components/Layout/index"
import Section from "../components/Layout/Section"
import PostItem from "../templates/post/item"
import ProjectItem from "../templates/project/item"
import Profile from "../components/Profile/index"
import Resume from "../components/Resume/index"

import SEO from "../components/seo"

import {
    Row,
    Col
} from 'reactstrap';


class IndexPage extends Component {
    render() {
        const data = this.props.data;

        return (
            <Layout path={this.props.location.pathname}>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <Profile />
                <hr />
                <Resume />
                <hr />
                <Section id="portfolio" title="My projects_">
                    <div className={"portfolio-cards"}>
                        {data.allWordpressWpProjects.edges.map((item) =>
                            <ProjectItem key={item.node.slug} item={item.node} />
                        )}
                    </div>
                </Section>
                <hr />
                <Section id="blog" title="Latest Posts_">
                    <Row className={"post-cards"}>
                        {data.allWordpressPost.edges.map((item) =>
                            <Col key={item.node.slug} md={4}>
                                <PostItem item={item.node} />
                                {/*{console.log(item)}*/}
                            </Col>
                        )}
                    </Row>
                </Section>
                <hr />
            </Layout>
        )
    }
}

export default IndexPage

// childImageSharp {
//     fluid(maxWidth: 680) {
//     ...GatsbyImageSharpFluid
//     }
// }

export const query = graphql`
        query HomeQuery {
          allWordpressPost(sort: {fields: [date], order: DESC}, limit: 3) {
            edges{
              node{
                wordpress_id
                slug
                date(formatString: "MMMM DD, YYYY")
                title
                content
                link
                featured_media{
                  source_url
                  localFile{
                    name
                    extension
                    base
                    relativePath
                  }
                  media_details{
                    width
                    height
                    file
                  }
                }
              }
            }
          }
          allWordpressWpProjects(sort: {fields: [date], order: DESC}, limit: 3) {
            edges{
              node{
                slug
                date(formatString: "MMMM DD, YYYY")
                title
                content
                link
                spirit_project_stacks{
                  term_id
                  name
                  slug
                }
                spirit_project_categories{
                  term_id
                  name
                  slug
                }
                spirit_project_meta{
                  spirit_project_client
                  spirit_project_client_link
                }
                featured_media{
                  source_url
                  localFile{
                    relativeDirectory
                    base
                    relativePath
                  }
                  media_details{
                    width
                    height
                    file
                  }
                }
              }
            }
          }
        }
    `;
