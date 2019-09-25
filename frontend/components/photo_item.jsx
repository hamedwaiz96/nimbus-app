import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class PhotoItem extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.author)
        this.overlayimage = this.overlayimage.bind(this);
    }

    overlayimage() {
        const self = this;
        this.author_url = `/users/${this.props.author.id}`
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay-image").src = this.props.photo.url;
        let user_link = document.getElementsByClassName('black-bar')[0];
        user_link.innerHTML = `Photo By: ${this.props.author.username}`;
        user_link.onclick = () => {
            self.props.history.push(self.author_url)
        }

    }

    render(){
        return(
            <li className="place-photo-item-container">
                <img className="place-photo-item" src={this.props.photo.url} onClick={this.overlayimage} alt=""/>
            </li>
        )
    }
}

export default withRouter(PhotoItem);