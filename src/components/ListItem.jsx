import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <ListItem /> component
 * that is contains within a <ListItem /> components
 *
 * @global
 * @component
 * @memberof <List />
 *
 */
function ListItem(props) {
  return (
    <li>
      <a href={props.url} className="text-reset text-truncate">
        {props.children}
      </a>
    </li>
  )
}

ListItem.propTypes = {
  /** @param {Object|Object{}} props List of data sets for filling the list */
  props: PropTypes.objectOf({
    /** @param  {string} arr[].url Link to be used as href within a list item link */
    url: PropTypes.string.isRequired,
    /** @param {object} props.children Content to be printed out by the component */
    children: PropTypes.node.isRequired,
  }),
}

export default ListItem
