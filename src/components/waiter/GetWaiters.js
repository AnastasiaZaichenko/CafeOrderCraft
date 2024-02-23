import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectWaiter } from "../../store/selectors";
import { fetchWaiters } from "../../store/actions/waiter";
import { WaiterItem } from "./";
import { clearWaiterEdit } from "../../store/actions/waiter";
import { ButtonsWhoYouAre } from "../ui";

const GetWaiters = () => {
  const list = useSelector(selectWaiter);
  const dispatch = useDispatch();

  const [isEmployee, setIsEmployee] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    dispatch(fetchWaiters());
  }, [dispatch]);

  const onEmployeeBtn = () => {
    setIsEmployee(true);
    setIsGuest(false);
  };
  const onGuestBtn = () => {
    setIsGuest(true);
    setIsEmployee(false);
  };

  const waiterList = list.map((waiter) => (
    <WaiterItem
      key={waiter.id}
      waiter={waiter}
      isEmployee={isEmployee}
      isGuest={isGuest}
    />
  ));

  const clear = () => {
    dispatch(clearWaiterEdit());
  };

  return (
    <>
      <div>
        <ButtonsWhoYouAre
          onEmployeeBtn={onEmployeeBtn}
          onGuestBtn={onGuestBtn}
        />
        {isEmployee && (
          <button onClick={clear}>
            <Link to="/order-craft/waiter/create">Create </Link>
          </button>
        )}
      </div>
      <ul>{waiterList}</ul>
    </>
  );
};

export default GetWaiters;
