import React from 'react';
import { fetchPlace } from '../util/place_api_util';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            rating: '',
            price: '',
            tags: []
        }
    }

    update(key){
        const self = this
        return e => {
            this.state[key] = e.target.value
            fetchPlace(this.state).then(
                self.setState(this.state)
            )
        }
    }

    render(){
        return(
            <form>
                <input type="text" placeholder="Search For Place" value={this.state.search} onChange={this.update('search')} />
                
            </form>
        )
    }
}

export default Search;