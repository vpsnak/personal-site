import React from "react"
import {graphql, StaticQuery} from "gatsby"
import Menu from "../Menu/index"
import Img from "gatsby-image"

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

export const HomeHeader = () => (
    <StaticQuery
        query={graphql`
            query HeaderQuery {
                headerImage: file(relativePath: { eq: "images/header_bg.jpg" }) {
                      childImageSharp {
                        fixed(width: 1900, height: 470, cropFocus: CENTER) {
                          src
                        }
                      }
                }
                profileImage: file(relativePath: { eq: "images/profile_picture.jpg" }) {
                      childImageSharp {
                        fixed(width: 315, height: 400, cropFocus: CENTER) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                }
            }
        `}
        render={node =>
            <header className={"main-header"} style={{backgroundImage: "url('" + node.headerImage.childImageSharp.fixed.src + "')"}}>
                <Menu />
                <Container>
                    <Row className={"personal-profile"}>
                        <Col md={4} className={"personal-profile__avatar"} style={{position: 'relative',top: '50px'}}>
                            <Img fixed={node.profileImage.childImageSharp.fixed} className="custom-logo" alt="Evangelos Pallis"/>
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
                                <a href="https://github.com/vpsnak" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                <a href="https://linkedin.com/in/evangelos-pallis/" target="_blank" rel="noopener noreferrer"><FaLinkedinSquare /></a>
                                <a href="https://facebook.com/vpsnak" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </header>
        }
    />
);

const PageHeader = () => (
    <>
    <Menu />
    <header className="background blog-header" style={{backgroundImage: "url(assets/img/img_bg_main.jpg)"}}>
    </header>
    </>
);

const Header = (props) => (
    (props.path === '/') ? <HomeHeader /> : <PageHeader />
);

export default Header
