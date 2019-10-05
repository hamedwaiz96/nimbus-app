import React from 'react';
import PlaceIndex from './place_index';
import GreetingContainer from './greeting_container'
import PlaceShowContainer from './place_show_container';
import PlaceFormContainer from './place_form_container';
import UserShowContainer from './user_show_container';
import ReviewFormContainer from './review_form_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import PhotoFormContainer from './photo_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
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
        this.clearFilters = this.clearFilters.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
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
        $(".filter-span").toggleClass("minus");
        $(".filter-inside").toggleClass("hide");
    }

    clearFilters() {
        this.state.location = [];
        this.state.rating = [];
        this.state.price = [];
        this.state.tags = [];
        var checkBoxes = $("input[type='checkbox']");
        var i;
        for(i = 0; i <= checkBoxes.length - 1; i++){
            if (checkBoxes.eq(i).prop('checked') == true){
                checkBoxes.eq(i).prop('checked', false)
            }
        }
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

    hideDetails(){
        if((this.props.session !== null) && $('.logged-in-details-container')[0].style.display !== 'none'){
            $('.logged-in-details-container').toggle();
        }
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
                    <Link className="nimbus" to="/"><img src="https://res.cloudinary.com/nimbus-app/image/upload/v1570232579/nimbus/Nimbus-logo-black_1_kczzzz.png" alt="Nimbus Cloud with Nimbus text underneath" height="62.44" width="70" /></Link>
                    <div className="search-inside">
                        {search}
                    </div>
                    <Link className="btn" to="/places/new">Create Place</Link>
                    <GreetingContainer />
                    </header>
                <div className="other" onClick={this.hideDetails}>
                    <Switch>
                        <Route exact path="/" render={(props) => (
                            <main className="filter-and-index">
                                <div onClick={this.toggleHide} className="filter-by card-3">
                                    <p className="filter-span"></p>
                                    <h3 className="filter-by-header">Add Filters</h3>
                                    <p className="filter-span"></p>
                                </div>
                                <section className="filter">
                                    <div className="filter-inside hide">
                                        <div className="filter-block container">
                                            <h4 className="filter-block-header">Category:</h4>
                                            <ul className="ks-cboxtags filter-list">
                                                <li><input id="Temple" type="checkbox" name="tag" value="Temple" onChange={this.updatecheck('tags', "1")} /> <label htmlFor="Temple">Temple</label></li>
                                                <li><input id="Food" type="checkbox" name="tag" value="Food" onChange={this.updatecheck('tags', "2")} /> <label htmlFor="Food">Food</label></li>
                                                <li><input id="TV" type="checkbox" name="tag" value="TV" onChange={this.updatecheck('tags', "3")} /> <label htmlFor="TV">TV</label></li>
                                                <li><input id="Nature" type="checkbox" name="tag" value="Nature" onChange={this.updatecheck('tags', "4")} /> <label htmlFor="Nature">Nature</label></li>
                                                <li><input id="Technical" type="checkbox" name="tag" value="Technical" onChange={this.updatecheck('tags', "5")} /> <label htmlFor="Technical">Technical</label></li>
                                                <li><input id="Park" type="checkbox" name="tag" value="Park" onChange={this.updatecheck('tags', "6")} /> <label htmlFor="Park">Park</label></li>
                                                <li> <input id="Historical" type="checkbox" name="tag" value="Historical" onChange={this.updatecheck('tags', "7")} /> <label htmlFor="Historical">Historical</label></li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="filter-block container">
                                            <h4 className="filter-block-header">Location:</h4>
                                            <ul className="ks-cboxtags">
                                                <li><input id="Central City" type="checkbox" name="location" value="Central City" onChange={this.updatecheck('location', 'Central City')} /> <label htmlFor="Central City">Central City</label></li>
                                                <li><input id="East City" type="checkbox" name="location" value="East City" onChange={this.updatecheck('location', 'East City')} /> <label htmlFor="East City">East City</label></li>
                                                <li><input id="Papaya Island" type="checkbox" name="location" value="Papaya Island" onChange={this.updatecheck('location', 'Papaya Island')} /> <label htmlFor="Papaya Island">Papaya Island</label></li>
                                                <li><input id="West City" type="checkbox" name="location" value="West City" onChange={this.updatecheck('location', 'West City')} /> <label htmlFor="West City">West City</label></li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="filter-block container">
                                            <h4 className="filter-block-header">Price:</h4>
                                            <ul className="ks-cboxtags">
                                                <li><input id="1" type="checkbox" name="price" value="1" onChange={this.updatecheck('price', '1')} /> <label htmlFor="1">1</label></li>
                                                <li><input id="2" type="checkbox" name="price" value="2" onChange={this.updatecheck('price', '2')} /> <label htmlFor="2">2</label></li>
                                                <li><input id="3" type="checkbox" name="price" value="3" onChange={this.updatecheck('price', '3')} /> <label htmlFor="3">3</label></li>
                                                <li><input id="4" type="checkbox" name="price" value="4" onChange={this.updatecheck('price', '4')} /> <label htmlFor="4">4</label></li>
                                                <li><input id="5" type="checkbox" name="price" value="5" onChange={this.updatecheck('price', '5')} /> <label htmlFor="5">5</label></li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <div className="filter-block container">
                                            <h4 className="filter-block-header">Rating:</h4>
                                            <ul className="ks-cboxtags">
                                                <li><input id="1r" type="checkbox" name="rating" value="1" onChange={this.updatecheck('rating', '1')} /> <label htmlFor="1r">1</label></li>
                                                <li><input id="2r" type="checkbox" name="rating" value="2" onChange={this.updatecheck('rating', '2')} /> <label htmlFor="2r">2</label></li>
                                                <li><input id="3r" type="checkbox" name="rating" value="3" onChange={this.updatecheck('rating', '3')} /> <label htmlFor="3r">3</label></li>
                                                <li><input id="4r" type="checkbox" name="rating" value="4" onChange={this.updatecheck('rating', '4')} /> <label htmlFor="4r">4</label></li>
                                                <li><input id="5r" type="checkbox" name="rating" value="5" onChange={this.updatecheck('rating', '5')} /> <label htmlFor="5r">5</label></li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <button className="clear-filters" onClick={this.clearFilters}>Clear Filters</button>
                                    </div>
                                </section>
                                <PlaceIndex places={this.props.places} loading={this.props.loading} />
                            </main>
                        )} />
                        <ProtectedRoute exact path="/places/new" component={PlaceFormContainer} />
                        <Route path="/places/:id" component={PlaceShowContainer} />
                        <Route path="/users/:id" component={UserShowContainer} />
                        <ProtectedRoute path="/reviews/new/:id" component={ReviewFormContainer} />
                        <AuthRoute path="/login" component={LoginFormContainer} />
                        <AuthRoute path="/signup" component={SignupFormContainer} />
                        <ProtectedRoute path="/photos/new/:id" component={PhotoFormContainer} />
                    </Switch>
                    </div>
                    
                </div>
        )
    }
}

export default withRouter(Search);