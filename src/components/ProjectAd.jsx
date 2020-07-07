import React from 'react'
import PropTypes from 'prop-types'
import HeadingLink from './HeadingLink'

function ProjectAd(props) {
  return (
    <div className="col-4 align-self-end pr-0 ml-3 mb-2">
      <div>
        <span className="material-icons" style={{ fontSize: '6rem' }}>
          explore
        </span>
        <span className="sr-only">explore project image</span>
      </div>
      <HeadingLink url="#">Project Ad Title</HeadingLink>
      <div>Description Lorem ipsum dolor sit amet!</div>
    </div>
  )
}

ProjectAd.propTypes = {}

export default ProjectAd
