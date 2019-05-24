import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import PropTypes from 'prop-types'
import {Row, Col} from 'reactstrap'
import Section from '../../components/Layout/Section'


const Related = (props) => {
    const {
        data,
        callerId = 0
    } = props;

    const Related_posts = data.posts.edges;

    if (Related_posts.length === 0)
        return '';

    return (
        <Section title="Other Posts_">
            <Row className="posts">
                {Related_posts.map((edge, key) => {
                        const post = edge.node;
                        if (post.wordpress_id === callerId)
                            return '';

                        return (
                            <Col key={key} md={5} className="mr-auto">
                                <div className="posts__item">
                                    <a href={'/' + post.slug}>
                                        <h3 className="posts__title" dangerouslySetInnerHTML={{__html: post.title}} />
                                        <p className="posts__description" dangerouslySetInnerHTML={{__html: post.content.replace(/(<([^>]+)>)/ig, "").substring(0, 110) + '...'}} />
                                    </a>
                                </div>
                            </Col>
                        )
                    }
                )}
            </Row>
        </Section>
    )
};

Related.propTypes = {
    data: PropTypes.object.isRequired,
    callerId: PropTypes.number.isRequired,
    edges: PropTypes.array,
};

export default ({callerId, ...props}) => (
    <StaticQuery
        variables={callerId}
        query={graphql`
            query ($id: Int, $exclude_post: Int) {
              posts: allWordpressPost(filter: {categories: {elemMatch: {wordpress_id: {eq: $id}}}, wordpress_id: {ne: $exclude_post}}, sort: {fields: [date], order: DESC}, limit: 6) {
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
        render={data =>
            <Related
                data={data}
                callerId={callerId}
                {...props}
            />
        }
    />
)