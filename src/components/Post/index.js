import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import User from '../User'
import Image from '../Image'

import './Post.css'

const Post = ({ name, src, className, ...props}) => {

    const classes = classNames(
        className
    )

    return (
        <div className={classes}>
            <User 
                min 
                name={name} 
                src={src}
            />
            <Image className="post__image" />
            <div className="post__name">Name</div>
            <div className="post__descr">Description</div>
        </div>
    )
}

export default Post
