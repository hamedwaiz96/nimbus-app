import React from 'react';
import PlacePhotosForUser from './place_photos_for_user';
import {Link} from 'react-router-dom';

class UserReviews extends React.Component {
    constructor(props){
        super(props);
        this.image = 0;
    }

    convertTime(review){
        let year = review.created_at.slice(0, 4);
        let month = review.created_at.slice(5, 7);
        let day = review.created_at.slice(8, 10);
        let date = `${month}/${day}/${year}`;
        return date;
    }

    render(){
        this.place_url = `/places/${this.props.place.id}`
        this.image = this.props.place.photo
        const self = this;
        return(
            <li className="user-reviews-show-list-item">
                <div className="user-show-place-container">
                    <div className="user-show-place">
                        <Link to={this.place_url} className="user-show-place-link">
                            <h2>{this.props.place.name}</h2>
                            <img src={this.image} alt="Place Photo" height="200" width="200" />
                        </Link>
                    </div>
                </div>
                <div className="user-reviews-details-container">
                    <ul className="user-reviews-details-list">
                        {this.props.reviews.map((review) => {
                            let price = "$".repeat(Math.round(review.price_rating))
                            let review_count = "rating" + Math.round(review.rating).toString()
                            let date = self.convertTime(review);
                            return (
                                <li className="place-show-review-container" key={review.id}>
                                    <div className="user-show-place-details">
                                        <p className="price hide-tag">My Price Rating: {price}</p>
                                    </div>
                                    <div className="rating-date">
                                        <div className={review_count}></div>
                                        <span className="rating-date-number">{date}</span>
                                    </div>
                                    <p><q>{review.body}</q></p>
                                </li>
                            )
                        })}
                    </ul>
                    <PlacePhotosForUser photos={this.props.photos[this.props.place.id]} place={this.props.place} author={this.props.user} />
                </div>
            </li>
        )
    }
}

export default UserReviews;