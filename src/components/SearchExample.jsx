import React from 'react'
import PropTypes from 'prop-types'

function SearchExample(props) {
  return (
    <div className="w-50">
      Example for the search request:{' '}
      <span className="text-black-50">{props.example}</span>
    </div>
  )
}

SearchExample.propTypes = {}

export default SearchExample
