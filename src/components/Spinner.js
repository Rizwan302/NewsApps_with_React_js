import React, { Component } from 'react'
import PropTypes from 'prop-types'
import spin from './spin.gif'
export default class Spinner extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <img className='' src={spin} alt="spin" />
      </div>
    )
  }
}
