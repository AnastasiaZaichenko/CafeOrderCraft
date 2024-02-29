import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { save, fetchOneTable } from "../../store/actions/table";
import { selectTableEdit } from "../../store/selectors/index";
import { ButtonOnSubmit, Loading, ModalSaccecfullyCompleted } from "../ui";
import { schemaForValidationTable } from "../ui/ValidationSchemes";

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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="table">Table №</label>
        <input id="table" type="text" {...register("number")} />
        <p> {errors.number?.message}</p>
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

export default CreateTable;
