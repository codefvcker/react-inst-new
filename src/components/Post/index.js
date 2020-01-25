import React from 'react'
import classNames from 'classnames'

import User from '../User'
import Image from '../Image'

import './Post.css'

const Post = ({ name, descr, src, photo, className }) => {

    const classes = classNames(
        className
    )

    return (
        <div className={classes}>
            <User 
                name={name} 
                src={photo}
                min
            />
            <Image src={src} className="post__image" />
            <div className="post__name">{name}</div>
            <div className="post__descr">{descr}</div>
        </div>
    )
}

export default Post
