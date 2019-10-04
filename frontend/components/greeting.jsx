import React from 'react';
import {Link} from 'react-router-dom';
import login_form_container from './login_form_container';

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.handleDetails = this.handleDetails.bind(this);
    }

    handleDetails(){
        $('.logged-in-details-container').toggle();
    }

    render(){
        if(this.props.currentUser){
            let shortened_name;
            let url = `/users/${this.props.id}`
            if(this.props.currentUser.username.length >= 14){
                shortened_name = this.props.currentUser.username.slice(0, 12) + "..."
            } else {
                shortened_name = this.props.currentUser.username
            }
            return(
                <nav className="logged-in">
                    {/* <p>Hello, <Link className="logged-in-username" to={url}>{this.props.currentUser.username}</Link>!</p>
                    <button onClick={this.props.logout}>Logout</button> */}
                    <button className="user-button no-highlight" onClick={this.handleDetails}>
                        <img src={this.props.currentUser.image} alt="" height="35" width="35" />
                        <span className="user-button-arrow"><i className="fa fa-angle-down"></i></span>
                    </button>
                    <div className="logged-in-details-container">
                        <div className="logged-in-details">
                            <span className="details-arrow"></span>
                            <div className="logged-in-details-user">
                                <Link to={url}><img src={this.props.currentUser.image} alt="" height="35" width="35" /></Link>
                                <div className="logged-in-details-show">
                                    <p onClick={this.handleDetails}><Link className="logged-in-username" to={url}>{shortened_name}</Link></p>
                                    <span className="fa fa-star review-count"> {this.props.currentUser.review_count} reviews</span>
                                    <span className="fa fa-camera photo-count "> {this.props.currentUser.photo_count} photos</span>
                                </div>
                            </div>
                            <ul className="logged-in-details-list">
                                <li onClick={this.props.logout}>Logout</li>
                                {/* <li></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return(
                <nav className="logged-out">
                    <Link className="signup" to="/signup">Signup</Link>
                    <Link className="login" to="/login">Login</Link>
                </nav>
            )
        }
    }
}

export default Greeting;