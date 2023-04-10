import React from "react";
import "./Footer.css";
import "../../index.css";
import { Link } from "react-router-dom";
import appstore from "../../img/appstore.png";
import googleplay from "../../img/googleplay.png";
function Footer() {
  return (
    <div className="footer_container">
      <div className="links_container">
        <Link to="">عن المصرية للاتصالات</Link>
        <Link to="">تحديد مراكز الخدمة</Link>
        <Link to="">المساعدة و الدعم </Link>
      </div>
      <div className="apps_container">
        <img src={appstore} alt="" />
        <img src={googleplay} alt="" />
      </div>
      <div className="copyright">
        <p> .حقوق النشر © 2021 المصرية للاتصالات. جميع الحقوق محفوظة</p>
      </div>
    </div>
  );
}

export default Footer;
