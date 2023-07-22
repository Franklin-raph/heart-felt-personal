import React, { useEffect, useRef } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { Link, useNavigate } from "react-router-dom";
import cardImgPreview from "../../assets/images/card_preview_template.jpg";

const UserDashboard = () => {
  const navigate = useNavigate();
  //
  const user = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
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
          <h3>My Cards</h3>
        </div>
        {/*  */}
        <div className="userdashboard_content">
          <div className="dashboard_content_head">
            <Link className="dashboard_content_head_link active">Created</Link>
            <Link className="dashboard_content_head_link">Signed</Link>
          </div>
          {/*  */}
          <div className="dashboard_item_row_header">
            <h4>Preview</h4>
            <h4>Created</h4>
            <h4>Created By</h4>
            <h4>Recipients</h4>
            <h4>Entries</h4>
            <h4>Status</h4>
          </div>
          <div className="user_dashboard_item_row">
            {/*  */}
            <div className="user_dashboard_card_item">
              <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status unpaid">Unpaid</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/*  */}
            <div className="user_dashboard_card_item">
              <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status sent">Sent</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/*  */}
            <div className="user_dashboard_card_item">
              <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status unpaid">Unpaid</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/*  */}
            <div className="user_dashboard_card_item">
              <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status sent">Sent</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/*  */}
            <div className="user_dashboard_card_item">
              <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status unpaid">Unpaid</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/*  */}
            <div className="user_dashboard_card_item">
              <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status unpaid">Unpaid</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
