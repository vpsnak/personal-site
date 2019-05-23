import React from 'react'
import Img from 'gatsby-image'

import {
    FaGithub,
    FaLinkedinIn,
    FaFacebookSquare
} from 'react-icons/fa'

import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default ({profile, image}) => (
    <Container>
        <Row className={"personal-profile"}>
            <Col md={4} className={"personal-profile__avatar"} style={{
                position: 'relative',
                top: '50px'
            }}>
                <Img fixed={image} className="custom-logo" alt={profile.title} />
            </Col>
            <Col md={8}>
                <p className={"personal-profile__name"}>{profile.title}_</p>
                <p className="personal-profile__work">{profile.acf.job_title}</p>
                <div className="personal-profile__contacts">
                    <dl className="contact-list contact-list__opacity-titles">
                        <dt>Age:</dt>
                        <dd>{profile.acf.age}</dd>
                        <dt>Phone:</dt>
                        <dd><a href={`tel:+30${profile.acf.phone}`}>(+30){profile.acf.phone}</a></dd>
                        <dt>Email:</dt>
                        <dd><a href={`mailto:${profile.acf.email}`}>{profile.acf.email}</a></dd>
                        <dt>Address:</dt>
                        <dd>{profile.acf.address}</dd>
                    </dl>
                </div>
                <p className="personal-profile__social">
                    <a href={profile.acf.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href={profile.acf.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href={profile.acf.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                </p>
            </Col>
        </Row>
    </Container>
);
