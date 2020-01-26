import React from 'react'
import Posts from '../../features/Posts'
import Side from '../../features/Side'

import './Feed.css'

const Feed = () => {
    return (
        <div className='container feed' >
            <Posts />
            <Side />
        </div>
    )
}

export default Feed
