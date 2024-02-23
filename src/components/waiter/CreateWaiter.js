import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { save, fetchOneWaiter } from "../../store/actions/waiter";
import { selectWaiterEdit } from "../../store/selectors";
import { Loading, ModalSaccecfullyCompleted, ButtonOnSubmit } from "../ui";

const CreateWaiter = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const waiterEdit = useSelector(selectWaiterEdit);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (id && !waiterEdit?.id) {
      dispatch(fetchOneWaiter(id));
    }
  }, [dispatch, id, waiterEdit]);

  useEffect(() => {
    if (waiterEdit.id && !firstName && !phone) {
      setFirstName(waiterEdit.firstName);
      setPhone(waiterEdit.phone);
    }
  }, [waiterEdit.id, firstName, phone, waiterEdit.firstName, waiterEdit.phone]);

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const waiter = {
      ...waiterEdit,
      firstName,
      phone,
    };
    dispatch(save(waiter));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(`/order-craft/waiter`);
  };

  if (id && !waiterEdit?.id) {
    return <Loading />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">Name</label>
          <input
            id="firstName"
            type="text"
            onChange={onFirstNameChange}
            value={firstName}
          ></input>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            onChange={onPhoneChange}
            value={phone}
          ></input>
        </div>
      </form>
      <ButtonOnSubmit onSubmit={onSubmit} />
      {isModalOpen && <ModalSaccecfullyCompleted closeModal={closeModal} />}
    </div>
  );
};
export default CreateWaiter;
