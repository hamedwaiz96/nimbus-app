import {connect} from 'react-redux';
import PlaceForm from './place_form';
import {createPlace, receiveErrors} from '../actions/place_actions';

const mapStateToProps = state => ({
    user_id: state.session.id,
    errors: state.errors.regular,
});

const mapDispatchToProps = dispatch =>({
    createPlace: (place) => dispatch(createPlace(place)),
    receiveErrors: (err) => dispatch(receiveErrors(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceForm);