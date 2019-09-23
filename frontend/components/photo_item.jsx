import React from 'react';

class PhotoItem extends React.Component {
    constructor(props){
        super(props);
        this.overlayimage = this.overlayimage.bind(this);
    }

    overlayimage() {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay-image").src = this.props.photo.url
    }

    render(){
        return(
            <li className="place-photo-item-container">
                <img className="place-photo-item" src={this.props.photo.url} onClick={this.overlayimage} alt=""/>
            </li>
        )
    }
}

export default PhotoItem;