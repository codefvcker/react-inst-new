import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Avatar from '../Avatar'

import './User.css'

const User = ({ className, min, src, name,  }) => {

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
                min={min} 
                src={src} 
                className="user__avatar" 
            />
            <div className="user__name">
               {name}
            </div>
        </a>
    )
}

User.propTypes = {
    className: PropTypes.string,
    min: PropTypes.bool,
}

User.defaultProps = {
    className: 'user',
    min: false
}



export default User;
