import React, { Component } from 'react'
import InstaService from '../../services/instaService'

import Post from '../../components/Post'
import Loader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'

import './Posts.css'

export default class Posts extends Component {

    state={
        loading: true,
        error: false,
        posts: []
    }

    InstaService = new InstaService()

    componentDidMount() {
        this.updatePosts()
    }

    updatePosts = () => {
        this.InstaService.getAllData()
            .then(this.onDataLoaded)
            .catch(this.onError)
    }

    onDataLoaded = (posts) => {
        this.setState({
            loading: false,
            error: false,
            posts
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
        console.error('Something went wrong')
    }

    renderPosts = (posts) => {
       return posts.map((item) => {
            let { name, descr, src, photo, id } = item 
            return <Post 
                        key={id}
                        name={name} 
                        descr={descr}
                        src={src}
                        photo={photo}
                        className="post"
                    />
        })
    }

    render() {
        const { error, posts, loading } = this.state;
        const items = this.renderPosts(posts)
        return (
            <div className="posts">
                {loading ? <Loader /> : error ? <ErrorMessage /> : items}
            </div>
        )
    }
}
