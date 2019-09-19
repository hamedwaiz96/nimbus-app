import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        // place_id, fetchPlaces, createReview
        this.state = {
            body: '',
            rating: '',
            place_id: '',
            author_id: this.props.user_id,
            price_rating: ''
        }
        this.props.fetchPlaces({});
        if(this.props.place_id != 'main'){
            this.place = this.props.places[parseInt(this.props.place_id)]
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                
            </form>
        )
    }
}

export default withRouter(ReviewForm);