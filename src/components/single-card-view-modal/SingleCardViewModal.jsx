const SingleCardViewModal = ({ card_view_modal, close_card_view_modal }) => {
  return (
    <div className="single_card_view_modal" ref={card_view_modal}>
      <div className="view_modal_input">
        <div className="view_modal_input_controls">
          <div className="card_view_control font_weight_control">
            <div>
              <p>O</p>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div className="card_view_control font_family_control">
            <div>
              <p>Aa</p>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div className="card_view_control font_size_control">
            <div>
              <p>Small</p>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div className="card_view_control font_style_control">
            <div>
              <p>I</p>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div className="card_view_control font_align_control">
            <div>
              <i className="ri-bar-chart-horizontal-line"></i>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div className="font_show_control">
            <i className="ri-eye-off-line"></i>
          </div>
        </div>
        <div className="view_modal_input_form">
          <form>
            <textarea rows="10" placeholder="your message here..."></textarea>
          </form>
        </div>
      </div>

      <div className="view_modal_buttons">
        <button className="modal_save_changes">
          <i className="bx bxs-file-blank"></i>Save Changes
        </button>
        <button
          className="modal_cancel_changes"
          onClick={close_card_view_modal}
        >
          <i className="bx bxs-x-circle"></i>Cancel
        </button>
      </div>
    </div>
  );
};

export default SingleCardViewModal;
