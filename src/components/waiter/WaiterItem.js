import { WaiterItemBtn } from "./";
import style from "./WaiterItem.module.css";

const WaiterItem = ({ waiter, whoYouAre }) => {
  return (
    <li key={waiter.id} className={style.waiterList_box}>
      <div className={style.avatar_box}>
        <img className={style.avatar} src={waiter.image} alt={waiter.name} />
      </div>
      <div>
        <p>{waiter.firstName}</p>
        <p>{waiter.phone}</p>
      </div>
      <WaiterItemBtn waiter={waiter} whoYouAre={whoYouAre} />
    </li>
  );
};

export default WaiterItem;
