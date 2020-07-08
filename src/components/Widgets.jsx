import React from 'react'
import PropTypes from 'prop-types'
import WeatherWidget from './WeatherWidget'
import HeadingLink from './HeadingLink'
import List from './List'

/**
 * Renders a <Widgets /> component
 * that contains few sections.
 * This general 3-column component is placed
 * after the Search Bar.
 *
 * @component
 *
 * @todo When filling the content, ensure temporary
 *       arr modifications are removed or updated.
 */
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

Widgets.propTypes = {
  /** @param {Object{}} props List of data sets for filling the component's widgets */
  props: PropTypes.objectOf({
    /** @param {Object[]} data[] Data set for filling individual widgets */
    data: PropTypes.arrayOf({
      /** @param  {string} data[].title Content of a link within a widget */
      title: PropTypes.string.isRequired,
      /** @param  {string} data[].url Link to be used for href of the link within a widget */
      url: PropTypes.string.isRequired,
      /** @param  {string} [data[].alt] Reference to an icon for a link within a widget */
      icon: PropTypes.string,
      // /** @param {*} [data[].{...}] Any additional data supplied */
      // [key]: PropTypes.any,
    }),
  }),
}

export default Widgets
