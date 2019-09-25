import React from 'react';

class PhotoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            url: "",
            place_id: this.props.place_id,
            user_id: this.props.user_id
        }
        this.props.fetchPlaces({});
        if (this.props.place_id != 'main') {
            this.place = this.props.places[parseInt(this.props.place_id)]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    errors() {
        if (this.props.errors) {
            return (
                this.props.errors.map(error => {
                    return (<li className="error" key={error}>{error}</li>);
                })
            );
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
    }

    update(key) {
        return e => {
            this.setState({ [key]: e.target.value })
        }
    }

    render(){
        return(
            <div className="photo-form-container">
                <ul className="error-list">
                    {this.errors()}
                </ul>
                <form className="photo-form" onSubmit={this.handleSubmit}>

                </form>
            </div>
        )
    }
}

export default PhotoForm;