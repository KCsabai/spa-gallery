import { connect } from 'react-redux';
import Layout from './Layout';


const mapStateToProps = state => ({
    authUser: state.auth?.user,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
