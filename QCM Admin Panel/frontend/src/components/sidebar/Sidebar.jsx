import "./sidebar.scss";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import { Dashboard, ExitToApp, Language, Person, Quiz, Settings} from "@mui/icons-material";

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ISET QUIZ</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          {/* <Link to="/languages" style={{ textDecoration: "none" }}>
            <li>
              <Language className="icon" />
              <span>Languages</span>
            </li>
          </Link> */}
          <Link to="/languages" style={{ textDecoration: "none" }}>
            <li>
              <Language className="icon" />
              <span>Languages</span>
            </li>
          </Link>
          <p className="title">QUICK TOOLS</p>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <Settings className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <Link to="/isetquiz" style={{ textDecoration: "none" }}>
            <li>
              <Quiz className="icon" />
              <span>Quiz App</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li >
              <ExitToApp className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}>
        </div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
