import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Avatar from '../Avatar'

import './User.css'

const User = ({ className, min, src, name }) => {

    const classes = classNames(
        className,
        { min }
    )

    return (
        <a 
            href="#"
            className = {classes}
        >
            <Avatar 
                src={src} 
                className="user__avatar" 
                min={min}
            />
            <div>
               {name}
            </div>
        </a>
    )
}

User.propTypes = {
    className: PropTypes.string,
    min: PropTypes.bool,
    src: PropTypes.string,
    name: PropTypes.string
}

User.defaultProps = {
    className: 'user',
    min: false,
    name: '',
    src: ''
}



export default User;
