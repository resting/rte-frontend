import React, {Component} from 'react'
import './App.css'
import Toolbar from './components/toolbar'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boldPressed: false,
            italicPressed: false,
            unorderedListPressed: false,
            orderedPressed: false,
            imagePressed: false,
            linkPressed: false,
        }
    }

    _onBoldClick() {
        this.setState({boldPressed: !this.state.boldPressed})
    }

    _onItalicClick() {
        this.setState({italicPressed: !this.state.italicPressed})
    }

    _onUnorderedListClick() {
        this.setState({unorderedListPressed: !this.state.unorderedListPressed})

    }

    _onOrderedListClick() {
        this.setState({orderedListPressed: !this.state.orderedListPressed})

    }

    _onImageClick() {
        this.setState({imagePressed: !this.state.imagePressed})

    }

    _onLinkClick() {
        this.setState({linkPressed: !this.state.linkPressed})

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Toolbar
                        onBoldClick={this._onBoldClick.bind(this)}
                        onItalicClick={this._onItalicClick.bind(this)}
                        onUnorderedListClick={this._onUnorderedListClick.bind(this)}
                        onOrderedListClick={this._onOrderedListClick.bind(this)}
                        onImageClick={this._onImageClick.bind(this)}
                        onLinkClick={this._onLinkClick.bind(this)}
                        boldPressed={this.state.boldPressed}
                        italicPressed={this.state.italicPressed}
                        unorderedListPressed={this.state.unorderedListPressed}
                        orderedListPressed={this.state.orderedListPressed}
                        imagePressed={this.state.imagePressed}
                        linkPressed={this.state.linkPressed}
                    />
                </div>
            </div>
        )
    }
}

export default App
