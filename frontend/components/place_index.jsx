import React from 'react';
import PlaceItemIndex from './place_item_index';

class PlaceIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className="place-items">
                {this.props.places.map((place) => {
                    return (
                            <PlaceItemIndex place={place} key={place.id} />
                    )
                })}
            </ul>
        )
    }
}

export default PlaceIndex;