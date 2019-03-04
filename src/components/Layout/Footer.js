import React, {Component} from "react"
// import {graphql, Link} from "gatsby"

import Section from "../Layout/Section"
import Contact from "../Contact/index"

import {
    FaGithub,
    FaLinkedinSquare,
    FaFacebookSquare
} from "react-icons/lib/fa"

import {
    Row,
    Col
} from 'reactstrap';


class Footer extends Component {
    render() {

        return (
            <footer className={"background"} style={{backgroundImage: "url(http://cv.digitalmedia.com.gr/wp-content/themes/spirit/assets/img/img_bg_main.jpg)"}}>
                <Section id={"contact"} title={"Get in touch_"}>
                    <Row className={"contacts"}>
                        <Col md={5} lg={4}>
                            <div className={"contacts__list"}>
                                <dl className={"contact-list"}>
                                    <dt>Phone:</dt>
                                    {/*preg_replace('/[^a-zA-Z0-9+.]/', '', $phone)*/}
                                    <dd><a href="tel:+30697452654">(+30) 697452654</a></dd>
                                    <dt>Email:</dt>
                                    <dd><a href="mailto:info.vpsnak@gmail.com">info.vpsnak@gmail.com</a></dd>
                                </dl>
                            </div>
                            <div className={"contacts__social"}>
                                <ul>
                                    <li><a href="https://github.com/vpsnak" target="_blank" rel="noopener noreferrer"><FaGithub/> Github</a></li>
                                    <li><a href="https://linkedin.com/in/evangelos-pallis" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare/> Linkedin</a></li>
                                    <li><a href="https://facebook.com/vpsnak" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/> Facebook</a></li>
                            </ul>
                        </div>
                        </Col>
                        <Col md={7} lg={5}>
                            <div className={"contacts__form"}>
                                <p className={"contacts__form-title"}>Or just write me a letter here_</p>
                                <Contact/>
                            </div>
                            <div className={"footer"}>
                                <p>© {new Date().getFullYear()}, Vpsnak. All Rights Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Section>
            </footer>
        )
    }
}

export default Footer