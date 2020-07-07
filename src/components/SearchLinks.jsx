import React from 'react'
import PropTypes from 'prop-types'

function SearchLinks(props) {
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

SearchLinks.propTypes = {}

export default SearchLinks
