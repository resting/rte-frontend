import React, {Component} from 'react'
import Button from './toolbar-button'
import ImageUploader from './image-uploader'

class Toolbar extends Component {
    constructor(props) {
        super(props)

        this.state = {linkurl: ''}
    }

    render() {
        const style = {
            toolbar: {
                borderTop: '1px solid #ddd',
                borderBottom: '1px solid #ddd',
            },
            toolbarstate: {
                display: 'flex',
                justifyContent: 'space-between',
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
                <div className="toolbar-link-state" style={style.toolbarstate}>
                    <div className="toolbar-left">
                        <div className="linkinputwrap">
                            <input type="text" className='linkinput' value={this.state.linkurl}
                                placeholder='Enter URL'
                                onChange={evt => this.setState({linkurl: evt.target.value})}
                            />
                        </div>
                    </div>
                    <div className="toolbar-right">
                        <button onClick={() => this.props.onAddClick(this.state.linkurl)}>Add</button>
                    </div>
                </div>
                <div className="toolbar-norm-state" style={style.toolbarstate}>
                    <div className="toolbar-left">
                        <Button onClickHandler={this.props.onBoldClick} className={boldPressed}>
                            <i className='material-icons'>format_bold</i>
                        </Button>
                        <Button onClickHandler={this.props.onItalicClick} className={italicPressed}>
                            <span className='material-icons'>format_italic</span>
                        </Button>
                        <Button onClickHandler={this.props.onUnorderedListClick} className={unorderedListPressed}>
                            <span className='material-icons'>format_list_bulleted</span>
                        </Button>
                        <Button onClickHandler={this.props.onOrderedListClick} className={orderedListPressed}>
                            <span className='material-icons'>format_list_numbered</span>
                        </Button>
                    </div>
                    <div className="toolbar-right">
                        <Button onClickHandler={this.props.onImageClick} className={imagePressed}>
                            <span className='material-icons'>image</span>
                        </Button>
                        <Button onClickHandler={this.props.onLinkClick} className={linkPressed}>
                            <span className='material-icons'>link</span>
                        </Button>
                        {imagePressed === 'pressed' &&
                        <ImageUploader insertImageEntity={this.props.insertImageEntity}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Toolbar
