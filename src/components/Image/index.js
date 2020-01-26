import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Image.css'


const Image = ({src, alt, className, circle, ...props}) => {

    const classes = classNames(
        className,
        { circle }
    )   

    return (
        <img 
            {...props}
            src={src} 
            alt={alt}
            className={classes}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    circle: PropTypes.bool
}

Image.defaultProps = {
    src: 'https://s28943.pcdn.co/wp-content/uploads/2019/09/placeholder.jpg',
    alt: 'Image name',
    className: '',
    circle: false
}

export default Image;
