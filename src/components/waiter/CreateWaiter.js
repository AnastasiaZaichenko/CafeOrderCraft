import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { save, fetchOneWaiter } from "../../store/actions/waiter";
import { selectWaiterEdit } from "../../store/selectors";
import {
  Loading,
  ModalSaccecfullyCompleted,
  ButtonOnSubmit,
  ButtonReturn,
} from "../ui";
import { schemaForValidationWaiter } from "../ui/ValidationSchemes";
import style from "./CreateWaiter.module.css";

const CreateWaiter = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const waiterEdit = useSelector(selectWaiterEdit);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image, setImage] = useState(null);

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
      setImage(waiterEdit.image);
    }
  }, [waiterEdit, setValue, waiterEdit.image]);

  const onAvaChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
  };

  const onSubmit = (data) => {
    const waiter = {
      ...waiterEdit,
      firstName: data.firstName,
      phone: data.phone,
      image,
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
    <>
      <div
        className={`${style.form_waiter_box} ${
          isModalOpen ? style.transparent : ""
        }`}
      >
        {waiterEdit.image && (
          <div className={style.img_waiter_box}>
            <img
              className={style.img_waiter}
              src={waiterEdit.image}
              alt="Meal"
            />
          </div>
        )}
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
          <div>
            <label htmlFor="image">Add a photo:</label>
            <input type="file" id="image" onChange={onAvaChange} />
          </div>
        </form>

        <div
          className={`${style.btn_create_return_table_box} ${
            isModalOpen ? style.btn_hidden : ""
          }`}
        >
          <ButtonOnSubmit onSubmit={handleSubmit(onSubmit)} />
          {!isModalOpen && (
            <ButtonReturn closeModal={closeModal}>Return</ButtonReturn>
          )}
        </div>
      </div>
      {isModalOpen && <ModalSaccecfullyCompleted closeModal={closeModal} />}
    </>
  );
};
export default CreateWaiter;
