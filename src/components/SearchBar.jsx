import React from 'react'
import PropTypes from 'prop-types'
import SearchExample from './SearchExample'
import SearchLinks from './SearchLinks'

function SearchBar(props) {
  return (
    <div className="row">
      <div className="col px-0 mt-3">
        <SearchLinks />
        <div style={{ width: '90%' }} role="search">
          <input type="text" name="search" className="search-input" />
          <button className="btn btn-info" style={{ width: '10%' }}>
            Search
          </button>
        </div>
        <SearchExample example="Lorem ipsum dolor." />
      </div>
    </div>
  )
}

SearchBar.propTypes = {}

export default SearchBar
