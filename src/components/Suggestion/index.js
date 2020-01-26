import React, { Component } from 'react'
import InstaService from '../../services/instaService'

import ErrorMessage from '../ErrorMessage'
import User from '../User'
import Loader from '../Loader'

import './Suggestion.css'

export default class Suggestion extends Component {

    state = {
        loading: true,
        error: false,
        users: []
    }

    InstaService = new InstaService();

    componentDidMount() {
        this.usersUpdate()
    }

    usersUpdate = () => {
        this.InstaService.getAllData()
            .then(this.onUsersLoaded)
            .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            error: false,
            loading: false,
            users
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
        console.error('Something went wrong')
    }

    usersRender = (arr) => {
        return arr.map((item, index) => {
            let {src, name} = item
            return (
                <li key={name + index}>
                    <User 
                        src={src}
                        name={name}
                        min
                    />    
                </li>
            )
        })
    }

    render() {
        const {error, users, loading} = this.state
        const items = this.usersRender(users)

        return (
            <div className='suggestion'>
                <div className="suggestion__top">
                    <h3>Suggestions For You</h3>
                    <a href="#">Show all</a>
                </div>
                <div className="suggestion__list">
                    <ul>
                        {loading ? <Loader /> : error ? <ErrorMessage /> : items}
                    </ul>
                </div>
            </div>
        )
    }
}

