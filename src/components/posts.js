import React, {Component} from 'react'

class Posts extends Component {
    render() {
        const draft = window.localStorage.getItem('draft')
        return (
            <div className="posts" dangerouslySetInnerHTML={{__html: draft}}></div>
        )
    }
}

export default Posts
