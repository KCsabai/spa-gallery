import { connect } from 'react-redux'
import Users from './Users'
import { fetchUsers, userDelete } from './actions'

const mapStateToProps = state => ({
  users: state.users?.list || [],
  pending: state.users?.pending || false,
  error: state.users?.error
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  userDelete: (data) => dispatch(userDelete(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
