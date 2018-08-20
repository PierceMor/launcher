import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class FileLoader extends Component {

    state = {
        selectedFile: null,
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)

        axios.post( 'target backend goes here, video suggests firebase cloud ', fd)
        .then(res => {
            console.log(res)
        })
    }

    render(){
        return (
            <div>

                <input 
                    style = {{display: 'none'}}
                    accept="image/*"
                    className='contained-button-file'
                    multiple
                    type='file'
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput}
                />

                <label htmlFor='contained-button-file'>
                    <Button style={{marginLeft: 10, marginRight: 10}} variant='contained' component='span' onClick={ () => this.fileInput.click()} >
                        Choose Profile Picture! 
                    </Button>
                </label>

                <label htmlFor='contained-button-file'>
                    <Button style={{marginLeft: 10, marginRight: 10}} variant='contained' component='span' onClick={this.fileUploadHandler} >
                        Upload Picture
                    </Button>
                </label>

            </div>
        )
    }
}

export default FileLoader;