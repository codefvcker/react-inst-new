import React from 'react'

import User from '../../components/User'
import ProfileGrid from '../../features/ProfileGrid'

import './Profile.css'

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src='https://avatars2.githubusercontent.com/u/59730119?s=460&v=4'
                name='Code Fvcker'
            />
            <ProfileGrid />
        </div>
    )
}

export default Profile