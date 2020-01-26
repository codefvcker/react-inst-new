import React from 'react'
import { Link } from 'react-router-dom'

import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className="container error-page">
            <h1>This page doesn't exist</h1>
            <Link to='/' className="error-page__link">Go to feed</Link>
        </div>
    )
}

export default ErrorPage