import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner =
  (WrappedComponent) =>
  ({ isFetching, ...otherProps }) => {
    return isFetching ? <Spinner /> : <WrappedComponent />;
  };

export default WithSpinner;
