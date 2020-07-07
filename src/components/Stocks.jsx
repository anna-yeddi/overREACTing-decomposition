import React from 'react'
import PropTypes from 'prop-types'

function Stocks(props) {
  return (
    <div className="row text-uppercase">
      <div className="col">USD 71,83 +0,46</div>
      <div className="col">EUR 81,20 +0,91</div>
      <div className="col">Oil 43,12 +0,82%</div>
      {props.children}
    </div>
  )
}

Stocks.propTypes = {}

export default Stocks
