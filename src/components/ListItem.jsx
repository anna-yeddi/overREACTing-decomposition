import React from 'react'
import PropTypes from 'prop-types'

function ListItem(props) {
  return (
    <li>
      <a href={props.url} className="text-reset text-truncate">
        {props.children}
      </a>
    </li>
  )
}

ListItem.propTypes = {}

export default ListItem
