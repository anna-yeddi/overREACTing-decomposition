import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a <AdBanner /> component
 * that includes an image link.
 *
 * @component
 *
 * @private When filling the content, ensure temporary
 *          inline styling are removed or updated.
 */
function AdBanner(props) {
  return (
    <div
      className="bg-info border border-secondary 
       my-3 d-flex row
       justify-content-center align-items-center"
      style={{ width: '74%', height: '6rem' }}>
      <a href="#" className="text-white">
        Banner
      </a>
    </div>
  )
}

AdBanner.propTypes = {
  /** @param {Object} props - Banner data responsible for filling the component */
  props: PropTypes.objectOf({
    /** @param  {string} props.img - Image used for the banner element */
    img: PropTypes.string,
    /** @param  {string} props.url - Link to be used for a link */
    url: PropTypes.string,
    /** @param  {string} props.alt - Meaningful textual equivalent for the image */
    alt: PropTypes.string,
  }),
}

export default AdBanner
