import {connect} from 'react-redux';
import {logout} from '../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => {
    let id = state.session.id
    return({
        id,
        currentUser: state.entities.users[id]
    })
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});;

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

