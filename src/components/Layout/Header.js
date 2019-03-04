import React from "react"
import Menu from "../Menu/index"

import {
    FaGithub,
    FaLinkedinSquare,
    FaFacebookSquare
} from "react-icons/lib/fa"

import {
    Container,
    Row,
    Col
} from 'reactstrap';

const Header = () => (
    <header className={"main-header"} style={{backgroundImage: "url('http://cv.digitalmedia.com.gr/wp-content/themes/spirit/assets/img/img_bg_header.jpg')" }}>
        <Menu/>
            <Container>
                <Row className={"personal-profile"}>
                    <Col md={4} className={"personal-profile__avatar"}>
                        <img width="349" height="400" src="http://cv.digitalmedia.com.gr/wp-content/uploads/2018/12/cropped-snak-blank-1.jpg" className="custom-logo" alt="Evangelos Pallis" itemProp="logo" srcSet="http://cv.digitalmedia.com.gr/wp-content/uploads/2018/12/cropped-snak-blank-1.jpg 349w, http://cv.digitalmedia.com.gr/wp-content/uploads/2018/12/cropped-snak-blank-1-262x300.jpg 262w" sizes="(max-width: 349px) 100vw, 349px"/>
                    </Col>
                    <Col md={8}>
                        <p className={"personal-profile__name"}>Evangelos Pallis_</p>
                        <p className="personal-profile__work">Mid - Senior Full Stack Developer</p>
                        <div className="personal-profile__contacts">
                            <dl className="contact-list contact-list__opacity-titles">
                                <dt>Age:</dt>
                                <dd>24</dd>
                                <dt>Phone:</dt>
                                {/*preg_replace('/[^a-zA-Z0-9+.]/', '', $phone)*/}
                                <dd><a href="tel:+30697452654">(+30) 697452654</a></dd>
                                <dt>Email:</dt>
                                <dd><a href="mailto:info.vpsnak@gmail.com">info.vpsnak@gmail.com</a></dd>
                                <dt>Address:</dt>
                                <dd>Marousi, Athens Greece</dd>
                            </dl>
                        </div>
                        <p className="personal-profile__social">
                            <a href="https://github.com/vpsnak" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                            <a href="https://linkedin.com/in/evangelos-pallis/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare/></a>
                            <a href="https://facebook.com/vpsnak" target="_blank" rel="noopener noreferrer"><FaFacebookSquare/></a>
                        </p>
                    </Col>
                </Row>
            </Container>
    </header>
);

export default Header
