import React from 'react';
import axios from 'axios';
import UserReviews from './user_reviews';
import NimbusLoader from './nimbus_loader';

import { CLOUDINARY_IMAGE_URL, CLOUDINARY_PRESET } from '../util/cloudinary_info';

class UserShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            toggleValue: "Change Profile Picture",
            user_image: this.props.user.image
        }
        this.props.fetchUser(this.props.user_id).then(() => {
            this.setState({isLoading: false})
        })
        this.file = "";
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.toggleValueP = this.toggleValueP.bind(this);
    }

    hideOverlay(){
        document.getElementById('overlay').style.display = 'none';
    }

    nothing(){
        return
    }

    handleSubmit(e) {
        e.preventDefault();
        const self = this;
        let Formdata = new FormData();
        Formdata.append('file', this.file);
        Formdata.append('upload_preset', CLOUDINARY_PRESET);
        Formdata.append('folder', 'nimbus/users');
        axios({
            url: CLOUDINARY_IMAGE_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: Formdata
        }).then(
            (res) => {
                self.props.updateUserPhoto(self.props.user_id, res.data.secure_url).then((user) => {
                    $('.photo-change-form').toggle();
                    self.toggleValueP();
                    self.setState({user_image: res.data.secure_url})
                })
            },
            (err) => {
                self.props.receiveErrors(err);
            }
        )
    }

    toggleForm(e) {
        e.preventDefault();
        $('.photo-change-form').toggle();
        this.toggleValueP();
    }

    toggleValueP() {
        if (this.state.toggleValue === "Change Profile Picture") {
            $(".photo-change-button").toggleClass("cancel")
            this.setState({ toggleValue: "Cancel" })
        } else {
            $(".photo-change-button").toggleClass("cancel")
            this.setState({ toggleValue: 'Change Profile Picture' })
        }
    }

    fileChangeHandler(e) {
        this.file = e.target.files[0]
    } 

    render(){
        if(this.state.isLoading){
            return(
                <NimbusLoader />
            )
        } else {
            let pictureChange;
            console.log(this.props);
            if(this.props.session_id === this.props.user.id) {
                pictureChange = (
                    <div className="photo-change-form-container">
                        <button className="photo-change-button" onClick={this.toggleForm}>{this.state.toggleValue}</button>
                        <form className="photo-change-form" onSubmit={this.handleSubmit}>
                            <input type="file" onChange={this.fileChangeHandler} />
                            <input type="submit" />
                        </form>
                    </div>
                )
            } else {
                pictureChange = ""
            }
            return(
                <div>
                    <div id="overlay" onClick={this.hideOverlay}>
                        <div className="overlay-block">
                            <img id="overlay-image" src="" alt="" onClick={this.nothing}/>
                            <div className="black-bar"></div>
                        </div>
                    </div>
                    <div className="user-show-container">
                        <img className="user-show-photo" src={this.state.user_image} alt="User Profile Picture" height="200" width="200" />
                        <div className="user-show-side">
                            <h1>{this.props.user.username}</h1>
                            <div className="user-show-side-details">
                                <span className="fa fa-star review-count"> {this.props.user.review_count} reviews</span>
                                <span className="fa fa-camera photo-count ">{this.props.user.photo_count} photos</span>
                            </div>
                            {pictureChange}
                        </div>
                        <hr />
                        <div className="user-reviews" >
                            <h1>Reviews</h1>
                            <ul className="user-show-review-list">
                                {this.props.reviews.map((review) => {
                                    return (
                                        <UserReviews key={review.id} review={review} places={this.props.places} photos={this.props.photos} user={this.props.user} />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default UserShow;