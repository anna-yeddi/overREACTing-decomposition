import React from 'react'
import PropTypes from 'prop-types'
import HeadingLink from './HeadingLink'

/**
 * Renders a <WeatherWidget /> component
 * that includes user's geolocation and a weather forecast
 *
 * @memberof <Widgets /> component
 * @global
 * @component
 * @requires react-geolocated
 * @see https://www.npmjs.com/package/react-geolocated
 *
 * @todo Ensure react-geolocated is installed
 * as well as other related dependencies
 */
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

WeatherWidget.propTypes = {
  /** @param {Object{}} props Data set for providing the weather forecast */
  props: PropTypes.objectOf({
    /** @param {Object} coords User's coordinates */
    coords: PropTypes.objectOf({
      /** @param  {string} coords.latitude Latitude from react-geolocated */
      latitude: PropTypes.string.isRequired,
      /** @param  {string} coords.longitude Longitude from react-geolocated */
      longitude: PropTypes.string.isRequired,
    }),
  }),
}

export default WeatherWidget
