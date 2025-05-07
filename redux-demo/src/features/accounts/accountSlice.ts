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

// Account Action Creators
export const deposit = (amount: number): DepositAction => ({
  type: 'account/deposit',
  payload: amount,
});

export const withdraw = (amount: number): WithdrawAction => ({
  type: 'account/withdraw',
  payload: amount,
});

export const requestLoan = (
  amount: number,
  purpose: string
): RequestLoanAction => ({
  type: 'account/requestLoan',
  payload: { amount, purpose },
});

export const payLoan = (): PayLoanAction => ({
  type: 'account/payLoan',
});

export default accountReducer;
