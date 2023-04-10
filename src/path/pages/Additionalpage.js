import React, { useRef } from "react";
import MoveToPage from "../components/MoveToPage";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Additionalpage.css";
import offers from "../../img/offers.png";
import extras from "../../img/extras.png";

function Additionalpage() {
  const offer = useRef(null);
  const extra = useRef(null);
  const handleExtra = () => {
    extra.current.style.opacity = "1";
    offer.current.style.opacity = "0.5";
  };
  const handleOffer = () => {
    extra.current.style.opacity = "0.5";
    offer.current.style.opacity = "1";
  };
  return (
    <div className="additional_page">
      <TopNavbar />
      <Navbar />
      <div className="additional_page-container container">
        <MoveToPage name="عروض وإضافات" />
        <h3 className="pt-3 pb-0 "> العروض والإضافات</h3>
        <span className="offer-text">
          {" "}
          !تمتع بالعروض والإضافات المصممة خصيصًا لك
        </span>
        <div className="events">
          <div className="extra" ref={extra} onClick={handleExtra}>
            <img src={extras} alt="" />
            <span>الايضافات</span>
          </div>
          <div className="offer" ref={offer} onClick={handleOffer}>
            <img src={offers} alt="" />
            <span>العروض</span>
          </div>
        </div>
        <div className="wait-our-events"> WE ترقبوا العروض المميزة من </div>
      </div>
      <Footer />
    </div>
  );
}

export default Additionalpage;
