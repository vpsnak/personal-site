import React from 'react'
// import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import {FacebookShareButton, LinkedinShareButton} from 'react-share'

import {FaFacebookSquare, FaFolderOpen, FaLinkedin, FaLongArrowAltLeft} from 'react-icons/fa'

import {Col, Container, Row} from 'reactstrap'

// @TODO fix share icons div in p
const Single = ({item, url}) => {

  return (
    <Container>
      <div className="article">
        <Row>
          <Col md={12}>
            <a href="/" className="article__back-link" onClick={() => console.log('go back')}>
              <FaLongArrowAltLeft />
              Back
            </a>
            <h1 className="article__title" dangerouslySetInnerHTML={{__html: item.title}} />
            <p className="article_categories">
              {item.categories && item.categories.map(category => (
                <span key={category.name}><FaFolderOpen /> {category.name}</span>
              ))}
            </p>
            <p className="article_date">{item.date}</p>
            <div dangerouslySetInnerHTML={{__html: item.content}} />
            <p className="article__share">Share this:
              <LinkedinShareButton
                url={url}
              >
                <FaLinkedin />
              </LinkedinShareButton>
              <FacebookShareButton
                url={url}
                quote={'wow'}
                hashtag={'vpsnak'}
              >
                <FaFacebookSquare />
              </FacebookShareButton>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

Single.propTypes = {
  item: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
}

export default Single