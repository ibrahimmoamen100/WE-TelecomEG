import React, { useEffect, useState } from "react";
import "../../index.css";
import "./Navbar.css";
import logo from "../../img/TEArabic-Logo.png";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import { connect } from "react-redux";
import addData from "../../reducers/actions";
import { FaUserCircle, FaSearch, FaHome } from "react-icons/fa";

// window.$ = window.jQuery = require("jquery");

const Navbar = (props) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  let bodyy = document.querySelector("body");
  let menuList = document.querySelector(".menu_list");
  let history = useHistory();

  const [title, setTitle] = useState("نظره عامه علي الحساب");
  const [size, setSize] = useState(0);
  var w = window.innerWidth;

  window.addEventListener("resize", () => {
    setSize(w);
  });

  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    if (props.content.balance !== undefined) {
      return props.content.balance;
    } else {
      <Link to="/" />;
      history.push("/");
    }
  }, [props, history]);
  useEffect(() => {
    let menuIcon = document.querySelector(".menu_icons");
    let menuList = document.querySelector(".menu_list");
    let blackScreen = document.querySelector(".black_screen");

    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("menu_active");
      if (menuIcon.classList.contains("menu_active")) {
        menuList.style.right = "0px";
        menuList.style.display = "flex";

        blackScreen.style.opacity = "1";
        blackScreen.style.visibility = "visible";
        bodyy.style.overflowY = "hidden";
      } else {
        menuList.style.right = "-290px";
        blackScreen.style.opacity = "0";
        blackScreen.style.visibility = "hidden";
        bodyy.style.overflowY = "scroll";
      }
    });
    blackScreen.addEventListener("click", () => {
      menuList.style.right = "-290px";
      blackScreen.style.opacity = "0";
      blackScreen.style.visibility = "hidden";
      menuIcon.classList.remove("menu_active");
      bodyy.style.overflowY = "scroll";
    });

    // window.addEventListener("resize", () => {
    //   console.log(this.width);
    // });

    $("#link_one").hover(
      function () {
        $("#drop_one").fadeIn(100, function () {
          $(this).css({ display: "flex" });
        });
      },
      function () {
        $("#drop_one").fadeOut(100);
      }
    );
    $("#link_two").hover(
      function () {
        $("#drop_two").fadeIn(100, function () {
          $(this).css({ display: "flex" });
        });
      },
      function () {
        $("#drop_two").fadeOut(100);
      }
    );

    // black screen show / hide

    let linkOne = document.getElementById("link_one");
    let linkTwo = document.getElementById("link_two");

    linkOne.addEventListener("mouseenter", () => {
      blackScreen.style.opacity = "1";
      blackScreen.style.visibility = "visible";
    });
    linkOne.addEventListener("mouseleave", () => {
      blackScreen.style.opacity = "0";
      blackScreen.style.visibility = "hidden";
    });
    linkTwo.addEventListener("mouseenter", () => {
      blackScreen.style.opacity = "1";
      blackScreen.style.visibility = "visible";
    });
    linkTwo.addEventListener("mouseleave", () => {
      blackScreen.style.opacity = "0";
      blackScreen.style.visibility = "hidden";
    });
  });
  return (
    <>
      <div className="black_screen"></div>
      <div className="entire_navbar_container">
        <div
          className="menu_list"
          style={{
            display: `${props.hideMenu === "hidden" ? "none" : "flex"}`,
          }}
        >
          <div className="menu_list_container">
            <div className="user_account-container">
              <div className="user_account-num-img">
                <div className="user_account-num">0228545248</div>
                <FaUserCircle />
              </div>
              <div className="user_account-option">تسجيل الخروج</div>
            </div>
            <Link to="/">الرئيسية</Link>
            <Link to="/Home">الاستهلاك</Link>
            <Link to="/Home">الخطط والخدمات</Link>
            <Link to="/Additional">عروض وايضافات</Link>
            <Link to="/We-Pay"> WE Pay</Link>
          </div>
        </div>
        <div className="container container-s">
          <div className="navbar_container">
            {/* logo */}

            <Link to="/Home" className="logo_navbar">
              <img src={logo} className="p-3" alt="" />
            </Link>
            <div
              className="menu_icons"
              style={{
                display: `${
                  props.hideMenu === "hidden" || size >= 992 ? "none" : "flex"
                }`,
              }}
            >
              <span className="first_line"></span>
              <span className="second_line"></span>
              <span className="theard_line"></span>
            </div>

            <div
              className="nav_links"
              style={{ display: `${props.hide === "hidden" ? "none" : ""}` }}
            >
              <div className="nav_link">
                <Link to="/Home" className="active">
                  الرئيسيه
                </Link>
              </div>
              <div className="nav_link" id="link_one">
                <Link
                  to=""
                  onClick={() => {
                    setTitle("خدمات الرصيد");
                  }}
                >
                  خدمات الرصيد
                </Link>
                <div className="nav_dropdown" id="drop_one">
                  <Link to="/Home"> تفاصيل الرصيد</Link>
                  <Link
                    onClick={() => {
                      setTitle("إداره الحساب");
                    }}
                    to="/Account"
                  >
                    إعاده الشحن و الدفع
                  </Link>
                </div>
              </div>
              <div className="nav_link" id="link_two">
                <Link to="/Home">الخطط و الخدمات</Link>
                <div className="nav_dropdown" id="drop_two">
                  <div className="first_plans_dropdown">
                    <h6>خدمات الانترنت الارضي</h6>
                    <Link
                      to="/UserName"
                      onClick={() => {
                        setTitle("اسم الامستخدم و كلمه المرور");
                      }}
                    >
                      اسم الامستخدم و كلمه المرور
                    </Link>
                    <Link
                      onClick={() => {
                        setTitle("طلب جهاز");
                      }}
                      to="/"
                    >
                      طلب جهاز
                    </Link>
                  </div>
                  <div className="second_plans_dropdown">
                    <Link to="/Overview">نظرة عامه </Link>
                    <Link to="/">تغيير الخطة</Link>
                  </div>
                  <div className="theard_plans_dropdown">
                    <Link to="/">
                      <h5>تفعيل الخطوط</h5>
                      <span>يمكنك تفعيل الخطوط من هنا</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="nav_link">
                <Link
                  to="/Additional"
                  onClick={() => {
                    setTitle("عروض و إضافات");
                  }}
                >
                  عروض و إضافات
                </Link>
              </div>
              <div className="nav_link">
                <Link
                  to="/We-Pay"
                  onClick={() => {
                    setTitle("We Pay");
                  }}
                >
                  WE Pay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  (state) => {
    return { content: state };
  },
  { addData }
)(Navbar);
