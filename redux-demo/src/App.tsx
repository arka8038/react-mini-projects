import CreateCustomer from "./features/customers/CreateCustomer.tsx";
import Customer from "./features/customers/Customer.tsx";
import AccountOperations from "./features/accounts/AccountOperations.tsx";
import BalanceDisplay from "./features/accounts/BalanceDisplay.tsx";
import { useSelector } from "react-redux";

function App() {
  const fullName = useSelector((store: { customer: { fullName: string } }) => store.customer.fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === ''
        ? (
          <CreateCustomer />
        )
        : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )
      }
    </div>
  );
}

export default App;
