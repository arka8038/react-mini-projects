import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store: { customer: { fullName: string } }) => store.customer.fullName);
  console.log('customer', customer);

  return <h2>👋 Welcome, {customer}</h2>; // re-render the component
}

export default Customer;
