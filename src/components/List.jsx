import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

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

List.propTypes = {}

export default List
