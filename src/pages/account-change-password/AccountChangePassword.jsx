import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import { AccountInfoNavLinks } from "../account-personal-info/AccountInfo";

const AccountChangePassword = () => {
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
  const [accountProfilePicture, setAccountProfilePicture] = useState();

  //
  const handleUploadProfilePicture = (e) => {
    const files = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
      const profileImgUrl = e.target.result;
      setAccountProfilePicture(profileImgUrl);
    };
    reader.readAsDataURL(files);
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
          <h3>Account</h3>
        </div>
        {/*  */}
        <AccountInfoNavLinks />
        {/*  */}
        <form className="account_personal_info_form">
          <div className="account_info_input_div">
            <label htmlFor="first_name">Old Password</label>
            <input
              className="change_password_input"
              type="text"
              id="first_name"
            />
          </div>
          <div className="account_info_input_div">
            <label htmlFor="last_name">New Password</label>
            <input
              className="change_password_input"
              type="text"
              id="last_name"
            />
          </div>
          <button className="save_password_change_btn">Save</button>
        </form>
      </div>
    </section>
  );
};

export default AccountChangePassword;
