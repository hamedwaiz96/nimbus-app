import React from 'react';
import ReviewItemContainer from './review_item_container';
import NimbusLoader from './nimbus_loader';
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
            debugger;
            show = (
                <div className="place-show">
                    <ul className="place-photos">
                        
                    </ul>
                    <h1>{this.props.place.name}</h1>
                    <img className="place-main-photo" src={this.props.place.photo} alt="" height="200" width="200"/>
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
                <NimbusLoader />
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