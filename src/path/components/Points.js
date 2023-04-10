import React from "react";
import "./Points.css";
import "../../index.css";
import star from "../../img/star.png";

function Points() {
  return (
    <div className="points_container">
      <div className="points_title_btn">
        <h3 className="points_title">النقاط</h3>
        <button className="btn_points btn fs-6 py-0 px-3">تفاصيل النقاط</button>
      </div>
      <div className="points_details_container">
        <div className="circle_points">
          <img src={star} alt="" />
          <span>نقاط</span>
          <div className="circle_inner"></div>
          <div className="circle_content">
            <div className="points_left">
              <h2>1524</h2> <span>متبقية</span>
            </div>
          </div>
        </div>
        {/*         
        <div className="svg_circle">
          <svg
            width="120"
            height="240"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="Gradient1">
                <stop class="stop1" offset="0%" />
                <stop class="stop2" offset="50%" />
                <stop class="stop3" offset="100%" />
              </linearGradient>
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="red" />
                <stop offset="50%" stop-color="black" stop-opacity="0" />
                <stop offset="100%" stop-color="blue" />
              </linearGradient>
            </defs>

            <circle
              id="rect1"
              x="10"
              y="10"
              rx="15"
              ry="15"
              width="100"
              height="100"
            />
            <circle
              x="10"
              y="120"
              rx="15"
              ry="15"
              width="100"
              height="100"
              fill="url(#Gradient2)"
            />
          </svg>
        </div> */}
        <span className="points_usage mt-4 fs-4"> 0 متسخدمة</span>
      </div>
    </div>
  );
}

export default Points;
