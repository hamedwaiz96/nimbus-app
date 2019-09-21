import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        if(this.props.currentUser){
            let url = `/users/${this.props.id}`
            return(
                <nav className="logged-in">
                    <p>Hello, <Link to={url}>{this.props.currentUser.username}</Link>!</p>
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