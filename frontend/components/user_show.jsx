import React from 'react';
import UserReviews from './user_reviews';
import NimbusLoader from './nimbus_loader';

class UserShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        }
        this.props.fetchUser(this.props.user_id).then(() => {
            this.setState({isLoading: false})
        })
    }

    hideOverlay(){
        document.getElementById('overlay').style.display = 'none';
    }

    nothing(){
        return
    }

    render(){
        if(this.state.isLoading){
            return(
                <NimbusLoader />
            )
        } else {
            return(
                <div>
                    <div id="overlay" onClick={this.hideOverlay}>
                        <div className="overlay-block">
                            <img id="overlay-image" src="" alt="" onClick={this.nothing}/>
                            <div className="black-bar"></div>
                        </div>
                    </div>
                    <div className="user-show-container">
                        <img className="user-show-photo" src={this.props.user.image} alt="User Profile Picture" height="200" width="200" />
                        <div className="user-show-side">
                            <h1>{this.props.user.username}</h1>
                            <div className="user-show-side-details">
                                <span className="fa fa-star review-count"> {this.props.user.review_count} reviews</span>
                                <span className="fa fa-camera photo-count ">{this.props.user.photo_count} photos</span>
                            </div>
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