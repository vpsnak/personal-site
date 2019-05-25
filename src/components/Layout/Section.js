import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import {InView} from 'react-intersection-observer'
import {Col, Container, Row} from 'reactstrap'

const SectionDescription = styled.p({
  marginBottom: `2rem`
})

const SectionTitle = styled.h2({
  fontSize: `36px`,
  lineHeight: `42px`,
  fontFamily: `"Roboto Mono",monospace`,
  marginBottom: `40px`
})

class Section extends Component {
  state = {
    active: false,
    inView: false,
    animate: true,
    title: this.props.title
  }

  animateText = (text, current, interval) => {
    if (text.length > 0 && this.state.title) {
      current += text.substr(0, 1)
      this.setState({title: current, active: true})
      setTimeout(() => {
        this.animateText(text.substr(1), current, interval)
      }, interval)
    } else {
      this.setState({animate: false, active: false})
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.animate && this.state.inView && !this.state.active) {
      this.animateText(this.state.title, '', 100)
    }
  }

  render() {
    const {children, id, extraClass = 'section', description} = this.props

    return (
      <Container id={id} tag="section" className={extraClass}>
        <Row>
          <Col md="10">
            <InView onChange={(inView) => this.setState({inView: inView})} triggerOnce>
              {({inView, ref}) => (
                <SectionTitle ref={ref}>{this.state.title}</SectionTitle>
              )}
            </InView>
            {description &&
            <SectionDescription dangerouslySetInnerHTML={{__html: description}} />
            }
          </Col>
        </Row>
        {children}
      </Container>
    )
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node
}

export default Section
