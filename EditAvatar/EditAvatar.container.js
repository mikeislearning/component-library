import { connect } from 'react-redux';
import { createImage } from 'app/actions';

import EditAvatar from './EditAvatar';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser?.data,
  isLoading: state.images.loading,
});

export default connect(
  mapStateToProps,
  { createImage }
)(EditAvatar);
