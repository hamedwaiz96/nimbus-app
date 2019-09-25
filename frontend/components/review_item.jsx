import React from 'react';
import {Link} from 'react-router-dom';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.user_link = `/users/${this.props.author.id}`
    }

    render() {
        this.rating = 'rating-body-review rating' + Math.round(this.props.review.rating).toString()
        return (
            <li className="review-item">
                <div className="review-item-details">
                    <img className="review-user-photo" src={this.props.author.image} alt={this.props.author.username} height="50" width="50" />
                    <div className="review-user-details">
                        <Link to={this.user_link}>{this.props.author.username}</Link>
                        <span className="fa fa-star review-count"> {this.props.author.review_count} reviews</span>
                        <span className="fa fa-camera photo-count "> {this.props.author.photo_count} photos</span>
                    </div>
                </div>
                <div className="rating-body">
                    <div className={this.rating}></div>
                    <p className="rating-body-par"><q>{this.props.review.body}</q></p>
                </div>
            </li>
        )
    }
}

export default ReviewItem;