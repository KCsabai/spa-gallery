import { connect } from 'react-redux'
import Users from './Users'
import { fetchUsers } from './actions'

const mapStateToProps = state => ({
  users: state.users?.list || [],
  pending: state.users?.pending || false,
  error: state.users?.error
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
