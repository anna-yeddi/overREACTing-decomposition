import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <Stocks /> component
 * placed within the <WidgetNews /> component
 *
 * @global
 * @component
 * @requires External Stock data API
 *
 * @todo Add API to fetch stock data and update JSX accordingly.
 */
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

Stocks.propTypes = {
  /** @param {Object} props List of data for filling the tabpanel */
  props: PropTypes.objectOf({
    /**
     * @param {object} props.children Content to be used as the last
     * element within the row of Stock data elements.
     * Passed by <WidgetNews /> component
     */
    children: PropTypes.node.isRequired,
  }),
}

export default Stocks
