import React, { Component } from 'react'
import InstaService from '../../services/instaService'

export default class Posts extends Component {

    state={
        error: false,
        posts: []
    }

    InstaService = new InstaService()

    updatePosts = () => {
        this.InstaService.getAllData()
            .then(data => console.log('Data',data))
            // .catch(onError)
    }



    render() {
        return (
            <div className="posts">
                <button onClick={this.updatePosts}>O</button>
            </div>
        )
    }
}
