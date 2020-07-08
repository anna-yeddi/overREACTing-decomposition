import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <HeadingLink /> component
 * that includes a link nested within a heading of level 2
 *
 * @global component
 */
function HeadingLink(props) {
  return (
    <h2 className="pt-3">
      <a href={props.url} className="text-info">
        {props.children}
      </a>
    </h2>
  )
}

HeadingLink.propTypes = {
  /** @param {Object} props Content of the component instance */
  props: PropTypes.objectOf({
    /** @param {string} props.url Link to be referred by the component */
    url: PropTypes.string.isRequired,
    /** @param {object} props.children Content to be printed out by the component */
    children: PropTypes.node.isRequired,
  }),
}

export default HeadingLink
