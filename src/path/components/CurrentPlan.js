import React, { useEffect, useState } from "react";
import "./CurrentPlan.css";
import "../../index.css";
import { connect } from "react-redux";
import addData from "../../reducers/actions";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "./Modal";

function CurrentPlan(props) {
  let history = useHistory();
  let [show, createModal] = useState(false);

  return (
    <div className="current_plan_container">
      <span className="current_plan_label">الخطة الحالية</span>
      <h5 className="current_plan_speed">سرعة سوبر 2 -(غير محدوده)</h5>
      <div className="current_plan_cost_content">
        <span className="current_plan_cost_label"> :تكلفة التجديد</span>
        <h4 className="current_plan_cost_num">{props.content.balance}</h4>
        <span> جنيه</span>
      </div>
      <div className="current_plan_btns_deta">
        <span className="current_deta">
          تاريخ التجديد: 26-12-2021, 26 أيام متبقية
        </span>
        <div className="btns_current_plan">
          <button className="btn btn-sm change_plan_btn"> تغيير الخطة</button>
          <button
            className="btn btn-sm subscription_renewal_btn"
            onClick={() => createModal(!show)}
          >
            تجديد الاشتراك
          </button>
          {show === true ? (
            <Modal closeButton={() => createModal(false)} />
          ) : null}
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
)(CurrentPlan);
