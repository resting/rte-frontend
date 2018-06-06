import React, {Component} from 'react'

class Link extends Component {
    render() {
        const {url} = this.props.contentState.getEntity(this.props.entityKey).getData()
        return <a href={url}>{this.props.children}</a>
    }
}

export default Link
