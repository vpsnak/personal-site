import React, {Component} from "react"
import {graphql, StaticQuery} from "gatsby"
import PropTypes from "prop-types"

import {Row, Col} from 'reactstrap';

import Section from '../../components/Layout/Section'

class PostReleated extends Component {
    render() {
        const data = this.props.data.allWordpressPost.edges;

        return (
            <Section title="Other Posts_">
                <Row className="posts">
                    {data.map((post) =>
                        <Col key={post.node.id} md={5} className="mr-auto">
                            <div class="posts__item">
                                <a href={'/' + post.node.slug}>
                                    <h3 className="posts__title" dangerouslySetInnerHTML={{__html: post.node.title}} />
                                    <p className="posts__description" dangerouslySetInnerHTML={{__html: post.node.content.replace(/(<([^>]+)>)/ig, "").substring(0, 110) + '...'}} />
                                </a>
                            </div>
                        </Col>
                    )}
                </Row>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
        query ($id: Int) {
          allWordpressPost(filter: {categories: {elemMatch: {wordpress_id: {eq: $id}}}}, sort: {fields: [date], order: DESC}, limit: 6) {
            edges {
              node {
                id
                wordpress_id
                title
                slug
                content
              }
            }
          }
        }
    `}
        render={data => <PostReleated data={data} {...props} />}
    />
)

PostReleated.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
};