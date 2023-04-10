import React from "react";
import "./OverViewDetails.css";
import "../../index.css";
import { connect } from "react-redux";
import addData from "../../reducers/actions";
function OverViewDetails(props) {
  return (
    <div className="overview_details_container">
      <div className="overview_details_phoneN">
        <span className="overview_num_label"> :رقم الخدمة</span>
        <h5 className="overview_number"> {props.content.num}</h5>
      </div>
      <span className="overview_details_q">هل تريد إدارة رقم آخر؟​</span>
      <button className="btn change_number">تغيير رقم الخدمة</button>
    </div>
  );
}

export default connect(
  (state) => {
    return { content: state };
  },
  { addData }
)(OverViewDetails);
