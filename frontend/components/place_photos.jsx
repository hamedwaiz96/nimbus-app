import React from 'react';
import PhotoItem from './photo_item';
import {Link} from 'react-router-dom';

class PlacePhotos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            start: 0,
            last: 4
        }
        this.previousPhoto = this.previousPhoto.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
    }

    previousPhoto() {
        if (this.props.photos.length <= 4) {
            this.setState(this.state)
        }
        else if (this.state.start === 0) {
            this.setState(this.state)
        } else {
            this.setState({ start: this.state.start - 1, last: this.state.last - 1 })
        }
    }

    nextPhoto() {
        if (this.props.photos.length <= 4) {
            this.setState(this.state)
        }
        else if (this.state.last === this.props.photos.length) {
            this.setState(this.state)
        } else {
            this.setState({ last: this.state.last + 1, start: this.state.start + 1 })
        }
    }

    render(){
        this.place = `/photos/new/${this.props.place.id}`
        if (this.props.photos.length <= 4) {
            this.front_photos = this.props.photos
        } else {
            this.front_photos = this.props.photos.slice(this.state.start, this.state.last)
        }
        return(
            <div className='place-photos-container'>
                <div className="place-photos-block">
                    <div className="previous-container" onClick={this.previousPhoto}>
                        <span className="previous" >{"<"}</span>
                    </div>
                    <ul className="place-photos">
                        {this.front_photos.map((photo, idx) => {
                            return (<PhotoItem photo={photo} idx={idx} key={photo.id} author={this.props.authors[photo.user_id]} />)
                        })}
                    </ul>
                    <div className="next-container" onClick={this.nextPhoto}>
                        <span className="next">{">"}</span>
                    </div>
                </div>
                <Link to={this.place} className="photo-create">Add Photo</Link>
            </div>
        )
    }
}

export default PlacePhotos;