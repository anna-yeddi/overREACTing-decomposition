import React from 'react'
import PropTypes from 'prop-types'

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

TabPanel.propTypes = {}

export default TabPanel
