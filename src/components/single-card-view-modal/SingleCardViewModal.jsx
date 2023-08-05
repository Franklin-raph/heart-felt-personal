import { useState } from "react";
const SingleCardViewModal = ({ card_view_modal, close_card_view_modal }) => {
  const [colorToolTip, setColorToolTip] = useState(false);
  const [typefaceToolTip, setTypefaceToolTip] = useState(false);
  const [textSizeToolTip, setTextSizeToolTip] = useState(false);
  const [textStyleToolTip, setTextStyleToolTip] = useState(false);
  const [textAlignToolTip, setTextAlignToolTip] = useState(false);
  const [senderNameToolTip, setSenderNameToolTip] = useState(false);

  //
  return (
    <div className="single_card_view_modal" ref={card_view_modal}>
      <div className="view_modal_input">
        <div className="view_modal_input_controls">
          <div
            className="card_view_control font_weight_control"
            onMouseOver={() => setColorToolTip(true)}
            onMouseOut={() => setColorToolTip(false)}
          >
            <div>
              <p>O</p>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div
            className="card_view_control font_family_control"
            onMouseOver={() => setTypefaceToolTip(true)}
            onMouseOut={() => setTypefaceToolTip(false)}
          >
            <div>
              <p>Aa</p>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div
            className="card_view_control font_size_control"
            onMouseOver={() => setTextSizeToolTip(true)}
            onMouseOut={() => setTextSizeToolTip(false)}
          >
            <div>
              <p>Small</p>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div
            className="card_view_control font_style_control"
            onMouseOver={() => setTextStyleToolTip(true)}
            onMouseOut={() => setTextStyleToolTip(false)}
          >
            <div>
              <p>I</p>
            </div>
          </div>
          <div
            className="card_view_control font_align_control"
            onMouseOver={() => setTextAlignToolTip(true)}
            onMouseOut={() => setTextAlignToolTip(false)}
          >
            <div>
              <i className="ri-bar-chart-horizontal-line"></i>
              <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <div
            className="font_show_control"
            onMouseOver={() => setSenderNameToolTip(true)}
            onMouseOut={() => setSenderNameToolTip(false)}
          >
            <i className="ri-eye-off-line"></i>
          </div>
          {colorToolTip && <EditTextColorToolTip />}
          {typefaceToolTip && <EditTextTypeToolTip />}
          {textSizeToolTip && <EditTextSizeToolTip />}
          {textStyleToolTip && <EditTextStyleToolTip />}
          {textAlignToolTip && <EditTextAlignToolTip />}
          {senderNameToolTip && <SenderNameToolTip />}
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

//
// SINGLE CARD VIEW MODAL TOOL-TIPS
//

// editTextColourToolTip
export const EditTextColorToolTip = () => {
  return (
    <div className="colour_tip tool_tip_card">
      <p>Black</p>
      <div className="tool_tip_card_arrow"></div>
    </div>
  );
};

//
// editTextTypeToolTip
export const EditTextTypeToolTip = () => {
  return (
    <div className="type_tip tool_tip_card">
      <p>Typeface</p>
      <div className="tool_tip_card_arrow"></div>
    </div>
  );
};

//
// editTextSizeToolTip
export const EditTextSizeToolTip = () => {
  return (
    <div className="size_tip tool_tip_card">
      <p>Font Size</p>
      <div className="tool_tip_card_arrow"></div>
    </div>
  );
};

//
// editTextItalicsToolTip
export const EditTextStyleToolTip = () => {
  return (
    <div className="style_tip tool_tip_card">
      <p>Italic</p>
      <div className="tool_tip_card_arrow"></div>
    </div>
  );
};

//
// editTextAlignToolTip
export const EditTextAlignToolTip = () => {
  return (
    <div className="align_tip tool_tip_card">
      <p>Align</p>
      <div className="tool_tip_card_arrow"></div>
    </div>
  );
};

//
// SenderNameToolTip
export const SenderNameToolTip = () => {
  return (
    <div className="sender_tip tool_tip_card">
      <p>Hide Sender's Name</p>
      <div className="tool_tip_card_arrow"></div>
    </div>
  );
};
