export default class InstaService {

    constructor() {
        this._apiBase = 'https://react-inst-new.firebaseio.com/'
    }

    getResource = async (url) => {
        const response = await fetch(`${this._apiBase}${url}`)
        
        if(!response.ok) {
            throw new Error(`Couldn't get data from ${url}; Because ${response.error}`)
        }

        return await response.json()
    }

    getAllData = async () => {
        const response = await this.getResource('posts.json')
        return response
    }

    getAllPhotos = async () => {
        const response = await this.getResourse('posts.json')
        return response.map(this._transformDataToPhotos)
    }

    getAllUsers = async () => {
        const response = this.getResourse('posts.json')
        return response.map(this._transformDataToUsers)
    }

    _transformDataToPhotos = (item) => {
        return {
            src: item.src,
            alt: item.alt
        }
    }

    _transformDataToUsers = (item) => {
        return {
            src: item.src,
            name: item.name
        }
    }

}