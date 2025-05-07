// ------------------------------------
// 1. Import Redux Core Functions
// ------------------------------------
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
