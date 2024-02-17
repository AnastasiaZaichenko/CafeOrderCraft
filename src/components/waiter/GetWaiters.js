import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWaiter } from "../../store/selectors";
import { fetchWaiters } from "../../store/actions/waiter";
import { WaiterItem } from "./";

const GetWaiters = () => {
  const list = useSelector(selectWaiter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWaiters());
  }, [dispatch]);

  const waiterList = list.map((waiter) => (
    <WaiterItem key={waiter.id} waiter={waiter} />
  ));

  return <ul>{waiterList}</ul>;
};

export default GetWaiters;
