import { connect } from 'react-redux';
import SignUp from './Signup';
import { signUpUser, } from './actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  signUp: (userData) => dispatch(signUpUser(userData)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
