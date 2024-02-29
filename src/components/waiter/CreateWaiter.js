import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { save, fetchOneWaiter } from "../../store/actions/waiter";
import { selectWaiterEdit } from "../../store/selectors";
import { Loading, ModalSaccecfullyCompleted, ButtonOnSubmit } from "../ui";
import { schemaForValidationWaiter } from "../ui/ValidationSchemes";
const CreateWaiter = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const waiterEdit = useSelector(selectWaiterEdit);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: waiterEdit?.firstName,
      phone: waiterEdit?.phone,
    },
    resolver: yupResolver(schemaForValidationWaiter),
  });

  useEffect(() => {
    if (id && !waiterEdit?.id) {
      dispatch(fetchOneWaiter(id));
    }
  }, [dispatch, id, waiterEdit]);

  useEffect(() => {
    if (waiterEdit?.firstName !== undefined) {
      setValue("firstName", waiterEdit.firstName);
      setValue("phone", waiterEdit.phone);
    }
  }, [waiterEdit, setValue]);

  const onSubmit = (data) => {
    const waiter = {
      ...waiterEdit,
      firstName: data.firstName,
      phone: data.phone,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">Name</label>
          <input id="firstName" type="text" {...register("firstName")} />
          <p> {errors.firstName?.message}</p>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text" {...register("phone")} />
          <p> {errors.phone?.message}</p>
        </div>
      </form>
      <ButtonOnSubmit onSubmit={handleSubmit(onSubmit)} />
      {isModalOpen && <ModalSaccecfullyCompleted closeModal={closeModal} />}
      {!isModalOpen && (
        <div>
          <button onClick={closeModal}>Return</button>
        </div>
      )}
    </div>
  );
};
export default CreateWaiter;
