import React, {Component} from 'react'
import {graphql} from 'gatsby'

import {Layout} from '../components/Layout'
// import Section from '../components/Layout/Section'
// import PostItem from '../templates/post/item'
// import ProjectItem from '../templates/project/item'
// import Profile from '../components/Profile/index'
// import Resume from '../components/Resume/index'

import SEO from '../components/seo'

// import {
//     Row,
//     Col
// } from 'reactstrap';

import {
    Hi,
    Resume
} from '../components/Container'

class IndexPage extends Component {
    render() {
        const {
            data,
            location
        } = this.props;

        return (
            <Layout path={location.pathname} data={data}>
                <SEO
                    title={`Programming made easy`}
                    location={location}
                    keywords={[`web developer`, `software developer`, `react`, `php`, `css`, `javascript`, `git`, `wordpress`, `magento`, `magento 2`]}
                />
                <Hi />
                <hr />
                <Resume />
                <hr />
                {/*<Section id="portfolio" title="My projects_">*/}
                {/*<div className={"portfolio-cards"}>*/}
                {/*{data.allWordpressWpProjects.edges.map((item) =>*/}
                {/*<ProjectItem key={item.node.slug} item={item.node} />*/}
                {/*)}*/}
                {/*</div>*/}
                {/*</Section>*/}
                {/*<hr />*/}
                {/*<Section id="blog" title="Latest Posts_">*/}
                {/*<Row className={"post-cards"}>*/}
                {/*{data.allWordpressPost.edges.map((item) =>*/}
                {/*<Col key={item.node.slug} md={4}>*/}
                {/*<PostItem item={item.node} />*/}
                {/*/!*{console.log(item)}*!/*/}
                {/*</Col>*/}
                {/*)}*/}
                {/*</Row>*/}
                {/*</Section>*/}
                {/*<hr />*/}
            </Layout>
        )
    }
}

export default IndexPage

export const query = graphql`
    query HomeQuery {
      allWordpressPage(sort: {fields: [date], order: DESC}, limit: 3) {
        edges{
          node{
            wordpress_id
            slug
            date(formatString: "MMMM DD, YYYY")
            title
            content
            link
          }
        }
      }
    }
`;
