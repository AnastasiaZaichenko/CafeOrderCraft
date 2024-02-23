import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div>NotFound</div>
      <button>
        <Link to="/"> Return to Home Page</Link>
      </button>
    </div>
  );
};
export default NotFound;
