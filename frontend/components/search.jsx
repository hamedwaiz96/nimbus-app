import React from 'react';
import PlaceIndex from './place_index';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            location: [],
            rating: [],
            price: [],
            tags: []
        }
        this.updatesearch = this.updatesearch.bind(this)
        this.updatecheck = this.updatecheck.bind(this)
    }

    componentDidMount(){
        this.props.fetchPlaces(this.state)
    }

    updatesearch(key){
        const self = this
        return e => {
            self.state[key] = e.target.value
            self.props.fetchPlaces(self.state).then(() => { self.setState(self.state) }
            )
        }
    }

    updatecheck(category, value){
        const self = this
        return e => {
            if(!e.target.checked){
                self.state[category].splice(self.state[category].indexOf(value), 1)
            } else {
                self.state[category].push(value)
            }
            self.props.fetchPlaces(self.state).then(() => {self.setState(self.state)}
            )
        }
    }

    render(){
        return(
                <div>
                <section className="search">
                    <input type="text" placeholder="Search" value={this.state.search} onChange={this.updatesearch('search')} />
                </section>
                <main className="filter-and-index">
                    <section className="filter">
                        <h1>Filter By:</h1>
                        <label>
                            Category:
                        <br />
                            <input type="checkbox" name="tag" value="Temple" onChange={this.updatecheck('tags', "1")} /> Temple <br />
                            <input type="checkbox" name="tag" value="Food" onChange={this.updatecheck('tags', "2")} /> Food <br />
                            <input type="checkbox" name="tag" value="TV" onChange={this.updatecheck('tags', "3")} /> TV <br />
                            <input type="checkbox" name="tag" value="Nature" onChange={this.updatecheck('tags', "4")} /> Nature <br />
                            <input type="checkbox" name="tag" value="Technical" onChange={this.updatecheck('tags', "5")} /> Technical <br />
                            <input type="checkbox" name="tag" value="Park" onChange={this.updatecheck('tags', "6")} /> Park <br />
                            <input type="checkbox" name="tag" value="Historical" onChange={this.updatecheck('tags', "7")} /> Historical <br />
                        </label>
                        <label>
                            Location:
                            <br/>
                            <input type="checkbox" name="location" value="Central City" onChange={this.updatecheck('location', 'Central City')} /> Central City <br/>
                            <input type="checkbox" name="location" value="East City" onChange={this.updatecheck('location', 'East City')} /> East City <br/>
                            <input type="checkbox" name="location" value="Papaya Island" onChange={this.updatecheck('location', 'Papaya Island')} /> Papaya Island <br/>
                            <input type="checkbox" name="location" value="West City" onChange={this.updatecheck('location', 'West City')} /> West City <br/>
                        </label>
                        <label>
                            Price:
                        <br />
                            <input type="checkbox" name="price" value="1" onChange={this.updatecheck('price', '1')} /> 1 <br />
                            <input type="checkbox" name="price" value="2" onChange={this.updatecheck('price', '2')} /> 2 <br />
                            <input type="checkbox" name="price" value="3" onChange={this.updatecheck('price', '3')} /> 3 <br />
                            <input type="checkbox" name="price" value="4" onChange={this.updatecheck('price', '4')} /> 4 <br />
                            <input type="checkbox" name="price" value="5" onChange={this.updatecheck('price', '5')} /> 5 <br />
                        </label>
                        <label>
                            Rating:
                        <br />
                            <input type="checkbox" name="rating" value="1" onChange={this.updatecheck('rating', '1')} /> 1 <br />
                            <input type="checkbox" name="rating" value="2" onChange={this.updatecheck('rating', '2')} /> 2 <br />
                            <input type="checkbox" name="rating" value="3" onChange={this.updatecheck('rating', '3')} /> 3 <br />
                            <input type="checkbox" name="rating" value="4" onChange={this.updatecheck('rating', '4')} /> 4 <br />
                            <input type="checkbox" name="rating" value="5" onChange={this.updatecheck('rating', '5')} /> 5 <br />
                        </label>
                    </section>
                    <PlaceIndex places={this.props.places} />
                </main>
                </div>
        )
    }
}

export default Search;