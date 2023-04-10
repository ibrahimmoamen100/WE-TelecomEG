import React from "react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import "./Home.css";
import Data from "../components/Data";
import Balance from "../components/Balance";
import Points from "../components/Points";
import Additional from "../components/Additional";
import WePay from "../components/WePay";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home_page">
      <TopNavbar />
      <Navbar />
      <div className="container">
        <div className="home_content ">
          <Data />
          <Balance />
          <Points />
          <Additional />
          <WePay />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
