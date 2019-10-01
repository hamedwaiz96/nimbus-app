import {connect} from 'react-redux';
import PhotoForm from './photo_form';
import {createPhoto} from '../actions/photo_actions';
import {fetchPlaces, receiveErrors} from '../actions/place_actions';

const mapStateToProps = (state, ownProps) => ({
        place_id: ownProps.place_id,
        places: state.entities.places,
        user_id: state.session.id,
        errors: state.errors.regular
})

const mapDispatchToProps = dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);