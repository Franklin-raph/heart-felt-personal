import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import UploadCardCoverSideNav from "../../components/upload-card-cover-side-nav/UploadCardCoverSideNav";
import Occasions from "../../components/occasions/Occasions";

const UploadCardCover = () => {
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

    const gift_card = [
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
      ];

  return (
    <div className="upload-card-cover">
        <Occasions />
        <div className="header">
            <h1>Birthday Cards</h1>
            <p>Express love to friends and family all over the world, with special memories of gifts.</p>
        </div>
        <section className="user_dashbaord_section">
        <i
            className="ri-align-justify user_dashboard_toggler open"
            onClick={openSidebar}
        ></i>
        <UploadCardCoverSideNav sidebar={sidebar} openSidebar={openSidebar} />
        <div className="user_dashboard_col_2">
            <div className="gift_card_segment_row_upload_card_cover row_2">
                <div className="gift_card_segment_card">
                    <div className="upload_gift_card_segment_card flex-center" onClick={()=> navigate("/upload-card")}>
                        <i className='bx bx-upload'></i>
                        <h4>Upload card cover</h4>
                        <p>max 30mb</p>
                    </div>
                    <div className="gift_card_segment_card_context">
                        <h5> Happy Birthday </h5>
                        <p>Birthday</p>
                    </div>
                </div>
                {gift_card.map((card, i) => (
                <div className="gift_card_segment_card" key={i} onClick={() => navigate("/preview-uploaded-card")}>
                    <div className="gift_card_segment_card_img"></div>
                    <div className="gift_card_segment_card_context">
                    <h5> {card.card_title} </h5>
                    <p>
                        <span>{card.card_price}</span>
                        <span>{card.card_dash}</span>
                        <span>{card.card_maxPrice}</span>
                    </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </section>
    </div>
  )
}

export default UploadCardCover