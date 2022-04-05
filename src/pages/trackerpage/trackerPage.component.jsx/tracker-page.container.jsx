import { createStructuredSelector } from 'reselect';
import { selectIsTransactionsFetching } from '../../../redux/transaction/transaction.selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';

import TrackerPage from './tracker-page.component';
import WithSpinner from '../../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsTransactionsFetching,
});

const TrackerPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(TrackerPage);

export default TrackerPageContainer;
