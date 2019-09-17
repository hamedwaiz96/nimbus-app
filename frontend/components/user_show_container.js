import {connect} from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
    id: parseInt(ownProps.match.params.id),
    user: state.entities.users[parseInt(ownProps.match.params.id)],
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);