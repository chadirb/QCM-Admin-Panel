import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  let data;

  //temporary


  switch (type) {
    case "user":
      data = {
        title: "STUDENTS",
        isMoney: false,
        link: "See all students",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Languages",
        isMoney: false,
        link: "View all languages",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <Link to="/languages" style={{ textDecoration: "none" }}>
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            100
          </span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />

          </div>
          {data.icon}
        </div>
      </div>
    </Link>
  );
};

export default Widget;
