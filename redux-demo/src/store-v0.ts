// ------------------------------------
// 1. Import Redux Core Functions
// ------------------------------------
import { createStore, combineReducers } from 'redux';

// ------------------------------------
// 2. Account Feature
// ------------------------------------

// 2.1 Account Initial State
const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

// 2.2 Account Types
interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
}

interface DepositAction {
  type: 'account/deposit';
  payload: number;
}

interface WithdrawAction {
  type: 'account/withdraw';
  payload: number;
}

interface RequestLoanAction {
  type: 'account/requestLoan';
  payload: {
    amount: number;
    purpose: string;
  };
}

interface PayLoanAction {
  type: 'account/payLoan';
}

type AccountAction =
  | DepositAction
  | WithdrawAction
  | RequestLoanAction
  | PayLoanAction;

// 2.3 Account Reducer
const accountReducer = (
  state: AccountState = accountInitialState,
  action: AccountAction
): AccountState => {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        balance: state.balance + action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case 'account/payLoan':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: '',
      };
    default:
      return state;
  }
};

// ------------------------------------
// 3. Customer Feature
// ------------------------------------

// 3.1 Customer Initial State
const customerInitialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

// 3.2 Customer Types
interface CustomerState {
  fullName: string;
  nationalID: string;
  createdAt: string;
}

interface CreateCustomerAction {
  type: 'customer/createCustomer';
  payload: {
    fullName: string;
    nationalID: string;
  };
}

type CustomerAction = CreateCustomerAction;

// 3.3 Customer Reducer
const customerReducer = (
  state: CustomerState = customerInitialState,
  action: CustomerAction
): CustomerState => {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: new Date().toISOString(),
      };
    default:
      return state;
  }
};

// ------------------------------------
// 4. Combine Reducers to Create Root Reducer
// ------------------------------------
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// ------------------------------------
// 5. Create Redux Store with Combined Reducers
// ------------------------------------
const store = createStore(rootReducer);

// ------------------------------------
// 6. Action Creators for Both Features
// ------------------------------------

// Account Action Creators
const deposit = (amount: number): DepositAction => ({
  type: 'account/deposit',
  payload: amount,
});

const withdraw = (amount: number): WithdrawAction => ({
  type: 'account/withdraw',
  payload: amount,
});

const requestLoan = (amount: number, purpose: string): RequestLoanAction => ({
  type: 'account/requestLoan',
  payload: { amount, purpose },
});

const payLoan = (): PayLoanAction => ({
  type: 'account/payLoan',
});

// Customer Action Creator
const createCustomer = (
  fullName: string,
  nationalID: string
): CreateCustomerAction => ({
  type: 'customer/createCustomer',
  payload: { fullName, nationalID },
});

// ------------------------------------
// 7. Dispatch Actions - Usage Example
// ------------------------------------
store.dispatch(deposit(1000));
store.dispatch(requestLoan(2000, 'home renovation'));
store.dispatch(createCustomer('John Doe', '123456789'));
console.log('Final State:', store.getState());
