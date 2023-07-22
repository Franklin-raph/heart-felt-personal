import imagePreview from "../../assets/images/card_preview_template.jpg";

const SingleCardView = () => {
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
          <div>
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
          <div>
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
    </article>
  );
};

export default SingleCardView;
