import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { save, fetchOneTable } from "../../store/actions/table";
import { selectTableEdit } from "../../store/selectors/index";
import {
  ButtonOnSubmit,
  Loading,
  ModalSaccecfullyCompleted,
  ButtonReturn,
} from "../ui";
import { schemaForValidationTable } from "../ui/ValidationSchemes";
import style from "./CreateTable.module.css";

const CreateTable = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tableEdit = useSelector(selectTableEdit);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: tableEdit?.number,
    },
    resolver: yupResolver(schemaForValidationTable),
  });

  useEffect(() => {
    if (id && !tableEdit?.id) {
      dispatch(fetchOneTable(id));
    }
  }, [dispatch, id, tableEdit]);

  useEffect(() => {
    if (tableEdit?.number !== undefined) {
      setValue("number", tableEdit.number);
    }
  }, [tableEdit, setValue]);

  const onSubmit = (data) => {
    const table = {
      ...tableEdit,
      number: data.number,
    };
    dispatch(save(table));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(`/order-craft/table`);
  };

  if (id && !tableEdit?.id) {
    return <Loading />;
  }

  return (
    <>
      <div
        className={`${style.form_table_box} ${
          isModalOpen ? style.transparent : ""
        }`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="table">Table №</label>
          <input id="table" type="text" {...register("number")} />
          <p> {errors.number?.message}</p>
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

export default CreateTable;
