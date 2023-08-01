import React, { useState } from "react";
import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function UserList() {
    const [data,setData] = useState(userRows);
    const handleDelete = (id)=>{
        setData(data.filter((item)=>item.id!==id))
    }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="user" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 180,
    },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userListEditBtn">Edit</button>
            </Link>

            <DeleteOutline className="userListDel" onClick={()=>handleDelete(params.row.id)}/>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
