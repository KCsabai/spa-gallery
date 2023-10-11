import { connect } from 'react-redux';
import Layout from './Layout';
import { AUTH_ACTIONS } from '../../auth/sign-in/actions';


const mapStateToProps = state => ({
   authUser: state.auth?.user,
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: AUTH_ACTIONS.LOGOUT }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
