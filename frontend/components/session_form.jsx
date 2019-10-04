import React from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';

import {CLOUDINARY_IMAGE_URL, CLOUDINARY_PRESET} from '../util/cloudinary_info';

let ERRORS = {
    'username': "Username can't be blank",
    'password': "Password can't be blank",
    'image': "Image Upload Error",
    'password_short': 'Password is too short (6 character minimum)'
}

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            image: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
        this.file = "";
    }

    handleSubmit(e){
        e.preventDefault();
        const self = this;
        if(this.props.formType === 'login'){
            const user = Object.assign({}, this.state);
            this.props.processForm(user).then(() => {
                if (self.props.errors.length === 0) {
                    console.log(self.props.history)
                    self.props.history.goBack();
                }
            }, (err) => console.log(err));
        }
        else if ((this.state.image === "" && this.props.formType === 'signup') && (this.state.username != "" && this.state.password.length >= 6)){
            this.state.image = "https://res.cloudinary.com/nimbus-app/image/upload/v1568840851/nimbus/users/default_user.jpg";
            const user = Object.assign({}, this.state);
            this.props.processForm(user).then(() => {
                if (self.props.errors.length === 0) {
                    self.props.history.goBack();
                }
            }, (err) => console.log(err));
        } else if(this.state.username != "" && this.state.password.length >= 6 ){
            const self = this;
            let Formdata = new FormData();
            Formdata.append('file', this.file);
            Formdata.append('upload_preset', CLOUDINARY_PRESET)
            Formdata.append('folder', "nimbus/users")
            axios({
                url: CLOUDINARY_IMAGE_URL,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: Formdata
            }).then(
                (res) => {
                    self.state.image = res.data.secure_url;
                    self.props.processForm(self.state).then((whole) => {
                        self.props.history.push("/")
                    })
                },
                (err) => {
                    this.props.receiveErrors(err);
                })
            } else {
                let errors = [];
                if (this.state.password.length < 6 && this.state.password.length >= 1) {
                    errors.push(ERRORS['password_short'])
                }
                if (this.state.username === "") {
                    errors.push(ERRORS['username'])
                }
                if (this.state.password === "") {
                    errors.push(ERRORS['password'])
                }
                this.props.receiveErrors(errors)
                }   
        }

    fileChangeHandler(e) {
        this.file = e.target.files[0];
    }

    updatekey(key){
        return e => this.setState({[key]: e.target.value})
    }

    render(){
        return(
            <div className="session-form-container">
                <ul className="error-list">
                    {this.props.errors.map((err, idx) => {
                        return(
                            <li className="alert alert-danger fade" key={idx}>{err}</li>
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
                    <input type="file" onChange={this.fileChangeHandler} />
                    </label>) : ""}
                    <input type="submit" value={this.props.formType==='signup' ? 'Create Account' : 'Login'} />
                </form>
            </div>
        )
    }
};

export default withRouter(SessionForm);