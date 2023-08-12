import React, { useEffect, useRef } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { useNavigate } from "react-router-dom";

const NotificationToggles = () => {
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
        <div className="dashboard_content_header tax_exempt notifications">
          <div>
            <h3>Account</h3>
            <p>Create settings for your email notifications.</p>
          </div>
          <button className="notifications_page_explore_cards_btn">
            Explore Cards
          </button>
        </div>
        {/*  */}
        <div className="notifications_row"></div>
      </div>
    </section>
  );
};

export default NotificationToggles;

//
