import React from 'react';

class PlaceShow extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>{this.props.id}</h1>
        )
    }
}

export default PlaceShow;