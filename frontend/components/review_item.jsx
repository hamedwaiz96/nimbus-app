import React from 'react';
import {Link} from 'react-router-dom';

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.user_link = `/users/${this.props.author.id}`
    }

    render() {
        return (
            <li className="review-item">
                <img className="review-user-photo" src={this.props.author.image} alt={this.props.author.username} height="50" width="50" />
                <Link to={this.user_link}>{this.props.author.username}</Link>
                <div className="review-user-info">
                    <span className="fa fa-star review-count"> {this.props.author.review_count} reviews</span> <br/>
                    <span className="fa fa-camera photo-count ">{this.props.author.photo_count} photos</span>
                </div>
            </li>
        )
    }
}

export default ReviewItem;