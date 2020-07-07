import React from 'react'
import PropTypes from 'prop-types'

function DateTimeWidget(props) {
  const now = new Date(),
    options = {
      day: 'numeric',
      month: 'long',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
    }

  console.log(now.getMonth())

  return (
    <div className="text-secondary mb-0 pt-3 mr-n5">
      {now.toLocaleString(undefined, options)}
    </div>
  )
}

DateTimeWidget.propTypes = {}

export default DateTimeWidget
