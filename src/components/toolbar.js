import React, {Component} from 'react'
import Button from './toolbar-button'

class Toolbar extends Component {
    render() {
        const style = {
            toolbar: {
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid #ddd',
                borderBottom: '1px solid #ddd',
            },
            italic: {
                fontStyle: 'italic',
            },
        }

        const boldPressed = this.props.boldPressed ? 'pressed' : 'none'
        const italicPressed = this.props.italicPressed ? 'pressed' : 'none'
        const unorderedListPressed = this.props.unorderedListPressed ? 'pressed' : 'none'
        const orderedListPressed = this.props.orderedListPressed ? 'pressed' : 'none'
        const imagePressed = this.props.imagePressed ? 'pressed' : 'none'
        const linkPressed = this.props.linkPressed ? 'pressed' : 'none'

        return (
            <div className="toolbar" style={style.toolbar}>
                <div className="toolbar-left">
                    <Button onClickHandler={this.props.onBoldClick} pressedState={boldPressed}>
                        <i className='material-icons'>format_bold</i>
                    </Button>
                    <Button onClickHandler={this.props.onItalicClick} pressedState={italicPressed}>
                        <span className='material-icons'>format_italic</span>
                    </Button>
                    <Button onClickHandler={this.props.onUnorderedListClick} pressedState={unorderedListPressed}>
                        <span className='material-icons'>format_list_bulleted</span>
                    </Button>
                    <Button onClickHandler={this.props.onOrderedListClick} pressedState={orderedListPressed}>
                        <span className='material-icons'>format_list_numbered</span>
                    </Button>
                </div>
                <div className="toolbar-right">
                    <Button onClickHandler={this.props.onImageClick} pressedState={imagePressed}>
                        <span className='material-icons'>image</span>
                    </Button>
                    <Button onClickHandler={this.props.onLinkClick} pressedState={linkPressed}>
                        <span className='material-icons'>link</span>
                    </Button>
                </div>

            </div>
        )
    }
}

export default Toolbar
