import React, { useEffect } from "react";
import wepay from "../../img/wepay.jpg";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../index.css";
import "./WePay.css";

function WePay() {
  useEffect(() => {
    document.title = "WePay";
  }, []);
  return (
    <div className="pay_container">
      <img src={wepay} alt="" className="wepay_img" />
      <div className="pay_content">
        <h4 className="pb-3 wepay_title">WE Pay</h4>
        <p className="">
          الأن يمكنك الإشترك فى محفظة WE الإلكترونية وأنت فى بيتك بخطوات سهلة
          وبسيطة من غير ماتروح الفرع، لتمكن عملائها من التحكم في تعاملاتهم
          الماليه
        </p>
        <Link to="/We-Pay" className="pb-1 fs-6 wepay_read_more">
          اعرف المزيد
        </Link>
      </div>
    </div>
  );
}

export default WePay;
