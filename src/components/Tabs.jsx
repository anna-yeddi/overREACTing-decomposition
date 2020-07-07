import React from 'react'
import PropTypes from 'prop-types'
import TabPanel from './TabPanel'
import List from './List'

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

Tabs.propTypes = {}

export default Tabs
