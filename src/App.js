import React, {Component} from 'react'
import './App.css'
import Toolbar from './components/toolbar'
import {Editor, EditorState, RichUtils} from 'draft-js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boldPressed: false,
            italicPressed: false,
            unorderedListPressed: false,
            orderedListPressed: false,
            imagePressed: false,
            linkPressed: false,
            editorState: EditorState.createEmpty(),
        }
    }

    focus() {
        this.refs.editor.focus()
    }

    onChange(editorState) {
        const currentStyle = editorState.getCurrentInlineStyle()
        const pressed = {
            boldPressed: false,
            italicPressed: false,
            unorderedListPressed: false,
            orderedListPressed: false,
            imagePressed: false,
            linkPressed: false,
        }

        const selection = editorState.getSelection()
        const currentStyles = currentStyle.toArray()
        pressed.boldPressed = currentStyles.includes('BOLD')
        pressed.italicPressed = currentStyles.includes('ITALIC')

        const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType()
        pressed.unorderedListPressed = blockType === 'unordered-list-item'
        pressed.orderedListPressed = blockType === 'ordered-list-item'

        this.setState({...pressed, editorState})
    }

    onBoldClick() {
        // this.setState({boldPressed: !this.state.boldPressed})
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                'BOLD',
            ),
        )
    }

    onItalicClick() {
        // this.setState({italicPressed: !this.state.italicPressed})
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                'ITALIC',
            ),
        )
    }

    onUnorderedListClick() {
        // this.setState({unorderedListPressed: !this.state.unorderedListPressed})
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                'unordered-list-item',
            ),
        )
    }

    onOrderedListClick() {
        this.setState({orderedListPressed: !this.state.orderedListPressed})
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                'ordered-list-item',
            ),
        )
    }

    onImageClick() {
        // this.setState({imagePressed: !this.state.imagePressed})

    }

    onLinkClick() {
        // this.setState({linkPressed: !this.state.linkPressed})

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Toolbar
                        onBoldClick={this.onBoldClick.bind(this)}
                        onItalicClick={this.onItalicClick.bind(this)}
                        onUnorderedListClick={this.onUnorderedListClick.bind(this)}
                        onOrderedListClick={this.onOrderedListClick.bind(this)}
                        onImageClick={this.onImageClick.bind(this)}
                        onLinkClick={this.onLinkClick.bind(this)}
                        boldPressed={this.state.boldPressed}
                        italicPressed={this.state.italicPressed}
                        unorderedListPressed={this.state.unorderedListPressed}
                        orderedListPressed={this.state.orderedListPressed}
                        imagePressed={this.state.imagePressed}
                        linkPressed={this.state.linkPressed}
                        editorState={this.state.editorState}
                    />
                    <div className="editor" onClick={this.focus.bind(this)}>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={this.onChange.bind(this)}
                            ref='editor'
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
