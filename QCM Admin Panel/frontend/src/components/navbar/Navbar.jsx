import "./navbar.scss";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
//import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Navbar = () => {
  // const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div> */}
        {/* <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div> */}
        {/* <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img
              src="https://scontent.ftun2-1.fna.fbcdn.net/v/t39.30808-6/259086050_3089714801273480_2142272668322398249_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=174925&_nc_ohc=pk6bQE2XU7wAX-M7FDn&_nc_ht=scontent.ftun2-1.fna&oh=00_AT8iThZ-QLzy2p7D-gzYW4TJTonEryhvsoAg5fYSslA6Ww&oe=627FBCA2"
              alt=""
              className="avatar"
            />
          </div> */}
        {/* </div> */}
      </div>
    </div >
  );
};

export default Navbar;
