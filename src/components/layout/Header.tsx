import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watch-list">WatchList</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
