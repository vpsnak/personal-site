import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

import {FacebookShareButton, LinkedinShareButton} from 'react-share'

import {FaFacebookSquare, FaFolderOpen, FaLinkedin, FaLongArrowAltLeft} from 'react-icons/fa'

import {Col, Container, Row} from 'reactstrap'

// @TODO fix share icons div in p
const Single = ({item, url, share = false, children}) => {

  return (
    <Container>
      <div className="article">
        <Row>
          <Col md={12}>
            <Link to={`/`} className="article__back-link d-flex align-items-center pt-2 pb-2">
              <FaLongArrowAltLeft size={15} className={`mr-2`} />
              Back
            </Link>
            <h1 className="article__title" dangerouslySetInnerHTML={{__html: item.title}} />
            <p className="article_categories">
              {item.categories && item.categories.map(category => (
                <span key={category.name}><FaFolderOpen /> {category.name}</span>
              ))}
            </p>
            <p className="article_date">{item.date}</p>
            <div dangerouslySetInnerHTML={{__html: item.content}} />
            {children}
            {share &&
            <div className="article__share d-flex align-items-center">Share this:
              <LinkedinShareButton
                className={`d-flex align-items-center`}
                css={{cursor: `pointer`}}
                url={url}
              >
                <FaLinkedin
                  className={`p-1`}
                  size={30}
                />
              </LinkedinShareButton>
              <FacebookShareButton
                className={`d-flex align-items-center`}
                css={{cursor: `pointer`}}
                url={url}
                quote={'wow'}
                hashtag={'vpsnak'}
              >
                <FaFacebookSquare
                  className={`p-1`}
                  size={30}
                />
              </FacebookShareButton>
            </div>
            }
          </Col>
        </Row>
      </div>
    </Container>
  )
}

Single.propTypes = {
  item: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default Single