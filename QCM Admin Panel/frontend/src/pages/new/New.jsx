import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function NewLanguage(params) {
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const [setError] = useState('');

  const [form, setForm] = useState({
    nom: "",
    description: "",
    score: ""
  });

  function handleChange(e) {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const language = {
      nom: form.nom,
      description: form.description,
      score: form.score
    };
    try {
      const response = await axios.post('/api/language', language);
      if (response.status === 201) {
        console.log('language added');
        navigate('/languages');
      } else {
        setError('Error!');
      }
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <div className="new">
      <Sidebar />

      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Language</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="textfield">

                <TextField
                  name="nom"
                  value={form.nom}
                  onChange={(e) => handleChange(e)}
                  label="name"
                  variant="outlined"
                  color="success"
                />
                <TextField
                  name="score"
                  value={form.score}
                  onChange={(e) => handleChange(e)}
                  label="Score"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  color="success"
                />
                <TextField
                  name="description"
                  value={form.description}
                  onChange={(e) => handleChange(e)}
                  label="Description"
                  placeholder="Description"
                  color="success"
                  multiline
                  fullWidth
                />

              </div>
              <button>ADD</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NewLanguage;
