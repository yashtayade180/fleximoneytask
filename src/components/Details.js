import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WorkIcon from "@mui/icons-material/Work";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink, useParams, useHistory } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import "./App.css";

const Details = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const history = useHistory();

  const getdata = async () => {
    const res = await fetch(`http://localhost:8003/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      history.push("/");
    }
  };

  return (
    <div
      className="container mt-25 bg-light border border-1 mb-5 "
      // style={{ marginTop: 100, paddingLeft: 30, paddingRight: 30 }}
    >
      <NavLink to="/">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h1
        classname="headmain"
        style={{
          fontWeight: 400,
          marginTop: 10,
          textAlign: "center",
          color: "darkblue",
        }}
      >
        Welcome Back CTO!!
      </h1>
      <div
        classname="container ml-5"
        // style={{ padding: 10, marginBottom: 10, overflow: "auto" }}
      ></div>
      <Card sx={{ maxWidth: 1800 }}>
        <CardContent sx={{ paddingBottom: 10 }}>
          <div className="add_btn">
            <NavLink to={`/edit/${getuserdata._id}`}>
              {" "}
              <button className="edit btn btn-primary mx-2">
                <CreateIcon />
              </button>
            </NavLink>
            <button
              className="edit btn btn-danger"
              onClick={() => deleteuser(getuserdata._id)}
            >
              <DeleteOutlineIcon />
            </button>
          </div>
          <div className="row  ">
            <div
              className="left_view col-lg-3 col-md-6 col-3 card text-white bg-dark mb-3 ml-3"
              style={{ marginLeft: 40 }}
            >
              <img
                src="/profile.png"
                style={{
                  width: 170,
                  marginBottom: 10,
                  height: 170,
                  marginTop: 60,
                  marginLeft: 55,
                }}
                alt="profile"
              />
            </div>
            <div
              className=" centre_view col-lg-3 col-md-6 col-3 ml-5 "
              style={{ marginLeft: 50 }}
            >
              <h3 className="mt-5">
                Name: <span>{getuserdata.name}</span>
              </h3>
              <h4 className="mt-3">
                <MailOutlineIcon />
                Email: <span>{getuserdata.email}</span>
              </h4>
              <h4 className="mt-3">
                Age: <span>{getuserdata.age}</span>
              </h4>
              <h4 className="mt-3">
                <MailOutlineIcon />
                Work: <span>{getuserdata.work}</span>
              </h4>
            </div>
            <div
              className="right_view col-lg-3 col-md-3 col-6 "
              style={{ marginRight: 50, marginLeft: 60 }}
            >
              <h4 className="mt-5">
                <PhoneAndroidIcon />
                Mobile: <span>{getuserdata.mobile}</span>
              </h4>
              <h4 className="mt-3">
                Fees status: <span>{getuserdata.fees}</span>
              </h4>
              <h4 className="mt-3">
                <LocationOnIcon />
                Address: <span>{getuserdata.add}</span>
              </h4>
              <h4 className="mt-3">
                Slot : <span>{getuserdata.desc}</span>
              </h4>
            </div>
          </div>
          {/* <div
            classname="container ml-5"
            style={{ padding: 20, marginBottom: 10, overflow: "auto" }}
          ></div> */}
        </CardContent>
      </Card>
      <div
        classname="container ml-5"
        style={{ padding: 10, marginBottom: 10, overflow: "auto" }}
      ></div>
    </div>
  );
};

export default Details;
