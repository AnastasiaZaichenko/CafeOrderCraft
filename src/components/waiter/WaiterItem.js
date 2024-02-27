import { WaiterItemBtn } from "./";
import style from "./WaiterItem.module.css";
const WaiterItem = ({ waiter, isEmployee, isGuest }) => {
  return (
    <li key={waiter.id} className={style.waiterList_box}>
      <div className={style.avatar_box}>
        <img className={style.avatar} src={waiter.image} alt={waiter.name} />
      </div>
      <div>
        <p>{waiter.firstName}</p>
        <p>{waiter.phone}</p>
      </div>
      <WaiterItemBtn
        waiter={waiter}
        isEmployee={isEmployee}
        isGuest={isGuest}
      />
    </li>
  );
};

export default WaiterItem;
