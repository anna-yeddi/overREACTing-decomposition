import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <SearchExample /> component
 * placed within the <SearchBar /> components
 *
 * @global
 * @component
 * @memberof <SearchExample />
 */
function SearchExample(props) {
  return (
    <div className="w-50">
      Example for the search request:{' '}
      <span className="text-black-50">{props.example}</span>
    </div>
  )
}

SearchExample.propTypes = {
  /** @param {Object} props List of data for filling the tabpanel */
  props: PropTypes.objectOf({
    /**
     * @param {string} props.example Content of the textual example
     * to be placed under the Search Bar input control
     */
    example: PropTypes.string.isRequired,
  }),
}

export default SearchExample
