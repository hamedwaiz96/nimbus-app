import React from 'react';
import PhotoItem from './photo_item';
import PhotoFormContainer from './photo_form_container';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { CLOUDINARY_IMAGE_URL, CLOUDINARY_PRESET } from '../util/cloudinary_info';

class PlacePhotos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            start: 0,
            last: 4,
            url: "",
            place_id: this.props.place_id,
            user_id: this.props.user_id,
            visible: "",
            opacity: 0
        }
        this.previousPhoto = this.previousPhoto.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    previousPhoto() {
        if (this.props.photos.length <= 4) {
            this.setState(this.state)
        }
        else if (this.state.start === 0) {
            this.setState(this.state)
        } else {
            this.setState({ start: this.state.start - 1, last: this.state.last - 1 })
        }
    }

    nextPhoto() {
        if (this.props.photos.length <= 4) {
            this.setState(this.state)
        }
        else if (this.state.last === this.props.photos.length) {
            this.setState(this.state)
        } else {
            this.setState({ last: this.state.last + 1, start: this.state.start + 1 })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const self = this;
        this.file = e.target.files[0]
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
                self.props.createPhoto({
                    url: self.state.url,
                    place_id: self.state.place_id,
                    user_id: self.state.user_id
                }).then(() => {
                    self.setState({visible: "Sucessfully Uploaded Images", opacity: 1})
                    setTimeout(function () { self.setState({visible: "", opacity: 0}) }, 5000);
                })
            },
            (err) => {
                this.props.receiveErrors(err);
            }
        )
    }

    errors() {
        if (this.props.errors) {
            return (
                this.props.errors.map(error => {
                    return (<li className="error alert alert-danger" key={error}>{error}</li>);
                })
            );
        }
    }

    render(){
        this.place = `/photos/new/${this.props.place.id}`
        if (this.props.photos.length <= 4) {
            this.front_photos = this.props.photos
        } else {
            this.front_photos = this.props.photos.slice(this.state.start, this.state.last)
        }
        let show;
        if (this.props.session !== null){
            show = (
                <div className="photo-create-container">
                    <label htmlFor="upload">
                        <span className="btn btn--round">Add Photo</span>
                        <input className="upload-file" type="file" id="upload" onChange={this.handleSubmit} />
                    </label>
                </div>
            )
        } else {
            show = (
                <p><Link to="/login">Login to Add Photo</Link></p>
            )
        }
        let photo_container;
        if(this.front_photos.length === 0){
            photo_container = ""
        } else {
            photo_container = (
                <div className="place-photos-block">
                    <div className="previous-container" onClick={this.previousPhoto}>
                        <span className="previous" >{"<"}</span>
                    </div>
                    <ul className="place-photos">
                        {this.front_photos.map((photo, idx) => {
                            return (<PhotoItem photo={photo} idx={idx} key={photo.id} author={this.props.authors[photo.user_id]} />)
                        })}
                    </ul>
                    <div className="next-container" onClick={this.nextPhoto}>
                        <span className="next">{">"}</span>
                    </div>
                </div>
            )
        }
        return(
            <div className='place-photos-container'>
                <ul className="error-list">
                    {this.errors()}
                </ul>
                <div className="alert alert-success fade" style={{opacity: this.state.opacity}}>{this.state.visible}</div>
                {photo_container}
                {show}
            </div>
        )
    }
}

export default PlacePhotos;