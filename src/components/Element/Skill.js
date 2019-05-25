import React, {Component} from 'react'

import {Progress} from 'reactstrap'

class Skill extends Component {
  state = {
    inView: false,
    animate: false,
    percent: 0
  }

  handleScroll = () => {
    const top = this.progressBar.getBoundingClientRect().top
    if ((top) >= 0 && (top) <= window.innerHeight - 25) {
      window.removeEventListener('scroll', this.handleScroll)
      this.setState({
        animate: true,
        inView: true
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.animate) {
      // this.animateText(this.sectionTitle.innerHTML, '', 100)
      // this.progressBar.value(this.props.percent);
      window.removeEventListener('scroll', this.handleScroll)
      this.setState({
        animate: false,
        percent: this.props.percent
      })
    }
  }

  render() {
    const {title, percent} = this.props

    return (
      <div className="progress-list__skill" ref={node => this.progressBar = node}>
        <p>
          <span className="progress-list__skill-title">{title}</span>
          <span className="progress-list__skill-value">{percent}%</span>
        </p>
        <Progress value={this.state.percent} max={100} />
      </div>
    )
  }
}

export default Skill