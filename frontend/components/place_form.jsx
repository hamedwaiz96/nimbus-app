import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import {CLOUDINARY_IMAGE_URL, CLOUDINARY_PRESET} from '../util/cloudinary_info';

let ERRORS = {
    'name': "Name can't be blank",
    'hours': "Hours can't be blank",
    'photo': "Image Upload Error"
}

class PlaceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            photo: '',
            location: 'Central City',
            hours: '',
            user_id: this.props.user_id,
            tags: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
        this.file = "";
    }

    handletime(){
        let from_time = $(".from-time")[0].value;
        let to_time = $(".to-time")[0].value;
        if(from_time === "" || to_time === ""){
            this.state.hours = "";
            return;
        }
        let from_am_or_pm = "AM";
        let to_am_or_pm = "PM";
        if(parseInt(from_time.slice(0, 2)) > 12){
            from_am_or_pm = "PM";
            from_time = (parseInt(from_time.slice(0, 2)) - 12).toString() + from_time.slice(2, from_time.length)
        }
        if (parseInt(to_time.slice(0, 2)) > 12){
            to_am_or_pm = "PM";
            to_time = (parseInt(to_time.slice(0, 2)) - 12).toString() + to_time.slice(2, to_time.length)
        }
        this.state.hours = `${from_time} ${from_am_or_pm} to ${to_time} ${to_am_or_pm}`;
    }

    // updateImage(){
    //     if(this.file != ""){
            
    //         axios({
    //             url: CLOUDINARY_IMAGE_URL,
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             },
    //             data: Formdata
    //         })
    //     }
    // }

    handleSubmit(e){
        e.preventDefault();
        const self = this;
        self.handletime();
        let Formdata = new FormData();
        Formdata.append('file', this.file);
        Formdata.append('upload_preset', CLOUDINARY_PRESET)
        Formdata.append('folder', "nimbus/places/main-photos")
        if (this.state.name != "" && this.state.hours != ""){
            axios({
                url: CLOUDINARY_IMAGE_URL,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: Formdata
            }).then(
                (res) => {
                    self.state.photo = res.data.secure_url;
                    self.props.createPlace(self.state).then((whole) => {
                        self.props.history.push(`/places/${whole.place.id}`)
                    })
                },
                (err) => {
                    this.props.receiveErrors(err);
                }
            )
        } else {
            let errors = [];
            if(this.state.name === ""){
                errors.push(ERRORS['name'])
            }
            if(this.state.hours === ""){
                errors.push(ERRORS['hours'])
            }
            if(this.state.photo === ""){
                errors.push(ERRORS['photo'])
            }
            this.props.receiveErrors(errors)
        }
        // createPlace.then(this.uploadImage).then(this.updatePlaceImage)
        
    }

    fileChangeHandler(e){
        this.file = e.target.files[0];
    }

    update(key){
        return e => {
            this.setState({[key]: e.target.value})
        }
    }

    updatecheck(category, value) {
        const self = this
        return e => {
            if (!e.target.checked) {
                self.state[category].splice(self.state[category].indexOf(value), 1)
            } else {
                self.state[category].push(value)
            }
        }
    }

    errors(){
        if (this.props.errors) {
            return (
            this.props.errors.map(error => {
                return (<li className="error" key={error}>{error}</li>);
            })
        );
    }
    }

    render(){
        return(
            <div className="place-form-container" >
                <ul className="error-list">
                    {this.errors()}
                </ul>
                <form onSubmit={this.handleSubmit} className="place-form">
                    <label className="place-name">
                        Name:
                    <input type="text" value={this.state.name} onChange={this.update('name')} />
                    </label>
                    <label className="place-location">
                        Location:
                    <select name="location" onChange={this.update('location')} defaultValue="Central City">
                            <option value="Central City">Central City</option>
                            <option value="East City">East City</option>
                            <option value="Papaya Island">Papaya Island</option>
                            <option value="West City">West City</option>
                        </select>
                    </label>
                    <label className="place-hours">
                        Hours:
                    <input className="from-time" type="time" /> to <input className="to-time" type="time" />
                    </label>
                    <label className="place-photo">
                        Photo:
                    <input type="file" onChange={this.fileChangeHandler} />
                    </label>
                    <label>
                        Tags:
                    <label><input type="checkbox" name="tag" value="Temple" onChange={this.updatecheck('tags', "1")} /> Temple</label>
                        <br />
                        <label><input type="checkbox" name="tag" value="Food" onChange={this.updatecheck('tags', "2")} /> Food</label>
                        <br />
                        <label><input type="checkbox" name="tag" value="TV" onChange={this.updatecheck('tags', "3")} /> TV</label>
                        <br />
                        <label><input type="checkbox" name="tag" value="Nature" onChange={this.updatecheck('tags', "4")} /> Nature</label>
                        <br />
                        <label><input type="checkbox" name="tag" value="Technical" onChange={this.updatecheck('tags', "5")} /> Technical</label>
                        <br />
                        <label><input type="checkbox" name="tag" value="Park" onChange={this.updatecheck('tags', "6")} /> Park</label>
                        <br />
                        <label> <input type="checkbox" name="tag" value="Historical" onChange={this.updatecheck('tags', "7")} /> Historical</label>
                    </label>
                    <input type="submit" value="Create Place" />
                </form>
            </div>
            
        )
    }
}

export default withRouter(PlaceForm);