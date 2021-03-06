import React, {Component} from 'react'

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClickHandler}
                className={this.props.className + ' toolbar-btn'}>{this.props.children}</button>
        )
    }
}


export default Button
