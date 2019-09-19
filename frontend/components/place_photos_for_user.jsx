import React from 'react';
import PhotoItem from './photo_item';

class PlacePhotosForUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            start: 0,
            last: 4
        }
        // Example: this.prop.photos = {0: [photo, photo], 32: [photo], 33: []} (key is place_id)
        // Example: this.props.place = {place}
        if (this.props.photos[this.props.place.id] != []) {
            this.photos = this.props.photos[this.props.place.id]
        } else {
            this.photos = []
        }
        this.previousPhoto = this.previousPhoto.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
    }

    previousPhoto() {
        if (this.photos.length <= 4) {
            this.setState(this.state)
        }
        else if (this.state.start === 0) {
            this.setState(this.state)
        } else {
            this.setState({ start: this.state.start - 1, last: this.state.last - 1 })
        }
    }

    nextPhoto() {
        if (this.photos.length <= 4) {
            this.setState(this.state)
        }
        else if (this.state.last === this.photos.length) {
            this.setState(this.state)
        } else {
            this.setState({ last: this.state.last + 1, start: this.state.start + 1 })
        }
    }

    render(){
        if(this.photos.length === 0){
            return(
                ""
            )
        }
        else if (this.photos.length <= 4) {
            this.front_photos = this.photos
        } else {
            this.photos = this.photos.slice(this.state.start, this.state.last)
        }
        return (
            <div className='place-photos-container'>
                <div className="previous-container" onClick={this.previousPhoto}>
                    <span className="previous" >{"<"}</span>
                </div>
                <ul className="place-photos">
                    {this.front_photos.map((photo, idx) => {
                        return (<PhotoItem photo={photo} idx={idx} key={photo.id} />)
                    })}
                </ul>
                <div className="next-container" onClick={this.nextPhoto}>
                    <span className="next">{">"}</span>
                </div>
            </div>
        )
    }
}

export default PlacePhotosForUser;