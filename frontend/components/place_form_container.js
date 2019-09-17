import {connect} from 'react-redux';
import PlaceForm from './place_form';
import {createPlace} from '../actions/place_actions';

const mapStateToProps = state => ({
    user_id: state.session.id
});

const mapDispatchToProps = dispatch =>({
    createPlace: (place) => dispatch(createPlace(place))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceForm);