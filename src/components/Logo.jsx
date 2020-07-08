import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <Logo /> component
 * that contain a logo image link or image text
 *
 * @component
 * @global
 */
function Logo(props) {
  return (
    <h1 className="mr-3">
      <a href={props.url} className="text-reset">
        <span className="text-info">L</span>ogogo
      </a>
    </h1>
  )
}

Logo.propTypes = {
  /** @param {Object} props Data set responsible for filling the component's link */
  props: PropTypes.objectOf({
    /** @param {string} props.url - url for href within the logo link */
    url: PropTypes.string.isRequired,
  }),
}

export default Logo
