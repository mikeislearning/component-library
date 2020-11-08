import { connect } from 'react-redux';
import { postFeedback } from 'app/actions';

import ModalProvider from './ModalProvider';

const mapStateToProps = (state) => ({
  error: state.feedback.error,
  isLoading: state.feedback.loading,
  isSubmitted: state.feedback.data,
});
export default connect(
  mapStateToProps,
  { postFeedback }
)(ModalProvider);
