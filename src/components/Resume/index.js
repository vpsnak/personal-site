import React, {Component} from "react"
// import {graphql, Link} from "gatsby"

import Section from "../Layout/Section"
import Skill from "./Skill"
import ResumeEntry from "./ResumeEntry"

import {
    Row,
    Col
} from 'reactstrap';


class Resume extends Component {
    render() {

        return (
            <Section id={"resume"} title={"Resume_"} description={"Lorem ipsum dolor sit amet, communication adipisicing elit, helpful eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud sence of humour ullamco laboris nisi ut honest ea commodo consequat. Duis aute irure dolor in upper-intermediate english level velit dolore eu ivivdtevoluptatem ontend developer."}>
                <Row>
                    <Col md={8} className={"section__resume resume-list"}>
                        <h3 className={"resume-list_title"}>education</h3>
                        <ResumeEntry title={"APPLE"} from={"2006"} to={"2010"}>
                            Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </ResumeEntry>
                        <ResumeEntry title={"TECH UNIVERSITY"} from={"2006"} to={"2010"}>
                            Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </ResumeEntry>
                        <ResumeEntry title={"OLLY’S STUDIO"} from={"2006"} to={"2010"}>
                            Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </ResumeEntry>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className={"section__resume resume-list"}>
                        <h3 className={"resume-list_title"}>employment</h3>
                        <ResumeEntry title={"UNIVERSITY OF MINNESOTA TWIN CITIES"} from={"2006"} to={"2010"}>
                            Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </ResumeEntry>
                        <ResumeEntry title={"SCHOOL OF INFORMATIONAL TECHNOLOGIES"} from={"2006"} to={"2010"}>
                            Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </ResumeEntry>
                        <ResumeEntry title={"LOREM IPSUM SCHOOL"} from={"2006"} to={"2010"}>
                            Student, Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusmod tempor incididunt ut
                        </ResumeEntry>
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
        )
    }
}

export default Resume