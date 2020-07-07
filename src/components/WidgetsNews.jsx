import React from 'react'
import PropTypes from 'prop-types'
import Tabs from './Tabs'
import DateTimeWidget from './DateTimeWidget'
import Stocks from './Stocks'

function WidgetsNews(props) {
  const { data } = props

  return (
    <div className="row">
      <div className="col-7 px-0 mr-5">
        <Tabs fakeNews={data}>
          <DateTimeWidget />
        </Tabs>
        <div className="mr-0">
          <Stocks>
            <div className="col-1 text-secondary">
              <button>...</button>
            </div>
          </Stocks>
        </div>
      </div>
      {props.children}
    </div>
  )
}

WidgetsNews.propTypes = {}

export default WidgetsNews
