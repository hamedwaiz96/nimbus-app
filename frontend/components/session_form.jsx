import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            image: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.image === ""){
            this.state.image = "https://res.cloudinary.com/nimbus-app/image/upload/v1568840851/nimbus/users/default_user.jpg"
        }
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            if(this.props.errors === []){
                this.props.history.push("/")
            }
        }, (err) => console.log(err));
    }

    updatekey(key){
        return e => this.setState({[key]: e.target.value})
    }

    render(){
        return(
            <div>
                <ul className="error-list">
                    {this.props.errors.map((err, idx) => {
                        return(
                            <li key={idx}>{err}</li>
                        )
                    })}
                </ul>
                <h1>{this.props.formType==='signup' ? "Signup" : "Login"} <span>or {this.props.formType==='signup' ? (<Link to="/login">Login</Link>) : (<Link to="/signup">Signup</Link>)}</span></h1>
                <form onSubmit={this.handleSubmit} className="session-form">
                    <label>
                        Username:
                    <input type="text" onChange={this.updatekey('username')} value={this.state.username} />
                    </label>
                    <label>
                        Password:
                    <input type="password" onChange={this.updatekey('password')} value={this.state.password} />
                    </label>
                    {this.props.formType === 'signup' ? (<label>
                        Profile Picture (Optional):
                    <input type="text" onChange={this.updatekey('image')} value={this.state.image} />
                    </label>) : ""}
                    <input type="submit" value={this.props.formType==='signup' ? 'Create Account' : 'Login'} />
                </form>
            </div>
        )
    }
};

export default withRouter(SessionForm);