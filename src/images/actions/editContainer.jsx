import { connect } from 'react-redux';
import EditImage from './Edit';
import { fetchImage, updateSelected, imageUpdate } from '../actions';

const mapStateToProps = state => ({
  image: state.images?.selected || null,
  pending: state.images?.pending || false,
  error: state.images?.error,
  updatedSuccessfully: state.images?.success,
})

const mapDispatchToProps = dispatch => ({
  fetchImage: (id) => dispatch(fetchImage(id)),
  updateSelected: (data) => dispatch(updateSelected(data)),
  imageUpdate: (imageId, data) => dispatch(imageUpdate(imageId, data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditImage)
