import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Image from '../Image'

import './Avatar.css'

const Avatar = ({className, src, alt, min, ...props }) => {

    const classes = classNames(
        className,
        {min}
    )

    return (
            <Image 
                {...props}
                className={classes}
                src={src}
                alt={alt}
                circle 
            />
    )
}

export default Avatar;