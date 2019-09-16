import React from 'react';
import ReviewItemContainer from './review_item_container';
import NimbusLoader from './nimbus_loader';
import PhotoItem from './photo_item';
import {withRouter} from 'react-router-dom';

class PlaceShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            start: 0,
            last: 4
        }
        this.props.fetchPlace(this.props.id)
            .then(() => {
            this.setState({ isLoaded: true })
        })
        this.previousPhoto = this.previousPhoto.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
        this.rating = this.props.place.rating;
    }

    previousPhoto(){
        if (this.props.photos.length <= 4) {
            this.setState(this.state)
        }
        else if(this.state.start === 0){
            this.setState(this.state)
        } else {
            this.setState({start: this.state.start - 1, last: this.state.last - 1})
        }
    }

    nextPhoto(){
        if(this.props.photos.length <= 4){
            this.setState(this.state)
        }
        else if(this.state.last === this.props.photos.length){
            this.setState(this.state)
        } else{
            this.setState({last: this.state.last + 1, start: this.state.start + 1})
        }
    }

    render(){
        if (this.props.photos.length <= 4) {
            this.front_photos = this.props.photos
        } else {
            this.front_photos = this.props.photos.slice(this.state.start, this.state.last)
        }
        let show;
        if(this.state.isLoaded === true){
            show = (
                <div className="place-show">
                    <div className='place-photos-container'>
                        <div className="previous-container" onClick={this.previousPhoto}>
                            <span className="previous" >{"<"}</span>
                        </div>
                        <ul className="place-photos">
                            {this.front_photos.map((photo, idx) => {
                                return(<PhotoItem photo={photo} idx={idx} key={photo.id} />)
                            })}
                        </ul>
                        <div className="next-container" onClick={this.nextPhoto}>
                            <span className="next">{">"}</span>
                        </div>
                    </div>
                    <hr/>
                    <h1>{this.props.place.name}</h1>
                    <img className="place-main-photo" src={this.props.place.photo} alt="" height="200" width="200"/>
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
                {show}
            </div>
        )
    }
}

export default withRouter(PlaceShow);