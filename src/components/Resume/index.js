import React from "react"
import {graphql, StaticQuery} from "gatsby"

import Section from "../Layout/Section"
import Skill from "./Skill"
import ResumeEntry from "./ResumeEntry"

import {
    Row,
    Col
} from 'reactstrap';


const ResumeSection = ({data}) => (
    <Section id={"resume"} title={"Resume_"} description={"Lorem ipsum dolor sit amet, communication adipisicing elit, helpful eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud sence of humour ullamco laboris nisi ut honest ea commodo consequat. Duis aute irure dolor in upper-intermediate english level velit dolore eu ivivdtevoluptatem ontend developer."}>
        <Row>
            <Col md={8} className={"section__resume resume-list"}>
                <h3 className={"resume-list_title"}>education</h3>
                {data.allWordpressWpEducations.edges.map((item) =>
                    <ResumeEntry key={item.node.wordpress_id} title={item.node.title} from={item.node.spirit_education_meta.spirit_education_datefrom} to={item.node.spirit_education_meta.spirit_education_dateto}>
                        {item.node.content}
                    </ResumeEntry>
                )}
            </Col>
        </Row>
        <Row>
            <Col md={8} className={"section__resume resume-list"}>
                <h3 className={"resume-list_title"}>employment</h3>
                {data.allWordpressWpEmployments.edges.map((item) =>
                    <ResumeEntry
                        key={item.node.wordpress_id}
                        title={item.node.title}
                        from={item.node.spirit_employment_meta.spirit_employment_datefrom}
                        to={item.node.spirit_employment_meta.spirit_employment_dateto  + ' @ ' + item.node.spirit_employment_meta.spirit_employment_company}
                    >
                        {item.node.content}
                    </ResumeEntry>
                )}
            </Col>
        </Row>
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

const Resume = (props) => (
        <StaticQuery
            query={graphql`
                query ResumeQuery {
                  allWordpressWpEducations(sort: {fields: [menu_order], order: DESC}, limit: 3) {
                    edges{
                      node{
                        wordpress_id
                        slug
                        date(formatString: "MMMM DD, YYYY")
                        title
                        content
                        link
                        spirit_education_meta{
                          spirit_education_datefrom
                          spirit_education_dateto
                        }
                      }
                    }
                  }
                  allWordpressWpEmployments(sort: {fields: [menu_order], order: DESC}, limit: 3) {
                    edges{
                      node{
                        wordpress_id
                        slug
                        date(formatString: "MMMM DD, YYYY")
                        title
                        content
                        link
                        spirit_employment_meta{
                          spirit_employment_company
                          spirit_employment_datefrom
                          spirit_employment_dateto
                        }
                      }
                    }
                  }
                }
            `}
            render={node =>
                <ResumeSection data={node} />
            }
        />
    )
;

export default Resume
