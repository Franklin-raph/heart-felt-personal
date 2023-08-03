import imagePreview from "../../assets/images/card_preview_template.jpg";
import deliveryDetailsImage from "../../assets/images/delivery-details-img.png";
import { useRef, useState } from "react";
import SingleCardViewModal from "../../components/single-card-view-modal/SingleCardViewModal";

const SingleCardView = () => {
  const [isGiftCardSettingsOpen, setIsGiftCardSettingsOpen] = useState(false);
  const [isHowGiftCardWorksOpen, setIsHowGiftCardWorksOpen] = useState(false);

  function openGiftCardSettings() {
    setIsGiftCardSettingsOpen(!isGiftCardSettingsOpen);
  }

  const card_view_modal_overlay = useRef();
  const card_view_modal = useRef();

  const show_card_view_modal = () => {
    card_view_modal.current.classList.add("show_single_card_modal");
    card_view_modal_overlay.current.classList.add("show_single_card_modal");
  };
  const close_card_view_modal = () => {
    card_view_modal.current.classList.remove("show_single_card_modal");
    card_view_modal_overlay.current.classList.remove("show_single_card_modal");
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

      {/*  */}
      <div className="single_card_view_row">
        <div className="single_card_col col_1">
          {/*  */}
          <div onClick={openGiftCardSettings}>
            <i className="bx bx-cog"></i>
            <p>Card Settings</p>
          </div>
          {/*  */}
          <div>
            <i className="bx bxl-telegram"></i>
            <p>Contribute to Gift Card</p>
          </div>
          {/*  */}
          <div>
            <i className="bx bx-credit-card"></i>
            <p>Preview Card</p>
          </div>
          {/*  */}
          <div>
            <i className="bx bx-link-alt"></i>
            <p>Hide Invite Links</p>
          </div>
          {/*  */}
        </div>

        {/* col 2 */}
        <div className="single_card_col col_2">
          <img src={imagePreview} alt="" />
        </div>

        {/* col 3 */}
        <div className="single_card_col col_1">
          {/*  */}
          <div onClick={show_card_view_modal}>
            <i className="bx bx-pencil"></i>
            <p>Sign Card</p>
          </div>
          {/*  */}
          <div>
            <i className="bx bxs-image"></i>
            <p>Add Photo</p>
          </div>
          {/*  */}
          <div>
            <i className="bx bx-smile"></i>
            <p>Add GIF/Sticker</p>
          </div>
          {/*  */}
        </div>
      </div>
      {/*  */}
      <div className="single_card_pagination">
        <i className="bx bx-chevron-left"></i>
        <p className="active">1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <i className="bx bx-chevron-right"></i>
      </div>
      {/*  */}
      <div className="single_card_view_footer">
        <div className="single_card_copy_box">
          <p>Chisom-HUEY78</p>
          <button>Copy</button>
        </div>
        <h6>Share link to sign card</h6>
        <div className="single_card_footer_links">
          <i className="bx bxl-facebook"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-youtube"></i>
          <i className="bx bxl-linkedin"></i>
          <i className="bx bxs-message-rounded-dots"></i>
        </div>
      </div>
      {/*  */}
      {isGiftCardSettingsOpen && (
        <div className="gift-card-settings-modal-bg flex-center">
          <div className="gift-card-settings-modal">
            <i
              class="ri-close-fill"
              onClick={() => setIsGiftCardSettingsOpen(!isGiftCardSettingsOpen)}
            ></i>
            <div className="header">
              <h2>Gift Card Settings</h2>
              <p>
                Gift card can only be canceled within 24 hours after purchase.
              </p>
            </div>
            <div className="body">
              <h4>eGird Card</h4>
              <img src={deliveryDetailsImage} alt="" />
              <div className="amount">
                <h4>Select Amount</h4>
                <div className="flex-start g-1">
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
                  class="ri-information-fill"
                  onClick={() => setIsHowGiftCardWorksOpen(true)}
                ></i>
              </div>
            </div>
            <button className="primary-button">Proceed</button>
          </div>
        </div>
      )}

      {isHowGiftCardWorksOpen && (
        <div className="how-gift-card-works-modal">
          <div className="header flex-between">
            <p>How gift card works</p>
            <i
              class="ri-close-fill"
              onClick={() => setIsHowGiftCardWorksOpen(false)}
            ></i>
          </div>
          <div className="body">
            <h4>Gift card would</h4>
            <ul>
              <li>
                <h5>Allow people contribute</h5>
                <p>
                  Purchase gift card and allow multiple people to contribute to
                  the total value of the card.
                </p>
              </li>
              <li>
                <h5>Make signers add more gift card</h5>
                <p>
                  Upon sharing your card, signers can add their preferred amount
                  to the total value of the gift card.
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
            <i class="ri-information-fill"></i>
            <p>
              People can contribute. Option cannot be changed after card
              purchase.
            </p>
          </div>
        </div>
      )}
      {/*  */}
      <div
        className="single_card_modal_overlay"
        ref={card_view_modal_overlay}
        onClick={close_card_view_modal}
      ></div>
      <SingleCardViewModal
        card_view_modal={card_view_modal}
        close_card_view_modal={close_card_view_modal}
      />
    </article>
  );
};

export default SingleCardView;
