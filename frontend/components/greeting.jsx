import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.currentUser){
            return(
                <nav className="logged-in">
                    <p>Hello, {this.props.currentUser.username}!</p>
                    <button onClick={this.props.logout}>Logout</button>
                </nav>
            )
        } else {
            return(
                <nav className="logged-out">
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </nav>
            )
        }
    }
}

export default Greeting;