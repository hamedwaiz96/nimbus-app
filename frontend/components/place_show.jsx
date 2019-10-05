import React from 'react';
import ReviewItemContainer from './review_item_container';
import NimbusLoader from './nimbus_loader';
import PlacePhotos from './place_photos';
import {withRouter, Link} from 'react-router-dom';

class PlaceShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        }
        this.props.fetchPlace(this.props.id)
            .then(() => {
            this.setState({ isLoaded: true })
        })
        this.link = `/reviews/new/${this.props.id}`
        this.hideOverlay = this.hideOverlay.bind(this);
    }

    hideOverlay(){
        document.getElementById('overlay').style.display = 'none';
    }

    render(){
        let show;
        if(this.state.isLoaded === true){
            this.rating = 'rating' + Math.round(this.props.place.average_rating).toString()
            show = (
                <div className="place-show">
                    <PlacePhotos place_id={this.props.place_id} user_id={this.props.user_id} errors={this.props.errors} places={this.props.places} fetchPlaces={this.props.fetchPlaces} createPhoto={this.props.createPhoto} receiveErrors={this.props.receiveErrors} photos={this.props.photos} authors={this.props.authors} place={this.props.place} session={this.props.session_id} />
                    <div className="place-show-details">
                        <h1>{this.props.place.name}</h1>
                        <img className="place-main-photo" src={this.props.place.photo} alt="" height="200" width="200" />
                        <div className="place-item-reviews place-center">
                            <div className={this.rating}></div>
                            <span className="place-show-review-count">{this.props.place.review_count} Reviews</span>
                        </div>
                        <Link className="btn btn--round" to={this.link}>Write a Review</Link>
                    </div>
                    <ul className="review-items">
                        <h1>Reviews</h1>
                        {this.props.reviews.map((review) => {
                            return (<ReviewItemContainer review={review} key={review.id} />)
                        })}
                    </ul>
                </div>
            )
        } else {
            show = (
                <NimbusLoader />
            )
            
        }
        return(
            <div>
                <div id="overlay" onClick={this.hideOverlay}>
                    <div className="overlay-block">
                        <img id="overlay-image" src="" alt="" />
                        <div className="black-bar"></div>
                    </div>
                </div>
                {show}
            </div>
        )
    }
}

export default withRouter(PlaceShow);