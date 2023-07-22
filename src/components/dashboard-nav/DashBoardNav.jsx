import React from "react";
import { Link } from "react-router-dom";

const DashBoardNav = () => {
  //
  const user = JSON.parse(localStorage.getItem("user_info"));

  //
  return (
    <article className="sidebar_nav">
      <i class="ri-close-line user_dashboard_toggler close"></i>
      <div className="sidebar_header">
        <h4>{user && user.charAt(0)}</h4>
        <div className="sidebar_header_text">
          <h3>Mary</h3>
          <p>Welcome</p>
        </div>
      </div>
      {/*  */}
      <div className="sidebar_links">
        <div className="sidebar_link">
          <i className="bx bx-memory-card"></i>
          <Link>My cards</Link>
        </div>
        <div className="sidebar_link">
          <i className="bx bxs-file-plus"></i>
          <Link>Saved Covers</Link>
        </div>
        <div className="sidebar_link">
          <i className="bx bx-cog"></i>
          <Link>Accounts</Link>
        </div>
        <div className="sidebar_link">
          <i className="bx bxs-calendar"></i>
          <Link>Annual Plan</Link>
        </div>
        <div className="sidebar_link">
          <i className="ri-user-2-line"></i>
          <Link>Tax Exemption</Link>
        </div>
        <div className="sidebar_link">
          <i className="ri-notification-2-fill"></i>
          <Link>My cards</Link>
        </div>
      </div>
    </article>
  );
};

export default DashBoardNav;
