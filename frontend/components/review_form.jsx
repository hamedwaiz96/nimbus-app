import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: '',
            rating: '',
            place_id: this.props.place_id,
            author_id: this.props.user_id,
            price_rating: ''
        }
        this.props.fetchPlaces({});
        if(this.props.place_id != 'main'){
            this.place = this.props.places[parseInt(this.props.place_id)]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
    }

    errors() {
        if (this.props.errors) {
            return (
                this.props.errors.map(error => {
                    return (<li className="error alert alert-danger fade" key={error}>{error}</li>);
                })
            );
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state).then(
            (review) => {
            let values = Object.values(review)[0]
            console.log(values);
            this.props.history.push(`/places/${values.place_id}`)
        }, (err) => {
            this.props.receiveErrors(err.err);
        }
        );
    }

    update(key){
        return e => {
            this.setState({[key]: e.target.value})
        }
    }

    updateRating(e) {
        var $e = $(e.target)
        let number = $e[0].className[14]
        for(let i = 1; i <= 5; i++){
            $(`.rating-sprite-${i}`).css('background', 'url(https://i.stack.imgur.com/oZ9Id.png) no-repeat 0px 0px')
        }
        for (let i = 5; i >= number; i--){
            $(`.rating-sprite-${i}`).css('background', 'url(https://i.stack.imgur.com/oZ9Id.png) no-repeat 0px -20px')
        }
        this.state.rating = (6-parseInt(number)).toString()
    }

    updatePrice(e) {
        var $e = $(e.target)
        let number = $e[0].className[13]
        for (let i = 1; i <= 5; i++) {
            $(`.price-sprite-${i}`).css('color', 'black')
        }
        for (let i = 5; i >= number; i--) {
            $(`.price-sprite-${i}`).css('color', '#50c878')
        }
        this.state.price_rating = (6 - parseInt(number)).toString()
    }

    render(){
        return(
            <div>
                <ul className="error-list">
                    {this.errors()}
                </ul>
                <div className="review-form-container">
                    <h1>New Review</h1>
                    <form className="review-form" onSubmit={this.handleSubmit}>
                        <label className="rating-full">
                            <p>Rating:</p>
                            <ul className="rating-sprite">
                                <li className="rating-sprite-1" onClick={this.updateRating}></li>
                                <li className="rating-sprite-2" onClick={this.updateRating}></li>
                                <li className="rating-sprite-3" onClick={this.updateRating}></li>
                                <li className="rating-sprite-4" onClick={this.updateRating}></li>
                                <li className="rating-sprite-5" onClick={this.updateRating}></li>
                            </ul>
                        </label>
                        <label className="price-full">
                            <p>Price:</p>
                            <ul className="price-sprite">
                                <li className="price-sprite-1" onClick={this.updatePrice}>$</li>
                                <li className="price-sprite-2" onClick={this.updatePrice}>$</li>
                                <li className="price-sprite-3" onClick={this.updatePrice}>$</li>
                                <li className="price-sprite-4" onClick={this.updatePrice}>$</li>
                                <li className="price-sprite-5" onClick={this.updatePrice}>$</li>
                            </ul>
                        </label>
                        <div className="review-body" htmlFor="body">
                            <p>Review (Optional)</p>
                            <textarea name="body" id="body" cols="30" rows="10" onChange={this.update('body')}>{this.state.body}</textarea>
                        </div>

                        <input type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(ReviewForm);