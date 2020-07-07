import React from 'react'
import PropTypes from 'prop-types'
import WeatherWidget from './WeatherWidget'
import HeadingLink from './HeadingLink'
import List from './List'

function Widgets(props) {
  const { data } = props

  return (
    <div className="row">
      <div className="col-4 px-0">
        <WeatherWidget />
        <HeadingLink url="#">Popular</HeadingLink>
        <List
          arr={data.slice(1, 4)}
          classUL="list-unstyled"
          showIcons={false}
        />
      </div>
      <div className="col-4 px-0">
        <HeadingLink url="#">Local Maps</HeadingLink>
        <p>Public transport schedule</p>
        <div className="row align-items-center">
          <div className="col pt-2">
            <HeadingLink url="#">TV Guide</HeadingLink>
          </div>
          <div className="col">
            <button className="badge badge-info btn-sm mt-2">Watch Live</button>
          </div>
        </div>
        <List arr={data.slice(2)} classUL="list-unstyled" showIcons={false} />
      </div>
      <div className="col-4 px-0">
        <HeadingLink url="#">Now Streaming</HeadingLink>
        <List
          arr={data.slice(0, 3)}
          classUL="ml-n2 list-unstyled"
          showIcons={true}
        />
      </div>
    </div>
  )
}

Widgets.propTypes = {}

export default Widgets
