import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { adddata } from "./context/ContextProvider";
import "./App.css";
import CloseIcon from "@mui/icons-material/Close";

const Register = () => {
  const { udata, setUdata } = useContext(adddata);
  const history = useHistory();

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
    fees: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { name, email, work, add, mobile, desc, age, fees } = inpval;

    const res = await fetch("http://localhost:8003/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        add,
        mobile,
        desc,
        age,
        fees,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      history.push("/");
      setUdata(data);
      console.log("data added");
    }
  };

  return (
    <div
      className="container col-xl-6"
      style={{
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <NavLink to="/">
        <button className=" close btn btn-light" style={{ marginTop: 10 }}>
          <CloseIcon />
        </button>
      </NavLink>
      <h5 className="head" style={{ fontSize: 25 }}>
        Add New Student
      </h5>
      <form className="mt-1">
        <div className="row">
          {/* <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div> */}
          <div className="row">
            <div class="col-md-6 mb-3">
              {/* <label for="form3Example1m" class="form-label">
                Name
              </label> */}
              <input
                type="text"
                value={inpval.name}
                onChange={setdata}
                name="name"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              />
            </div>
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Sex
              </label> */}
              <input
                type="text"
                value={inpval.email}
                onChange={setdata}
                name="email"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row">
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Age
              </label> */}
              <input
                type="number"
                max="65"
                min="18"
                value={inpval.age}
                onChange={setdata}
                name="age"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Age"
              />
            </div>
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Mobile
              </label> */}
              <input
                type="number"
                value={inpval.mobile}
                onChange={setdata}
                name="mobile"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                BloodGroup
              </label> */}
              <input
                type="text"
                value={inpval.work}
                onChange={setdata}
                name="work"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Work"
              />
            </div>
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                City
              </label> */}
              <input
                type="text"
                value={inpval.fees}
                onChange={setdata}
                name="fees"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Fees Status"
              />
            </div>
          </div>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div>
          <div className="row">
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Description
              </label> */}
              <textarea
                name="desc"
                value={inpval.desc}
                onChange={setdata}
                className="form-control"
                id=""
                cols="30"
                rows="3"
                placeholder="Available slots : 6-7 , 7-8 , 8-9 "
              ></textarea>
            </div>
            <div class="col-md-6 mb-3">
              {/* <label for="exampleInputPassword1" class="form-label">
                Description
              </label> */}
              <textarea
                name="add"
                value={inpval.add}
                onChange={setdata}
                className="form-control"
                id=""
                cols="30"
                rows="3"
                placeholder="Address"
              ></textarea>
            </div>
          </div>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto" }}
          ></div>
          <button type="submit" onClick={addinpdata} class="btn btn-primary">
            Submit
          </button>
          <div
            classname="container ml-5"
            style={{ padding: 10, overflow: "auto", marginBottom: 10 }}
          ></div>
        </div>
      </form>
    </div>
  );
};
export default Register;
