import React from 'react';
import ReviewItemContainer from './review_item_container';
import {withRouter} from 'react-router-dom';

class PlaceShow extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoaded: false
        }
        this.props.fetchPlace(this.props.id).then(() => {
            this.setState({ isLoaded: true })
        })
    }

    render(){
        let show;
        if(this.state.isLoaded === true){
            show = (
                <div className="place-show">
                    <h1>{this.props.place.name}</h1>
                    <img src={this.props.place.photo} alt="" />
                    <ul className="review-items">
                        {this.props.reviews.map((review) => {
                            return (
                                <ReviewItemContainer review={review} key={review.id} />
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            show = (
                <div>Loading</div>
            )
        }
        return(
            <div>
                {show}
            </div>
        )
    }
}

export default withRouter(PlaceShow);