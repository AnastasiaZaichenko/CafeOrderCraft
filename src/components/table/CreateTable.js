import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { save, fetchOneTable } from "../../store/actions/table";
import { selectTableEdit } from "../../store/selectors/index";
import { ButtonOnSubmit, Loading, ModalSaccecfullyCompleted } from "../ui";

const CreateTable = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tableEdit = useSelector(selectTableEdit);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [number, setTableNumber] = useState("");

  useEffect(() => {
    if (id && !tableEdit?.id) {
      dispatch(fetchOneTable(id));
    }
  }, [dispatch, id, tableEdit]);

  useEffect(() => {
    if (tableEdit?.number !== undefined) {
      setTableNumber(tableEdit.number);
    } else {
      setTableNumber("");
    }
  }, [tableEdit]);

  const onTableChange = (e) => {
    setTableNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const table = {
      ...tableEdit,
      number,
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
      <form onSubmit={onSubmit}>
        <label htmlFor="table">Table №</label>
        <input id="table" type="text" value={number} onChange={onTableChange} />
      </form>
      <ButtonOnSubmit onSubmit={onSubmit} />
      {isModalOpen && <ModalSaccecfullyCompleted closeModal={closeModal} />}
    </div>
  );
};

export default CreateTable;
