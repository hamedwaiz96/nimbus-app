import React from 'react';
import PlaceItemIndex from './place_item_index';
import NimbusLoader from './nimbus_loader';

class PlaceIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let loading;
        if(this.props.loading){
            loading = (
                <NimbusLoader />
            )
        } else {
            loading = (
                <ul className="place-items">
                    {this.props.places.map((place) => {
                        return (
                            <PlaceItemIndex place={place} key={place.id} />
                        )
                    })}
                </ul>
            )
        }
        return(
            <div className="place-index-container">
                {loading}
            </div>
        )
    }
}

export default PlaceIndex;