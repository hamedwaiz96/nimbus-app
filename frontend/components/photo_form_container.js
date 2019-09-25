import {connect} from 'react-redux';
import PhotoForm from './photo_form';
import {createPhoto} from '../actions/photo_actions';
import {fetchPlaces} from '../actions/place_actions';

const mapStateToProps = (state, ownProps) => {
    let place_id = ownProps.match.params.id
    return({
        place_id,
        places: state.entities.places,
        user_id: state.session.id,
        errors: state.errors.regular
})
};

const mapDispatchToProps = dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    createPhoto: (photo) => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);