import React from 'react';
import PlaceIndex from './place_index';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            rating: '',
            price: '',
            tags: []
        }
        this.updatesearch = this.updatesearch.bind(this)
        this.updatetag = this.updatetag.bind(this)
        this.updateradio = this.updateradio.bind(this)
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

    updatetag(category){
        const self = this
        return e => {
            if(!e.target.checked){
                self.state.tags.splice(self.state.tags.indexOf(category), 1)
            } else {
                self.state.tags.push(category)
            }
            self.props.fetchPlaces(self.state).then(() => {self.setState(self.state)}
            )
        }
    }
    
    updateradio(type){
        const self = this
        return e => {
            if(this.state[type] === e.target.value){
                return
            } else {
                this.state[type] = e.target.value
                self.props.fetchPlaces(this.state).then(() => {
                    self.setState(self.state)
                })
            }
        }
    }

    render(){
        return(
                <div>
                <section className="search">
                    <input type="text" placeholder="Search" value={this.state.search} onChange={this.updatesearch('search')} />
                </section>
                <main>
                    <section className="filter">
                        <h1>Filter By:</h1>
                        <label>
                            Category:
                        <br />
                            <input type="checkbox" name="tag" value="Temple" onChange={this.updatetag("1")} /> Temple <br />
                            <input type="checkbox" name="tag" value="Food" onChange={this.updatetag("2")} /> Food <br />
                            <input type="checkbox" name="tag" value="TV" onChange={this.updatetag("3")} /> TV <br />
                            <input type="checkbox" name="tag" value="Nature" onChange={this.updatetag("4")} /> Nature <br />
                            <input type="checkbox" name="tag" value="Technical" onChange={this.updatetag("5")} /> Technical <br />
                            <input type="checkbox" name="tag" value="Park" onChange={this.updatetag("6")} /> Park <br />
                            <input type="checkbox" name="tag" value="Historical" onChange={this.updatetag("7")} /> Historical <br />
                        </label>
                        <label>
                            Price:
                        <br />
                            <input type="radio" name="price" value="1" onChange={this.updateradio('price')} /> 1 <br />
                            <input type="radio" name="price" value="2" onChange={this.updateradio('price')} /> 2 <br />
                            <input type="radio" name="price" value="3" onChange={this.updateradio('price')} /> 3 <br />
                            <input type="radio" name="price" value="4" onChange={this.updateradio('price')} /> 4 <br />
                            <input type="radio" name="price" value="5" onChange={this.updateradio('price')} /> 5 <br />
                        </label>
                        <label>
                            Rating:
                        <br />
                            <input type="radio" name="rating" value="1" onChange={this.updateradio('rating')} /> 1 <br />
                            <input type="radio" name="rating" value="2" onChange={this.updateradio('rating')} /> 2 <br />
                            <input type="radio" name="rating" value="3" onChange={this.updateradio('rating')} /> 3 <br />
                            <input type="radio" name="rating" value="4" onChange={this.updateradio('rating')} /> 4 <br />
                            <input type="radio" name="rating" value="5" onChange={this.updateradio('rating')} /> 5 <br />
                        </label>
                    </section>
                    <PlaceIndex places={this.props.places} />
                </main>
                </div>
        )
    }
}

export default Search;