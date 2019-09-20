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
        this.update = this.update.bind(this);
    }

    update(key){
        return e => {
            this.setState({[key]: e.target.value})
        }
    }

    render(){
        return(
            <div className="review-form-container">
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <label className="rating-full">
                        <p>Rating:</p>
                        <ul className="rating-sprite">
                            <li className="rating-sprite-1"></li>
                            <li className="rating-sprite-2"></li>
                            <li className="rating-sprite-3"></li>
                            <li className="rating-sprite-4"></li>
                            <li className="rating-sprite-5"></li>
                        </ul>
                    </label>
                    <input type="text" value={this.state.body} onChange={this.update('body')} />
                </form>
            </div>
            
        )
    }
}

export default withRouter(ReviewForm);