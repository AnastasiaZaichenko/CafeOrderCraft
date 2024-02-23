const ModalSaccecfullyCompleted = ({ closeModal }) => {
  return (
    <div>
      <div>Operation completed successfully!</div>
      <button onClick={closeModal}>Return to Previous Page</button>
    </div>
  );
};
export default ModalSaccecfullyCompleted;
