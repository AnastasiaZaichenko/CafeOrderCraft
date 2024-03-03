// import { Link } from "react-router-dom";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.about_box}>
      <p>
        The application supports both guest and employee modes. If you are an
        employee of the establishment, you have the ability to make various
        adjustments to the program, including adding, removing, and editing menu
        items. As a customer, you can easily place food orders, choose tables,
        specify waiter preferences, and conveniently receive automated invoices
        for payment.
      </p>
      <p>
        {" "}
        To start placing an order, simply follow the link "Choose a Meal."{" "}
      </p>
    </div>
  );
};

export default About;
