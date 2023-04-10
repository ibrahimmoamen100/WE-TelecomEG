import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { logo } from "../../img/logo.png";
import { connect } from "react-redux";
import addData from "../../reducers/actions";
const PortalDemo = document.getElementById("portal");

const Modal = (props) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {};
  // }

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        {/* <img src={logo} alt="" /> */}
        <h4>تأكيد تجديد الباقة</h4>

        <span>أنت على وشك تجديد باقة الخط الخاص بك</span>
        <h5>{props.content.num}</h5>
        <span>رسوم التجديد 210.00 جنيه</span>
        <span>هل تريد المتابعة؟</span>

        <div className="btns-container pt-3">
          <button
            className="btn btn-primary yes-btn"
            onClick={props.closeButton}
          >
            نعم
          </button>
          <button className="p-1 no-btn" onClick={props.closeButton}>
            لا
          </button>
        </div>
      </div>
    </div>,
    PortalDemo
  );
};

export default connect(
  (state) => {
    return { content: state };
  },
  { addData }
)(Modal);
