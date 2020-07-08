import React from 'react'
import PropTypes from 'prop-types'
import HeadingLink from './HeadingLink'

/**
 * Renders a <ProjectAd /> component
 * that contains details of one project with an image link
 *
 * @component
 * @global
 *
 * @todo When filling the content, ensure temporary
 *       style modifications are removed or updated.
 * @todo Pass the project object in props and edit JSX.
 */
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

ProjectAd.propTypes = {
  /** @param {Object|Object{}} props A data set for filling the component */
  props: PropTypes.objectOf({
    /** @param {Object[]} data[] Data set for one project promoted */
    data: PropTypes.arrayOf({
      /** @param  {string} data[].title Content of a title link within a component */
      title: PropTypes.string.isRequired,
      /** @param  {string} data[].url Link to be used for href of the link within a component */
      url: PropTypes.string.isRequired,
      /** @param  {string} [data[].alt] Reference to an icon for an image link within a component */
      icon: PropTypes.string,
      // /** @param {*} [arr[].{...}] Any additional data supplied */
      // [key]: PropTypes.any,
    }),
  }),
}

export default ProjectAd
