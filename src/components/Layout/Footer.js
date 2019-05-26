import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import {Section} from '../Layout'
import {FaFacebookSquare, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {Col, Row} from 'reactstrap'
import {Contact} from '../Container'

const Footer = (props) => {
  const {
    data
  } = props

  const footerImage = data.footerImage.childImageSharp.fixed

  const profile = data.profile

  return (
    <footer className={'background'}>
      <Img fixed={footerImage}
           style={{
             position: 'absolute',
             left: 0,
             top: 0,
             width: '100%',
             height: '100%',
             zIndex: '-1'
           }} />
      <Section id={'contact'} title={'Get in touch_'}>
        <Row className={'contacts'}>
          <Col md={5} lg={4}>
            <div className={'contacts__list'}>
              <dl className={'contact-list'}>
                <dt>Phone:</dt>
                <dd><a href={`tel:+30${profile.acf.phone}`}>(+30){profile.acf.phone}</a></dd>
                <dt>Email:</dt>
                <dd><a href={`mailto:${profile.acf.email}`}>{profile.acf.email}</a></dd>
              </dl>
            </div>
            <div className={'contacts__social'}>
              <ul>
                <li>
                  <a href={profile.acf.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    Github
                  </a>
                </li>
                <li>
                  <a href={profile.acf.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href={profile.acf.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={7} lg={5}>
            <div className={'contacts__form'}>
              <p className={'contacts__form-title'}>Or just write me a letter here_</p>
              <Contact />
            </div>
            <div className={'footer'}>
              <p>© {new Date().getFullYear()}, Vpsnak. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Section>
    </footer>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
            query FooterQuery {
              footerImage: file(relativePath: {eq: "images/footer_bg.jpg"}) {
                childImageSharp {
                  fixed(width: 1900, height: 470, cropFocus: CENTER) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
              profile: wordpressPage(slug: {eq: "evangelos-pallis"}) {
                id
                wordpress_id
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
                  #cv
                }
                #featured_media {
                #  localFile {
                #    childImageSharp {
                #      fluid(maxWidth: 1920) {
                #        ...GatsbyImageSharpFluid_withWebp
                #      }
                #    }
                #  }
                #}
              }
            }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)