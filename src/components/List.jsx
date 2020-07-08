import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

/**
 * Renders a <List /> component
 * that contains one or more <ListItem /> components
 *
 * @global
 * @component
 *
 * @private <ListItem /> creates a link from the title content
 *          as presumably this is the way how each article's
 *          url is created and where its published.
 *          It ignores "url" prop for a reason to add this
 *          Private and Todo comments in the JSDocs.
 * @todo When filling the content, ensure <ListItem />
 *       handles the title elements from the prop arr
 *       appropriately to the data provided.
 */
function List(props) {
  const { arr, classUL, showIcons } = props

  return (
    <ul className={classUL}>
      {arr.map((o, i) => (
        <ListItem key={i} url={'/' + o.title.replace(' ', '-')}>
          {showIcons && (
            <>
              <span className="material-icons ml-n3 pr-1">{o.icon}</span>
              <span className="sr-only">{o.icon}</span>
            </>
          )}
          {o.title}
        </ListItem>
      ))}
    </ul>
  )
}

List.propTypes = {
  /** @param {Object|Object{}} props List of data sets for filling the list */
  props: PropTypes.objectOf({
    /** @param {Array[]} arr[] Data set for filling individual list items */
    arr: PropTypes.arrayOf({
      /** @param  {string} arr[].title Content of a link within a list item */
      title: PropTypes.string.isRequired,
      /** @param  {string} arr[].url Link to be used as href within a list item */
      url: PropTypes.string.isRequired,
      /** @param  {string} [arr[].alt] Reference to src of icon within a list item */
      icon: PropTypes.string,
      // /** @param {*} [arr[].{...}] Any additional data supplied */
      // [key]: PropTypes.any,
    }).isRequired,
    /** @param  {string} classUL Value for class for list container passed from a parent component */
    classUL: PropTypes.string.isRequired,
    /** @param  {boolean} showIcons Sets if icons should be provided for list items */
    showIcons: PropTypes.bool.isRequired,
  }),
}

export default List
