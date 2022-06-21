import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import { useState } from "react";
import { Container, makeStyles, TextField } from "@mui/material";





function Single() {






  const [inputField, SetInputField] = useState([
    { answer: '' },

  ])



  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">HTML</h1>
                <div className="detailItem">
                  <span className="itemKey">DESCRIPTION :</span>
                  <span className="itemValue">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, adipisci?</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Required Score :</span>
                  <span className="itemValue">80%</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Container>

              <form >
                {inputField.map((inputField, index) => (
                  <div key={index}>
                    <TextField
                      name="answer"
                      label="Answer"
                      value={inputField.answer}
                      variant="filled"
                    />

                  </div>
                ))}
              </form>
            </Container>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Questions & Answers</h1>
          <List />
        </div>
      </div>
    </div >
  );
};

export default Single;
