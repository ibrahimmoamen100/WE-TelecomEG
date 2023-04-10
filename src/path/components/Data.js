import React, { useEffect, useLayoutEffect } from "react";
import "./Data.css";
import "../../index.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import addData from "../../reducers/actions";

function Data(props) {
  let histroy = useHistory();
  return (
    <div className="data_container">
      <h4> مرحبا, {props.content.name}</h4>
      <div className="data_details_container">
        <div className="user_data">
          <span>انت الان تدير رقم:</span>
          <select className="form-select w-auto" id="inputGroupSelect01">
            <option value="1">{props.content.num}</option>
          </select>
          <button className="btn btn-primary btn-sm manage_account_btn mt-4 px-3 py-1">
            إدارة حسابك
          </button>
        </div>
        <div className="kuota_data">
          <span className="current_bunch">باقتك الحالية</span>
          <h4 className="kuota_details">سرعة سوبر 2 -(غير محدودة)</h4>
          <div className="kuota_btns">
            <Link
              to="/Home"
              className="btn btn-primary btn-sm change_btn mt-3 px-4 py-1"
            >
              تغيير
            </Link>
            <Link to="/Home" className="details_link  mt-3">
              تفاصيل
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => {
    return { content: state };
  },
  { addData }
)(Data);
