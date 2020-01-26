import React from 'react'
import Suggestion from '../../components/Suggestion'
import Stories from '../../components/Stories'
import User from '../../components/User'

import './Side.css'

const Side = () => {
    return (
        <div className='side' >
            <User 
                src='https://avatars2.githubusercontent.com/u/59730119?s=460&v=4'
                name='Code Fvcker'
            />
            <Stories />
            <Suggestion />
        </div>
    )
}

export default Side