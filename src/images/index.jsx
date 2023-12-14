import { connect } from 'react-redux'
import Images from './Images'
import { fetchImages, imageDelete, imagesUpload } from './actions'

const mapStateToProps = state => ({
  images: state.images?.list || [],
  pending: state.images?.pending || false,
  error: state.images?.error
})

const mapDispatchToProps = dispatch => ({
  imagesUpload: (data) => dispatch(imagesUpload(data)),
  fetchImages: () => dispatch(fetchImages()),
  imageDelete: (data) => dispatch(imageDelete(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images)
