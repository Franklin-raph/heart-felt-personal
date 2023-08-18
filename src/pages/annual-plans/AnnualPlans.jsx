import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";

const AnnualPlans = () => {
  //
  const navigate = useNavigate();
  //
  const user = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  //
  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };

  //
  return (
    <section className="user_dashbaord_section">
      <i
        className="ri-align-justify user_dashboard_toggler open"
        onClick={openSidebar}
      ></i>
      <DashBoardNav sidebar={sidebar} openSidebar={openSidebar} />
      <div className="user_dashboard_col_2">
        <div className="dashboard_content_header">
          <h3>Annual Plan</h3>
        </div>
        {/*  */}
        <AnnualPlanNavLinks />
        {/*  */}
        <div className="dashboard_item_row_header">
          <h4>Type</h4>
          <h4>Start Date</h4>
          <h4>End Date</h4>
          <h4>Card Used</h4>
          <h4>Receipt</h4>
          <h4>Tax Invoice</h4>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default AnnualPlans;

//
//
// The links below the header
export const AnnualPlanNavLinks = () => {
  return (
    <div className="dashboard_content_head">
      <NavLink to="/annual-plan" className="dashboard_content_head_link">
        Subscription History
      </NavLink>
      <NavLink
        to="/annual-plan/my-team"
        className="dashboard_content_head_link"
      >
        My Team
      </NavLink>
      <NavLink
        to="/annual-plan/logo-settings"
        className="dashboard_content_head_link"
      >
        Logo Settings
      </NavLink>
    </div>
  );
};
