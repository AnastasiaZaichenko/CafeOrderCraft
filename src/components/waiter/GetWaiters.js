import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWaiter } from "../../store/selectors";
import { fetchWaiters } from "../../store/actions/waiter";
import { WaiterItem } from "./";
import { clearWaiterEdit } from "../../store/actions/waiter";
import { ButtonsWhoYouAre, ButtonAddNewItem, ButtonTakeaway } from "../ui";
import style from "./GetWaiters.module.css";

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

  const path = "/order-craft/waiter/create";
  const word = "waiter";

  return (
    <>
      <div>
        <ButtonsWhoYouAre
          onEmployeeBtn={onEmployeeBtn}
          onGuestBtn={onGuestBtn}
          isEmployee={isEmployee}
          isGuest={isGuest}
        />
        {isGuest && <ButtonTakeaway />}
        {isEmployee && (
          <ButtonAddNewItem clear={clear} path={path} word={word} />
        )}
      </div>
      <ul className={style.waiter_list}>{waiterList}</ul>
    </>
  );
};

export default GetWaiters;
