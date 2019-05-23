import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

import Section from '../Layout/Section'
import {
    Skill,
    RoadMapItem
} from '../Element'

import {
    Row,
    Col
} from 'reactstrap';

const ResumeSection = ({data}) => (
    <Section
        id={data.resume ? data.resume.slug : 'resume'}
        title={data.resume ? `${data.resume.title}_` : 'Resume_'}
        description={data.resume ? data.resume.content : ''}
    >
        {data.allWordpressWpEducations &&
        <Row>
            <Col md={8} className={"section__resume resume-list"}>
                <h3 className={"resume-list_title"}>education</h3>
                {data.allWordpressWpEducations.totalCount > 0 && data.allWordpressWpEducations.edges.map((edge, key) => {
                        const item = edge.node;
                        return (
                            <RoadMapItem key={key} title={item.title} from={item.acf.from} to={item.acf.to}>
                                {item.content}
                            </RoadMapItem>
                        )
                    }
                )}
            </Col>
        </Row>
        }
        {data.allWordpressWpEmployments &&
        <Row>
            <Col md={8} className={"section__resume resume-list"}>
                <h3 className={"resume-list_title"}>employment</h3>
                {data.allWordpressWpEmployments.totalCount > 0 && data.allWordpressWpEmployments.edges.map((edge, key) => {
                        const item = edge.node;
                        return (
                            <RoadMapItem key={key} title={item.title} from={item.acf.from} to={item.acf.to}>
                                {item.content}
                            </RoadMapItem>
                        )
                    }
                )}
            </Col>
        </Row>
        }
        <Row className={"section__resume progress-list js-progress-list"}>
            <Col md={12}>
                <h3 className={"progress-list__title"}>general skills</h3>
            </Col>
            <Col md={5} className="mr-auto">
                <Skill title={"html5"} percent={80} />
                <Skill title={"css3"} percent={90} />
                <Skill title={"javascript"} percent={75} />
                <Skill title={"jquery"} percent={80} />
            </Col>
            <Col md={5} className="mr-auto">
                <Skill title={"bootstrap 4"} percent={60} />
                <Skill title={"docker"} percent={80} />
                <Skill title={"git"} percent={90} />
                <Skill title={"php"} percent={75} />
            </Col>
        </Row>
    </Section>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query ResumeQuery {
              allWordpressWpEducations(sort: {fields: [menu_order], order: DESC}, limit: 3) {
                totalCount
                edges {
                  node {
                    wordpress_id
                    title
                    content
                    acf {
                      from
                      to
                    }
                  }
                }
              }
              allWordpressWpEmployments(sort: {fields: [menu_order], order: DESC}, limit: 3) {
                totalCount
                edges {
                  node {
                    wordpress_id
                    title
                    content
                    acf {
                      from
                      to
                      company
                    }
                  }
                }
              }
              resume: wordpressPage(slug: {eq: "resume"}) {
                id
                wordpress_id
                slug
                title
                content
                acf {
                  job_title
                  age
                  phone
                  email
                  address
                  github
                  linkedin
                  facebook
                  cv
                }
              }
            }
            `}
        render={node =>
            <ResumeSection data={node} {...props} />
        }
    />
);
