import { connect } from 'react-redux';
import SignUp from './SignUp';
import { fetchSignUpUser } from './actions';

const mapStateToProps = state => ({
  users: state.users?.list || [],
  pending: state.users?.pending || false,
  error: state.users?.error
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: (userData) => dispatch(fetchSignUpUser(userData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
