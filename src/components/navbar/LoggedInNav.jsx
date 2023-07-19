import { useEffect } from "react";
import heartFeltLogo from "../../assets/images/heartfelt logo 2.png";
import { Link } from "react-router-dom";

const LoggedInNav = () => {
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
          <div className="nav_profile_wrapper">
            <i className="bx bxs-user nav_profile_icon"></i>
            <i className="bx bx-caret-down user_nav_chevron"></i>
          </div>
          <button className="primary-button">Send a card</button>
        </div>
      </nav>
    </div>
  );
};

export default LoggedInNav;
