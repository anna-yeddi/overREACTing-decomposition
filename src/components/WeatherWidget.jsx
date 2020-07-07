import React from 'react'
import PropTypes from 'prop-types'
import HeadingLink from './HeadingLink'

function WeatherWidget(props) {
  return (
    <>
      <HeadingLink url="#">Weather</HeadingLink>
      <div className="row align-items-center">
        <div className="col row align-items-center">
          <span className="material-icons col-5" style={{ fontSize: '3rem' }}>
            nights_stay
          </span>
          <span className="sr-only">Cloudy night</span>
          <p className="col h3 pl-0">+17 C</p>
        </div>
        <div className="col text-small">
          <p className="p-0 m-0">
            <small>Morning: +19 C,</small>
          </p>
          <p className="p-0 mt-n1">
            <small>Day: +25 C</small>
          </p>
        </div>
      </div>
    </>
  )
}

WeatherWidget.propTypes = {}

export default WeatherWidget
