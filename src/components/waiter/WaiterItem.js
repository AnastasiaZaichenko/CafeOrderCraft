import { WaiterItemBtn } from "./";

const WaiterItem = ({ waiter }) => {
  return (
    <li key={waiter.id}>
      <p>{waiter.firstName}</p>
      <p>{waiter.phone}</p>
      <WaiterItemBtn waiter={waiter} />
    </li>
  );
};

export default WaiterItem;
