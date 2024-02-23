import { WaiterItemBtn } from "./";

const WaiterItem = ({ waiter, isEmployee, isGuest }) => {
  return (
    <li key={waiter.id}>
      <p>{waiter.firstName}</p>
      <p>{waiter.phone}</p>
      <WaiterItemBtn
        waiter={waiter}
        isEmployee={isEmployee}
        isGuest={isGuest}
      />
    </li>
  );
};

export default WaiterItem;
