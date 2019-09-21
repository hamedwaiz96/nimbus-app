import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../actions/session_actions';
import {receiveErrors} from '../actions/session_actions';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);