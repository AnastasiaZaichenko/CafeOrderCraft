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

  const [whoYouAre, setwhoYouAre] = useState("guest");

  useEffect(() => {
    dispatch(fetchWaiters());
  }, [dispatch]);

  const onEmployeeBtn = () => {
    setwhoYouAre("employee");
  };
  const onGuestBtn = () => {
    setwhoYouAre("guest");
  };

  const waiterList = list.map((waiter) => (
    <WaiterItem key={waiter.id} waiter={waiter} whoYouAre={whoYouAre} />
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
          whoYouAre={whoYouAre}
        />
        {whoYouAre === "guest" && <ButtonTakeaway />}
        {whoYouAre === "employee" && (
          <ButtonAddNewItem clear={clear} path={path} word={word} />
        )}
      </div>
      <ul className={style.waiter_list}>{waiterList}</ul>
    </>
  );
};

export default GetWaiters;
