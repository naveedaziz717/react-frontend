import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="main-header">
        <h1>
          <Link to="/" className="main-title">
            Courses Dashboard
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
