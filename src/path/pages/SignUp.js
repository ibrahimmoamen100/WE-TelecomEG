import React, { useState, useEffect, useCallbacks } from "react";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import "./SignUp.css";
import "../../index.css";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import addData from "../../reducers/actions";

// start components
const SignUp = (props) => {
  const history = useHistory();
  const [serviceNumber, setNumber] = useState(0);
  const [name, setName] = useState("لا يوجد");
  const [balance, setBalance] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceNum = form.querySelector(".service-num");
    const servicePass = form.querySelector(".service-pass");

    if (
      serviceNum.value.startsWith("022") &&
      serviceNum.value.length === 10 &&
      servicePass.value.length > 6
    ) {
      <Link to="/Home" />;
      history.push("/Home");
    } else {
      history.push("/");
    }
  };

  const handlePassChange = (e) => {
    const inputPass = e.target;
    setName(e.target.value);
    if (inputPass.value.length < 5) {
      inputPass.style.border = "1px solid red";
    } else {
      inputPass.style.border = "1px solid green";
    }
  };
  const handleNumChange = (e) => {
    const inputNum = e.target;
    setNumber(e.target.value);

    if (inputNum.value.startsWith("022") && inputNum.value.length === 10) {
      inputNum.style.border = "1px solid green";
    } else {
      inputNum.style.border = "1px solid red";
    }
  };
  const handleBalanceChange = (e) => {
    const inputBalance = e.target;
    setBalance(inputBalance.value);

    if (inputBalance.value.length >= 1) {
      inputBalance.style.border = "1px solid green";
    } else {
      inputBalance.style.border = "1px solid red";
    }
  };

  return (
    <div className="signup_container">
      <TopNavbar hide="hidden" />
      <Navbar hide="hidden" hideMenu="hidden" />
      <div className="signup_box container">
        <div className="signup_content">
          <h3>تسجيل الدخول</h3>
          <form action="" onSubmit={handleSubmit} onClick={props.handleClick}>
            <label htmlFor="exampleInputEmail1" className="form-label mb-0">
              رقم الخدمة
            </label>
            <input
              className="form-control mb-2 service-num"
              onChange={handleNumChange}
              placeholder="رقم الخدمة"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label id="exampleInputPassword1" className="form-label mb-0">
              اللقب | الأسم
            </label>
            <input
              type="text"
              onChange={handlePassChange}
              className="form-control mb-3 service-pass"
              id="exampleInputPassword1"
              placeholder="الاسم ثلاثي "
            />
            <label id="exampleInputBalance" className="form-label mb-0">
              المبلغ
            </label>
            <input
              type="number"
              onChange={handleBalanceChange}
              className="form-control mb-3 service-pass"
              id="exampleInputBalance"
              placeholder=" المبلغ "
            />
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              onClick={() => props.addData(serviceNumber, name, balance)}
            >
              دخول
            </button>
          </form>
        </div>
        <p>
          ادخل اي رقم بشرط ان يبدا ب 022 ولا يقل عن 10 ارقام وكلمه السر لا تقل
          عن 6 ارقام حتي يفتح الموقع لك
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default connect(
  (state) => {
    return {
      content: state,
    };
  },
  { addData }
)(SignUp);
