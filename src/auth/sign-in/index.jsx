import { connect } from 'react-redux';
import SignIn from './SignIn';
import { signInUser, } from './actions';

const mapStateToProps = state => ({
    authUser: state.auth?.user,
})

const mapDispatchToProps = dispatch => ({
  signIn: (userData) => dispatch(signInUser(userData)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
