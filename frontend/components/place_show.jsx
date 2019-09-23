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
                    <PlacePhotos photos={this.props.photos} />
                    <hr/>
                    <h1>{this.props.place.name}</h1>
                    <img className="place-main-photo" src={this.props.place.photo} alt="" height="200" width="200"/>
                    <div className="place-item-reviews">
                        <div className={this.rating}></div>
                        <span>{this.props.place.review_count} Reviews</span>
                    </div>
                    <Link to={this.link}>Write a Review</Link>
                    <ul className="review-items">
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
                    
                    <img id="overlay-image" src="" alt="" />
                </div>
                {show}
            </div>
        )
    }
}

export default withRouter(PlaceShow);