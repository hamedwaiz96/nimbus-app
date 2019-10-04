import {connect} from 'react-redux';
import Search from './search';
import {fetchPlaces} from '../actions/place_actions'
import {getPlaces} from './selector';

const mapStateToProps = (state) => ({
    places: getPlaces(state.entities.places),
    loading: state.ui.loading.indexLoading,
    session: state.session.id
});


const mapDispatchToProps = dispatch => ({
    fetchPlaces: (filter) => dispatch(fetchPlaces(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);