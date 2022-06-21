import "./language.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import { useEffect, useState } from "react"
import { DeleteOutline, Add, RemoveRedEyeOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';
import { DataGrid } from "@mui/x-data-grid"
import { IconButton } from "@mui/material"
export default function LanguageList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const axios = require('axios').default;
    axios
      .get('/api/language')
      .then((response) => {

        setData(response.data);
        response.data.forEach(language => {
        });
      });
  }, []);
  const handleDelete = (_id) => {
    const axios = require('axios').default;
    axios.delete('/api/language/' + _id)
      .then(res => { console.log(res.data) });
    setData(data.filter((item) => item._id !== _id));
  };

  const columns = [

    { field: "nom", headerName: "Name", width: 120 },
    { field: "description", headerName: "Description", width: 800 },
    { field: "score", headerName: "Score", width: 110 },
    {
      field: "action", headerName: "Action", width: 150,
      renderCell: (params) => {
        return (
          <>

            <Link to={"/languages/" + params.row._id}>
              <RemoveRedEyeOutlined style={{ cursor: "default", color: "green",marginLeft: "30" ,marginTop:"5"}}
              />
            </Link>
            
      

            <DeleteOutline
              style={{ cursor: "default", color: "red", justifyContent: "space-between", marginLeft: "30" }}
              onClick={() =>
                Swal.fire({
                  title: 'Êtes-vous sûr?',
                  text: "Vous ne pourrez pas revenir en arrière !",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#d33',
                  cancelButtonColor: '#3085d6',
                  cancelButtonText: 'Annuler',
                  confirmButtonText: 'Supprimer'
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleDelete(params.row._id)
                    Swal.fire(
                      'Supprimé !',
                      'Votre fichier a été supprimé.',
                      'success'
                    )
                  }
                })
              }
            />

          </>
        );
      },
    },
  ];
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <center>
            <h1>Language List</h1>
          </center>
        </div>

        <div className="button">
          <Link to="/languages/new">
            <IconButton aria-label="add" variant="outlined" size="large" color="primary">
              <Add fontSize="inherit" />
            </IconButton>
          </Link>
        </div>

        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection

          getRowId={(row) => row._id}

        />



      </div>
    </div>
  );
}

