import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import transactionReducer from './transaction/transaction.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  transaction: transactionReducer,
});

export default persistReducer(persistConfig, rootReducer);
