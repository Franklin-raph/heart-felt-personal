import { useEffect, useState } from "react";
import heartFeltLogo from "../../assets/images/heartfelt logo 2.png";
import { Link, useNavigate } from "react-router-dom";

const LoggedInNav = () => {
  const [userInfoModal, setUserInfoModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    if (!user) {
      location.href = "/sign-in";
    }
  }, []);

  useEffect(() => {
    const navOpen = document.querySelector(".ri-menu-line");
    const navClose = document.querySelector(".ri-close-fill");
    const nav = document.querySelector("nav ul");

    function closeNav() {
      nav.style.top = "-100%";
      navOpen.style.display = "block";
      navClose.style.display = "none";
    }

    navOpen.addEventListener("click", () => {
      nav.style.top = "12%";
      navOpen.style.display = "none";
      navClose.style.display = "block";
    });

    navClose.addEventListener("click", () => {
      closeNav();
    });

    document.querySelectorAll("nav ul a").forEach((navlink) => {
      navlink.addEventListener("click", () => {
        closeNav();
      });
    });
  }, []);

  const openUserInfo = () => {
    setUserInfoModal(!userInfoModal);
  };

  const logoutUser = () => {
    localStorage.clear();
    location.href = "/sign-in";
  };

  return (
    <div className="nav">
      <nav className="parent-container-padding flex-between">
        <div className="flex-between mobile-nav">
          <a href="/">
            <img src={heartFeltLogo} alt="" />
          </a>
          <div className="toggler">
            <i className="ri-menu-line"></i>
            <i className="ri-close-fill"></i>
          </div>
          <ul className="flex-between">
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/try-demo">Try Demo</Link>
            </li>
            <div className="flex-between mobile-search">
              <div className="search-input flex-between">
                <i className="ri-search-line"></i>
                <input type="text" placeholder="Search" />
              </div>
              <div className="nav_profile_wrapper">
                <i className="bx bxs-user nav_profile_icon"></i>
                <i className="bx bx-caret-down user_nav_chevron mobile"></i>
              </div>
              <button className="primary-button">Send a card</button>
            </div>
          </ul>
        </div>
        <div className="flex-between desktop-search">
          <div className="search-input flex-between">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav_profile_wrapper" onClick={openUserInfo}>
            <div>
              <i className="bx bxs-user nav_profile_icon"></i>
            </div>
            <i className="bx bx-chevron-down user_nav_chevron"></i>
          </div>
          <button className="primary-button">Send a card</button>
        </div>
      </nav>
      {userInfoModal && (
        <div className="user-info-drop-down">
          <div className="user-name-icon flex-start">
            <div className="drop-down-chevron">
              <i className="bx bxs-user nav_profile_icon"></i>
            </div>
            <div>
              <h5>{user}</h5>
              <p>View Public Profile</p>
            </div>
          </div>
          <ul>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bx-star"></i>
                <p>Send a card</p>
              </div>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bx-memory-card"></i>
                <p>My cards</p>
              </div>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bxs-file-plus"></i>
                <p>Saved Covers</p>
              </div>
              <i className="bx bx-chevron-right"></i>
            </li>
          </ul>
          <ul>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bx-cog"></i>
                <p>Account</p>
              </div>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bx-phone-outgoing"></i>
                <p>Support</p>
              </div>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li className="flex-between" onClick={logoutUser}>
              <div className="flex-start g-1">
                <i className="bx bx-log-out"></i>
                <p>Logout</p>
              </div>
              <i className="bx bx-chevron-right"></i>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoggedInNav;
