import React from 'react';
import PlaceIndex from './place_index';
import GreetingContainer from './greeting_container'
import PlaceShowContainer from './place_show_container';
import PlaceFormContainer from './place_form_container';
import {Link, withRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            location: [],
            rating: [],
            price: [],
            tags: []
        }
        this.updatecheck = this.updatecheck.bind(this);
        this.updatesearch = this.updatesearch.bind(this);
        this.updateblocksearch = this.updateblocksearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleregSubmit = this.handleregSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchPlaces(this.state);
    }

    updatecheck(category, value) {
        const self = this
        return e => {
            if (!e.target.checked) {
                self.state[category].splice(self.state[category].indexOf(value), 1)
            } else {
                self.state[category].push(value)
            }
            self.props.fetchPlaces(self.state).then(() => {
                self.setState(self.state);
            })
        }
    }

    toggleHide() {
        $(".filter-inside").toggleClass("hide");
    }

    clearFilters() {
        this.state.location = [];
        this.state.rating = [];
        this.state.price = [];
        this.state.tags = [];
        this.props.fetchPlaces(this.state).then(() => { this.setState(this.state) })
    }

    updatesearch(key){
        const self = this
        return e => {
            self.state[key] = e.target.value
            self.props.fetchPlaces(self.state).then(() => {
                self.setState(self.state);
            })
        }
    }

    updateblocksearch(key){
        const self = this;
        return e => {
            self.setState({[key]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.history.push("/")
        this.props.fetchPlaces(this.state).then(() => {
            this.setState(this.state);
        })
    }

    handleregSubmit(e){
        e.preventDefault();
        this.props.fetchPlaces(this.state).then(() => {
            this.setState(this.state);
        })
    }

    render(){
        let search;
        if (this.props.history.location.pathname != "/"){
            search = (
                <form onSubmit={this.handleSubmit} className="search-form">
                    <input className="search-bar" type="text" placeholder="Search" value={this.state.search} onChange={this.updateblocksearch('search')} />
                    <button className="fa fa-search"></button>
                </form>
            )
        } else {
            search = (
                <form onSubmit={this.handleregSubmit} className="search-form">
                    <input className="search-bar" type="text" placeholder="Search" value={this.state.search} onChange={this.updatesearch('search')} />
                    <button className="fa fa-search"></button>
                </form>
            )
        }
        return(
                <div className="full">
                <header className="search">
                    <Link className="place-creator" to="/places/new">Create Place</Link>
                    <div className="search-inside">
                        <Link className="nimbus" to="/">Nimbus</Link>
                        {search}
                    </div>
                    <GreetingContainer />
                </header>
                <Switch>
                    <Route exact path="/" render={(props) => (
                        <main className="filter-and-index">
                            <p onClick={this.toggleHide} className="filter-by">Add Filters</p>
                            <section className="filter">
                                <div className="filter-inside hide">
                                    <div className="filter-block">
                                        <h4>Category:</h4>
                                        <label><input type="checkbox" name="tag" value="Temple" onChange={this.updatecheck('tags', "1")} /> Temple</label>
                                        <br />
                                        <label><input type="checkbox" name="tag" value="Food" onChange={this.updatecheck('tags', "2")} /> Food</label>
                                        <br />
                                        <label><input type="checkbox" name="tag" value="TV" onChange={this.updatecheck('tags', "3")} /> TV</label>
                                        <br />
                                        <label><input type="checkbox" name="tag" value="Nature" onChange={this.updatecheck('tags', "4")} /> Nature</label>
                                        <br />
                                        <label><input type="checkbox" name="tag" value="Technical" onChange={this.updatecheck('tags', "5")} /> Technical</label>
                                        <br />
                                        <label><input type="checkbox" name="tag" value="Park" onChange={this.updatecheck('tags', "6")} /> Park</label>
                                        <br />
                                        <label> <input type="checkbox" name="tag" value="Historical" onChange={this.updatecheck('tags', "7")} /> Historical</label>
                                    </div>
                                    <div className="filter-block">
                                        <h4>Location:</h4>
                                        <label><input type="checkbox" name="location" value="Central City" onChange={this.updatecheck('location', 'Central City')} /> Central City</label>
                                        <br />
                                        <label><input type="checkbox" name="location" value="East City" onChange={this.updatecheck('location', 'East City')} /> East City</label>
                                        <br />
                                        <label><input type="checkbox" name="location" value="Papaya Island" onChange={this.updatecheck('location', 'Papaya Island')} /> Papaya Island</label>
                                        <br />
                                        <label><input type="checkbox" name="location" value="West City" onChange={this.updatecheck('location', 'West City')} /> West City</label>
                                    </div>
                                    <div className="filter-block">
                                        <h4>Price:</h4>
                                        <label><input type="checkbox" name="price" value="1" onChange={this.updatecheck('price', '1')} /> 1</label>
                                        <br />
                                        <label><input type="checkbox" name="price" value="2" onChange={this.updatecheck('price', '2')} /> 2</label>
                                        <br />
                                        <label><input type="checkbox" name="price" value="3" onChange={this.updatecheck('price', '3')} /> 3</label>
                                        <br />
                                        <label><input type="checkbox" name="price" value="4" onChange={this.updatecheck('price', '4')} /> 4</label>
                                        <br />
                                        <label><input type="checkbox" name="price" value="5" onChange={this.updatecheck('price', '5')} /> 5</label>
                                    </div>
                                    <div className="filter-block">
                                        <h4>Rating:</h4>
                                        <label><input type="checkbox" name="rating" value="1" onChange={this.updatecheck('rating', '1')} /> 1</label>
                                        <br />
                                        <label><input type="checkbox" name="rating" value="2" onChange={this.updatecheck('rating', '2')} /> 2</label>
                                        <br />
                                        <label><input type="checkbox" name="rating" value="3" onChange={this.updatecheck('rating', '3')} /> 3</label>
                                        <br />
                                        <label><input type="checkbox" name="rating" value="4" onChange={this.updatecheck('rating', '4')} /> 4</label>
                                        <br />
                                        <label><input type="checkbox" name="rating" value="5" onChange={this.updatecheck('rating', '5')} /> 5</label>
                                    </div>
                                </div>
                            </section>
                            <PlaceIndex places={this.props.places} loading={this.props.loading} />
                        </main>
                    )}/>
                    <Route path="/places/:id" component={PlaceShowContainer} />
                    <Route exact path="/places/new" component={PlaceFormContainer} />
                </Switch>
                </div>
        )
    }
}

export default withRouter(Search);