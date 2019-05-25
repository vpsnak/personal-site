import React, {Component} from 'react'
import PropTypes from 'prop-types'

class RoadMapItem extends Component {
  render() {
    const {
      title,
      from,
      to,
      children
    } = this.props

    return (
      <div className={'resume-list__block'}>
        <p className={'resume-list__block-title'}>{title}</p>
        <p className={'resume-list__block-date'}>{from} - {to}</p>
        <p dangerouslySetInnerHTML={{__html: children}} />
      </div>
    )
  }
}

RoadMapItem.propTypes = {
  title: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default RoadMapItem