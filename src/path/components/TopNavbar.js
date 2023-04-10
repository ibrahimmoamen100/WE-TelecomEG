import "./TopNavbar.css";
import "../../index.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import addData from "../../reducers/actions";

import { FaUserCircle, FaSearch, FaHome } from "react-icons/fa";
import Modal from "./Modal";

function TopNavbar(props) {
  const [model, createModal] = useState(true);
  const CloseModal = () => createModal(false);
  const OpenModal = () => createModal(true);
  let timeout;

  return (
    <div>
      <nav className="">
        <div
          className="container container_navbar"
          // onClick function to select search icon

          onClick={(e) => {
            let ele = e.target;
            let searchContainer = document.querySelector(
              ".search_container_border"
            );
            let searchInput = document.querySelector(".search_input");

            // Selecting  Search using if Statement

            if (
              ele.classList.contains("search_section") ||
              ele.classList.contains("search_container_border")
            ) {
              searchContainer.classList.add("toggle_search");
              searchInput.focus();
            } else if (
              !ele.classList.contains("search_section") &&
              !ele.classList.contains("search_container_border") &&
              !ele.classList.contains("search_input")
            ) {
              searchContainer.classList.remove("toggle_search");
            }
          }}
        >
          <div className="link_home-titlebar">
            <Link to="/Home" className="home_link ">
              <span className="mx-2">الذهاب الى موقع المصرية للاتصالات</span>
              <FaHome className="mx-1" />
            </Link>
          </div>
          <div
            className="user_search "
            style={{ display: `${props.hide === "hidden" ? "none" : "flex"}` }}
          >
            <Link to="/" className="user_section pointer " onClick={OpenModal}>
              <span className="phone_number text-white fs-6 ">
                {props.content.num}
              </span>
              <FaUserCircle className="mx-3" />
            </Link>
            {}

            <div className="search_container_border">
              <div className="search_section">
                <input
                  type="search"
                  placeholder="بحث"
                  className="px-2 py-1 search_input"
                />
                <FaSearch style={{ pointerEvents: "none" }} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default connect((state) => {
  return {
    content: state,
  };
}, addData)(TopNavbar);
