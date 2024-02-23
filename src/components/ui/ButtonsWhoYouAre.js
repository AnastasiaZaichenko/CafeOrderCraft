const ButtonsWhoYouAre = ({ onEmployeeBtn, onGuestBtn }) => {
  return (
    <div>
      <button onClick={onEmployeeBtn}>I am an employee</button>
      <button onClick={onGuestBtn}>I am a guest</button>
    </div>
  );
};

export default ButtonsWhoYouAre;
