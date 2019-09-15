import React from 'react';

class PhotoItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="place-photo-item-container">
                <img className="place-photo-item" src={this.props.photo.url} alt=""/>
            </li>
        )
    }
}

export default PhotoItem;