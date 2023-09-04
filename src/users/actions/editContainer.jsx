import { connect } from 'react-redux';
import EditUser from './Edit';
import { fetchUser, updateSelected, userUpdate } from '../actions';

const mapStateToProps = state => ({
  user: state.users?.selected || null,
  pending: state.users?.pending || false,
  error: state.users?.error,
  updatedSuccessfully: state.users?.success,
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateSelected: (data) => dispatch(updateSelected(data)),
  userUpdate: (data) => dispatch(userUpdate(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser)
