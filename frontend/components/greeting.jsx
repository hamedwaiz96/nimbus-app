import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);
        if(this.props.currentUser){
            this.url = `/users/${this.props.id}`
        }
    }

    render(){
        if(this.props.currentUser){
            return(
                <nav className="logged-in">
                    <p>Hello, <Link to={this.url}>{this.props.currentUser.username}</Link>!</p>
                    <button onClick={this.props.logout}>Logout</button>
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