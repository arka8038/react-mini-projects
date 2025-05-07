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

interface UpdateNameAction {
  type: 'customer/updateName';
  payload: {
    fullName: string;
    nationalID: string;
  };
}

type CustomerAction = CreateCustomerAction | UpdateNameAction;

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

    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
};

// Customer Action Creator
export const createCustomer = (
  fullName: string,
  nationalID: string
): CreateCustomerAction => ({
  type: 'customer/createCustomer',
  payload: { fullName, nationalID },
});

export const updateName = (fullName: string): UpdateNameAction => ({
  type: 'customer/updateName',
  payload: { fullName, nationalID: '' },
});

export default customerReducer;
