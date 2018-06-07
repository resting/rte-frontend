import React, {Component} from 'react'
import axios from 'axios'

class ImageUploader extends Component {
    constructor(props) {
        super(props)

        this.state = {file: ''}
    }

    upload(evt) {
        let file = evt.target.files[0]
        this.setState({file: evt.target.value}, () => {
            let data = new FormData()
            data.append('file', file)
            axios.post('http://localhost:3001/upload', data)
                .then(res => {
                    console.log(res)
                    this.props.insertImageEntity(res.data.src)
                    this.setState({file: ''})
                })
                .catch(err => {
                    console.log(err)
                    this.setState({file: ''})
                })
        })
    }

    render() {
        const styles = {
            button: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                margin: 0,
                width: '100%',
            },
            file: {
                opacity: 0,
                position: 'absolute',
                zIndex: 1,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                cursor: 'pointer',
            },
        }
        return (
            <div className="imageUploader">
                <form action='http://localhost:3001/upload'>
                    <button style={styles.button}>
                        <i className="material-icons">arrow_upward</i> Upload
                    </button>
                    <input type='file' name='file' style={styles.file} value={this.state.file}
                        onChange={this.upload.bind(this)}/>
                </form>
            </div>
        )
    }
}

export default ImageUploader
