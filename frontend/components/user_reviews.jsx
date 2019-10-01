import React from 'react';
import PlacePhotosForUser from './place_photos_for_user';
import {Link} from 'react-router-dom';

class UserReviews extends React.Component {
    constructor(props){
        super(props);
        this.place = 0
        this.price = "$".repeat(Math.round(this.props.review.price_rating))
        this.review_count = "rating" + Math.round(this.props.review.rating).toString()
        this.date = ""
        this.image = 0;
    }

    convertTime(){
        let year = this.props.review.created_at.slice(0, 4);
        let month = this.props.review.created_at.slice(5, 7);
        let day = this.props.review.created_at.slice(8, 10);
        this.date = `${month}/${day}/${year}`;
    }

    render(){
        this.props.places.map((place) => {
            if (place.id === this.props.review.place_id) {
                this.place = place;
                this.image = this.place.photo
                this.place_url = `/places/${this.place.id}`
            }
        })
        this.convertTime();
        return(
            <li className="user-reviews-show-list-item">
                <div className="user-show-place-container">
                    <div className="user-show-place">
                        <Link to={this.place_url} className="user-show-place-link">
                            <h2>{this.place.name}</h2>
                            <img src={this.image} alt="Place Photo" height="200" width="200" />
                        </Link>
                        <div className="user-show-place-details">
                            <p className="price hide-tag">My Price Rating: {this.price}</p>
                        </div>
                    </div>
                    <div className="place-show-review-container">
                        <div className="rating-date">
                            <div className={this.review_count}></div>
                            <span className="rating-date-number">{this.date}</span>
                        </div>
                        <p><q>{this.props.review.body}</q></p>
                        <PlacePhotosForUser photos={this.props.photos[this.place.id]} place={this.place} />
                    </div>
                </div>
            </li>
        )
    }
}

export default UserReviews;