import React, { Component } from 'react'
import InstaService from '../../services/instaService'

import ErrorMessage from '../../components/ErrorMessage'
import Image from '../../components/Image'
import Loader from '../../components/Loader'

import './ProfileGrid.css'

export default class ProfileGrid extends Component {

    state = {
        loading: true,
        error: false,
        photos: []
    }

    InstaService = new InstaService()

    componentDidMount() {
        this.updateData()
    }

    updateData = () => {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            loading: false,
            error: false,
            photos
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
        console.error('Something went wrong')
    }

    renderPhotos = (arr) => {
        return(
            arr.map((item, index) => {
                let { src, alt } = item
                return( <Image 
                        src={src}
                        alt={alt}
                        className='profile-grid__image'
                        key={alt + index}
                />)    
            })
        )
    }

    render() {
        const { error, photos, loading } = this.state

        const items = this.renderPhotos(photos)

        return (
            <div className="profile-grid">
                {loading ? <Loader /> : error ? <ErrorMessage /> : items}
            </div>
        )
    }
}
