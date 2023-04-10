import React from "react";
import CurrentPlan from "../components/CurrentPlan";
import Footer from "../components/Footer";
import MoveToPage from "../components/MoveToPage";
import Navbar from "../components/Navbar";
import OverViewDetails from "../components/OverViewDetails";
import TopNavbar from "../components/TopNavbar";
import "./Overview.css";

function Overview() {
  return (
    <div className="entire_overview">
      <TopNavbar />
      <Navbar />
      <MoveToPage name="نظرة عامة" />
      <div className="overview_container container">
        <OverViewDetails />
        <CurrentPlan />
      </div>
      <Footer />
    </div>
  );
}

export default Overview;
