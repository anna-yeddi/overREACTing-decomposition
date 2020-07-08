import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <TabPanel /> component
 * placed within the <Tabs /> component
 *
 * @global
 * @component
 * @memberof <Tabs />
 * @see https://www.w3.org/TR/wai-aria-practices/#tabpanel
 *
 */
function TabPanel(props) {
  return (
    <div
      className="mx-0 pr-5"
      role="tabpanel"
      aria-selected={props.isSelected}
      aria-labelledby={'news-tab-' + props.tabId}
      id={'news-tabpanel-' + props.tabId}>
      {props.children}
    </div>
  )
}

TabPanel.propTypes = {
  /** @param {Object} props List of data for filling the tabpanel */
  props: PropTypes.objectOf({
    /** @param {boolean} props.isSelected Sets the visibility of this tabpanel */
    isSelected: PropTypes.bool.isRequired,
    /**
     * @param {string} props.tabId ID reference of the tab element
     * that controls the visibility of this tabpanel
     */
    tabId: PropTypes.string.isRequired,
    /**
     * @param {object} props.children Content to be used as a tab title by the component.
     * Passed by <Tab /> to <List /> component
     */
    children: PropTypes.node.isRequired,
  }),
}

export default TabPanel
