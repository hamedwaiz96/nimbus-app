import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import { CLOUDINARY_IMAGE_URL, CLOUDINARY_PRESET } from '../util/cloudinary_info';

class PhotoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: "",
            place_id: this.props.place_id,
            user_id: this.props.user_id
        }
        this.props.fetchPlaces({});
        if (this.props.place_id != 'main') {
            this.place = this.props.places[parseInt(this.props.place_id)]
        }
        this.file = "";
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
    }

    errors() {
        if (this.props.errors) {
            return (
                this.props.errors.map(error => {
                    return (<li className="error" key={error}>{error}</li>);
                })
            );
        }
    }

    fileChangeHandler(e){
        this.file = e.target.files[0];
    }

    handleSubmit(e) {
        e.preventDefault();
        const self = this;
        let Formdata = new FormData();
        Formdata.append('file', this.file);
        Formdata.append('upload_preset', CLOUDINARY_PRESET)
        Formdata.append('folder', 'nimbus/places/photos')
        axios({
            url: CLOUDINARY_IMAGE_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: Formdata
        }).then(
            (res) => {
                self.state.url = res.data.secure_url;
                self.props.createPhoto(self.state).then(() => {
                    $('.photo-form-container').toggle();
                })
            },
            (err) => {
                this.props.receiveErrors(err);
            }
        )
    }

    update(key) {
        return e => {
            this.setState({ [key]: e.target.value })
        }
    }

    render(){
        return(
            <div className="photo-form-container">
                <ul className="error-list">
                    {this.errors()}
                </ul>
                <form className="photo-form" onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.fileChangeHandler}/>
                    <input type="submit" value="Add Photo"/>
                </form>
            </div>
        )
    }
}

export default withRouter(PhotoForm);