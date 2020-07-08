import React from 'react'
// import PropTypes from 'prop-types'

/**
 * Renders a <SearchLinks/> component
 * placed within the <SearchBar /> components
 *
 * @global
 * @component
 *
 * @todo When filling the content, ensure temporary
 *       styling and code to create URL from the link text
 *       is removed or updated.
 *
 * This component does not receive any props.
 */
function SearchLinks() {
  const categories = [
    'Lorem',
    'Ipsum',
    'Dolor',
    'Sit',
    'Amet',
    'Consectetur',
    'Adipisicing',
    'Elit',
    'Tenetur',
    'more',
  ]

  return (
    <nav style={{ width: '70%' }} aria-label="Search Categories">
      {categories.map((o, i) => (
        <a href={'/' + o} key={i} className="text-info mr-4">
          {o}
        </a>
      ))}
    </nav>
  )
}

// SearchLinks.propTypes = {}

export default SearchLinks
