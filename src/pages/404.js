import React from 'react'
import {Link} from 'gatsby'
import {Layout} from '../components/Layout'
import {Single} from '../templates/structure'
import SEO from '../components/seo'
import {Col, Row} from 'reactstrap'

const PageContent = () => {
  return (
    <Row>
      <Col md={5} className={`m-auto`}>
        <h2>I'm Embarrassed...</h2>
        <p>Sorry, you walked in on the wrong file.</p>
        <Link
          to={`/`}
        >
          <button
            css={{cursor: `pointer`}}
            className={`site-btn site-btn--form`}
          >
            Get me outta here...
          </button>
        </Link>
      </Col>
    </Row>
  )
}

const NotFoundPage = (props) => {
  const page = {
    title: `Error #404`
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Single
        item={page}
        url={props.location.href}
        share
      >
        <PageContent />
      </Single>
    </Layout>
  )
}

export default NotFoundPage
