import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom'

class PlaceItemIndex extends React.Component {
    constructor(props){
        super(props)
        this.ratingClass = `rating${Math.round(this.props.place.average_rating)} review-photo`
        this.link = `/places/${this.props.place.id}`
        this.price = '$'.repeat(Math.round(this.props.place.average_price))
    }

    render(){
        return(
            <Link className="place-item" to={this.link}>
                <img className="main-photo" src={this.props.place.photo} height="100" width="100" alt=""/>
                <div className="place-item-info" >
                    <p className="place-item-name">{this.props.place.name}</p>
                    <div className="place-item-reviews">
                        <div className={this.ratingClass}></div>
                        <span>{this.props.place.review_count} Reviews</span>
                    </div>
                    <div className="place-item-more">
                        <p className="price">{this.price}</p>
                        <span>{this.props.place.tags}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default withRouter(PlaceItemIndex);