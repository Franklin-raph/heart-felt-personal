import imagePreview_1 from "../../assets/images/card_preview_template.jpg";
import imagePreview_2 from "../../assets/images/delivery-details-card-sample.png";
import imagePreview_3 from "../../assets/images/birthday-card-template-image.jpg";
import imagePreview_4 from "../../assets/images/sign-card-initial-view.webp";
import deliveryDetailsImage from "../../assets/images/delivery-details-img.png";
import { useRef, useState } from "react";
import SingleCardViewModal from "../../components/single-card-view-modal/SingleCardViewModal";

// swiper slides imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const SingleCardView = ({ baseUrl }) => {
  const [isGiftCardSettingsOpen, setIsGiftCardSettingsOpen] = useState(false);
  const [isHowGiftCardWorksOpen, setIsHowGiftCardWorksOpen] = useState(false);

  //
  const [showTextEditModalBtn, setShowTextEditModalBtn] = useState(false);
  const uploadedCard = JSON.parse(localStorage.getItem("uploaded-card"));

  function openGiftCardSettings() {
    setIsGiftCardSettingsOpen(!isGiftCardSettingsOpen);
  }

  // const card_view_modal_overlay = useRef();
  const card_view_modal = useRef();

  const show_card_view_modal = () => {
    card_view_modal.current.classList.add("show_single_card_modal");
    setShowTextEditModalBtn(true);
  };
  
  const close_card_view_modal = () => {
    card_view_modal.current.classList.remove("show_single_card_modal");
    setShowTextEditModalBtn(false);
  };

  //
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  //
  const user_code = useRef();
  const user_code_copy_btn = useRef();

  //
  const handleCopyUserCode = () => {
    navigator.clipboard.writeText(user_code.current.textContent);
    user_code_copy_btn.current.textContent = "Copied!";
    user_code_copy_btn.current.style.background = "transparent";
    user_code_copy_btn.current.style.boxShadow = "0 0 0 1.3px #061818";
    user_code_copy_btn.current.style.color = " #061818";
    setTimeout(() => {
      user_code_copy_btn.current.textContent = "Copy";
      user_code_copy_btn.current.style.background = "#061818";
      user_code_copy_btn.current.style.boxShadow = "none";
      user_code_copy_btn.current.style.color = "#ffffff";
    }, 4000);
  };

  return (
    <article className="single_card_view_section">
      <div className="single_card_page_header">
        <h2 className="single_card_header_h3">Group Greeting Card</h2>
        <div className="single_card_countdown_row">
          <p>12 Dec. 2023</p>
          {/* <div className="single_card_countdown_col">
            <h4>DAYS</h4>
            <div>
              <h4>83</h4>
              <span>:</span>
            </div>
          </div>
          <div className="single_card_countdown_col">
            <h4>HOURS</h4>
            <div>
              <h4>02</h4>
              <span>:</span>
            </div>
          </div>
          <div className="single_card_countdown_col">
            <h4>MINUTES</h4>
            <div>
              <h4>53</h4>
              <span>:</span>
            </div>
          </div>
          <div className="single_card_countdown_col">
            <h4>SECONDS</h4>
            <div>
              <h4>87</h4>
            </div>
          </div> */}
        </div>
      </div>

      
      <div className="single_card_view_row">
        <div className="single_card_col col_1">
          
          <div onClick={openGiftCardSettings}>
            <i className="bx bx-cog"></i>
            <p>Card Settings</p>
          </div>
          
          <div>
            <i className="bx bxl-telegram"></i>
            <p>Contribute to Gift Card</p>
          </div>
          
          <div>
            <i className="bx bx-credit-card"></i>
            <p>Preview Card</p>
          </div>
          
          <div>
            <i className="bx bx-link-alt"></i>
            <p>Hide Invite Links</p>
          </div>
          
        </div>

        {/* col 2 */}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination, Navigation]}
          pagination={pagination}
          loop={true}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className="single_card_col col_2">
            <img src={uploadedCard ? uploadedCard : imagePreview_2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="single_card_col col_2">
            <img src={imagePreview_4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="single_card_col col_2">
            <img src={imagePreview_4} alt="" />
          </SwiperSlide>
        </Swiper>

        {/* col 3 */}
        <div className="single_card_col col_1">
          
          {!showTextEditModalBtn ? (
            <>
              <div onClick={show_card_view_modal}>
                <i className="bx bx-pencil"></i>
                <p>Sign Card</p>
              </div>
              
              <div>
                <i className="bx bxs-videos"></i>
                <p>Add Video</p>
              </div>
              
              <div>
                <i className="bx bxs-image"></i>
                <p>Add Photo</p>
              </div>
              
              <div>
                <i className="bx bx-smile"></i>
                <p>Add GIF/Sticker</p>
              </div>
              
              <div>
                <i className="bx bx-text"></i>
                <p>Add Text</p>
              </div>
            </>
          ) : (
            <>
              <div className="modal_save_changes">
                <i className="bx bxs-file-blank"></i>
                <p>Save Changes</p>
              </div>
              <div
                className="modal_cancel_changes"
                onClick={close_card_view_modal}
              >
                <i className="bx bxs-x-circle"></i>
                <p>Cancel</p>
              </div>
            </>
          )}
          
        </div>
      </div>
      
      <div className="single_card_view_footer">
        <div className="single_card_copy_box">
          <p ref={user_code}>Chisom-HUEY78</p>
          <button onClick={handleCopyUserCode} ref={user_code_copy_btn}>
            Copy
          </button>
        </div>
        <h6>Share link to sign card</h6>
        <div className="single_card_footer_links">
          <Link
            to={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </Link>
          <Link
            to={`https://twitter.com/intent/tweet?url=${location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </Link>
          <i className="bx bxl-youtube"></i>
          <Link
            to={`https://www.linkedin.com/shareArticle?url=${
              location.href
            }&title=${location.pathname.slice(1)}&summary=${location.href}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </Link>
          <i className="bx bxs-message-rounded-dots"></i>
        </div>
      </div>
      
      {isGiftCardSettingsOpen && (
        <GiftCardSettingsModal
          isGiftCardSettingsOpen={isGiftCardSettingsOpen}
          setIsGiftCardSettingsOpen={setIsGiftCardSettingsOpen}
          setIsHowGiftCardWorksOpen={setIsHowGiftCardWorksOpen}
        />
      )}

      {isHowGiftCardWorksOpen && (
        <HowGiftCardWorksModal
          setIsHowGiftCardWorksOpen={setIsHowGiftCardWorksOpen}
        />
      )}
      
      {/* <div
        className="single_card_modal_overlay"
        ref={card_view_modal_overlay}
        onClick={close_card_view_modal}
      ></div> */}
      <SingleCardViewModal
        card_view_modal={card_view_modal}
        baseUrl={baseUrl}
      />
    </article>
  );
};

export default SingleCardView;

// Const Modals

// Gift Card Settings Modal

export const GiftCardSettingsModal = ({
  isGiftCardSettingsOpen,
  setIsGiftCardSettingsOpen,
  setIsHowGiftCardWorksOpen,
}) => {
  return (
    <div className="gift-card-settings-modal-bg flex-center">
      <div className="gift-card-settings-modal">
        <i
          className="ri-close-fill"
          onClick={() => setIsGiftCardSettingsOpen(!isGiftCardSettingsOpen)}
        ></i>
        <div className="header">
          <h2>Gift Card Settings</h2>
          <p>Gift card can only be canceled within 24 hours after purchase.</p>
        </div>
        <div className="body">
          <h4>eGird Card</h4>
          <img src={deliveryDetailsImage} alt="" />
          <div className="amount">
            <h4>Select Amount</h4>
            <div className="gift_card_settings_modal_prices g-1">
              <p>#500</p>
              <p>#1,500</p>
              <p>#2,000</p>
              <p>#2,500</p>
            </div>
          </div>
          <input type="text" placeholder="# Amount" />
          <div className="flex-start g-1" style={{ marginTop: "10px" }}>
            <input type="checkbox" />
            <label style={{ display: "block", fontSize: "14px" }}>
              Allow other signers contribute
            </label>
            <i
              className="ri-information-fill"
              onClick={() => setIsHowGiftCardWorksOpen(true)}
            ></i>
          </div>
        </div>
        <button className="primary-button">Proceed</button>
      </div>
    </div>
  );
};

// How Gift Card Works Modal Here
export const HowGiftCardWorksModal = ({ setIsHowGiftCardWorksOpen }) => {
  return (
    <div className="how-gift-card-works-modal">
      <div className="header flex-between">
        <p>How gift card works</p>
        <i
          className="ri-close-fill"
          onClick={() => setIsHowGiftCardWorksOpen(false)}
        ></i>
      </div>
      <div className="body">
        <h4>Gift card would</h4>
        <ul>
          <li>
            <h5>Allow people contribute</h5>
            <p>
              Purchase gift card and allow multiple people to contribute to the
              total value of the card.
            </p>
          </li>
          <li>
            <h5>Make signers add more gift card</h5>
            <p>
              Upon sharing your card, signers can add their preferred amount to
              the total value of the gift card.
            </p>
          </li>
          <li>
            <h5>Send to recipient</h5>
            <p>
              All contributions added to the gift card is sent. Each
              contribution has a processing.
            </p>
          </li>
        </ul>
      </div>
      <div className="footer flex-between-start">
        <i className="ri-information-fill"></i>
        <p>
          People can contribute. Option cannot be changed after card purchase.
        </p>
      </div>
    </div>
  );
};

//
