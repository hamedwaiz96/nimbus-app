import React from 'react';
import {withRouter} from 'react-router';

class PlaceItemIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <li className="place-item" >
                <h1>{this.props.place.name} <span>{this.props.place.average_rating}</span></h1>
                <img src={this.props.place.image_url} height="100" width="100" alt=""/>
            </li>
        )
    }
}

export default withRouter(PlaceItemIndex);