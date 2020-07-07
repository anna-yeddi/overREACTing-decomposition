import React from 'react'
import PropTypes from 'prop-types'

function HeadingLink(props) {
  return (
    <h2 className="pt-3">
      <a href={props.url} className="text-info">
        {props.children}
      </a>
    </h2>
  )
}

HeadingLink.propTypes = {}

export default HeadingLink
