import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Students</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={7} text={"7"} strokeWidth={5} />
        </div>
        <p className="title">Total passed exams today</p>
        <p className="amount">7</p>
        <p className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, odio.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">14</div>
            </div>
          </div>
          
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">66</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
