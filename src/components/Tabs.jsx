import React from 'react'
import PropTypes from 'prop-types'
import TabPanel from './TabPanel'
import List from './List'

/**
 * Renders a <Tabs /> component
 * that contains one or more <Tabpanel /> components
 *
 * @global
 * @component
 * @see https://www.w3.org/TR/wai-aria-practices/#tabpanel
 *
 * @todo When filling the content, ensure temporary
 *       tabTitles and fakeNews arrays data
 *       is removed or updated.
 */
function Tabs(props) {
  const tabTitles = ['Breaking News', 'Local News', 'Recommended']

  return (
    <>
      <div className="row pl-1" role="tablist" aria-label="News Groups">
        {tabTitles.map((str, i) => (
          <h2 className="col-3 pt-2 px-0 mb-0" key={i}>
            <button
              className="text-info btn btn-link"
              role="tab"
              id={'news-tab-0' + i}
              aria-controls={'news-tabpanel-0' + i}>
              {str}
            </button>
          </h2>
        ))}
        {props.children}
      </div>
      <TabPanel isSelected="true" tabId="00">
        <List
          arr={props.fakeNews}
          classUL="ml-n2 list-unstyled"
          showIcons={true}
        />
      </TabPanel>
    </>
  )
}

Tabs.propTypes = {
  /** @param {Object|Object{}} props List of data sets for filling the tabs */
  props: PropTypes.objectOf({
    /**
     * @param {Array[]} fakeNews[] Data set for filling individual tabpanels
     * @todo Update the name and data set for the param
     */
    fakeNews: PropTypes.arrayOf({
      /** @param  {string} fakeNews[].title Content of a link within a widget */
      title: PropTypes.string.isRequired,
      /** @param  {string} fakeNews[].url Link to be used as href within a widget */
      url: PropTypes.string.isRequired,
      /** @param  {string} [fakeNews[].alt] Reference to src of icon within a widget */
      icon: PropTypes.string,
      // /** @param {*} [fakeNews[].{...}] Any additional data supplied */
      // [key]: PropTypes.any,
    }).isRequired,
    /** @param {object} props.children Content to be used as a tab title by the component */
    children: PropTypes.node.isRequired,
  }),
}

export default Tabs
