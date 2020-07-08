import React from 'react'
import PropTypes from 'prop-types'
import Tabs from './Tabs'
import DateTimeWidget from './DateTimeWidget'
import Stocks from './Stocks'

/**
 * Renders a <WidgetsNews /> component
 * that contains few sections placed above the Search Bar.
 *
 * @component
 *
 * @todo When filling the content, ensure temporary
 *       fakeNews array data is removed or updated.
 */
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
              <button aria-label="More stock prices">...</button>
            </div>
          </Stocks>
        </div>
      </div>
      {props.children}
    </div>
  )
}

WidgetsNews.propTypes = {
  /** @param {Object|Object{}} props List of data sets for filling the component's widgets */
  props: PropTypes.objectOf({
    /** @param {Object[]} data[] Data set for filling individual elements */
    data: PropTypes.arrayOf({
      /** @param  {string} data[].title Content of a link within a widget */
      title: PropTypes.string.isRequired,
      /** @param  {string} data[].url Link to be used for a link within a widget */
      url: PropTypes.string.isRequired,
      /** @param  {string} [data[].alt] Reference to an icon for a link within a widget */
      icon: PropTypes.string,
      // /** @param {*} [data[].{...}] Any additional data supplied */
      // [key]: PropTypes.any,
    }).isRequired,
    /** @param {object} props.children Content to be printed out by the component */
    children: PropTypes.node.isRequired,
  }),
}

export default WidgetsNews
