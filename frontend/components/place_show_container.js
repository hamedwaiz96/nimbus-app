import {connect} from 'react-redux';
import PlaceShow from './place_show';

const mapStateToProps = (state, ownProps) => ({
    id: parseInt(ownProps.match.params.id),
    place: state.entities.places[parseInt(ownProps.match.params.id)]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow);