import { useEffect, useState } from "react";
import TextEditColorModal, {
  TextEditAlignModal,
  TextEditFamilyModal,
  TextEditSizeModal,
} from "../single-card-text-edit-modals/SingleCardTextEditModal";
import SuccessAlert from "../alert/SuccessAlert";
// import TextareaAutosize from "react-autosize-textarea";
const SingleCardViewModal = ({ card_view_modal, baseUrl }) => {
  const [colorToolTip, setColorToolTip] = useState(false);
  const [typefaceToolTip, setTypefaceToolTip] = useState(false);
  const [textSizeToolTip, setTextSizeToolTip] = useState(false);
  const [textStyleToolTip, setTextStyleToolTip] = useState(false);
  const [textAlignToolTip, setTextAlignToolTip] = useState(false);
  const [senderNameToolTip, setSenderNameToolTip] = useState(false);

  // Wants Text Edit States
  const [showColorPalette, setShowColorPalette] = useState(false);
  const [textEditFonts, setTextEditFonts] = useState(false);
  const [showEditSizeModal, setShowEditSizeModal] = useState(false);
  const [showTextAlignModal, setShowTextAlignModal] = useState(false);
  const [success, setSuccess] = useState(false)
  const [loader, setLoader] = useState(false)

  //
  const handleShowColorPalette = () => {
    setShowColorPalette(!showColorPalette);
    setTextEditFonts(false);
    setShowEditSizeModal(false);
    setShowTextAlignModal(false);
  };

  //
  const handleShowTextEditFonts = () => {
    setTextEditFonts(!textEditFonts);
    setShowColorPalette(false);
    setShowEditSizeModal(false);
    setShowTextAlignModal(false);
  };

  //
  const handleShowTextSizeModal = () => {
    setShowEditSizeModal(!showEditSizeModal);
    setTextEditFonts(false);
    setShowColorPalette(false);
    setShowTextAlignModal(false);
  };

  //
  const handleShowTextAlignModal = () => {
    setShowTextAlignModal(!showTextAlignModal);
    setTextEditFonts(false);
    setShowEditSizeModal(false);
    setShowColorPalette(false);
  };

  // ======================

  const user = JSON.parse(localStorage.getItem("user"));
  const cardID = JSON.parse(localStorage.getItem("cardID"));

  // ========================
  const [comment, setComment] = useState();
  // ======================
  const handleSignCard = async (e) => {
    setLoader(true)
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/sign-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          comment: comment,
          commentBy: user.user.email,
          cardID: cardID,
        }),
      });
      if(res) setLoader(false)
      const data = await res.json();
      if(res.ok){
        setSuccess(data.message)
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  // ======================
  // ======================

  //
  return (
    <div className="single_card_view_modal" ref={card_view_modal}>
      <div className="single_card_view_modal_holder">
        <div className="view_modal_input">
          <div className="view_modal_input_controls">
            <div
              className="card_view_control font_weight_control"
              onMouseOver={() => setColorToolTip(true)}
              onMouseOut={() => setColorToolTip(false)}
              onClick={handleShowColorPalette}
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
              onClick={handleShowTextEditFonts}
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
              onClick={handleShowTextSizeModal}
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
              onClick={handleShowTextAlignModal}
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
            {showColorPalette && <TextEditColorModal />}
            {textEditFonts && <TextEditFamilyModal />}
            {showEditSizeModal && <TextEditSizeModal />}
            {showTextAlignModal && <TextEditAlignModal />}
          </div>
          <div className="view_modal_input_form">
            <form>
              {/* <TextareaAutosize
                maxRows={8}
                rows={1}
                placeholder="your message here..."
              /> */}
              <textarea
                rows="16"
                placeholder="your message here..."
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              {!loader ? 
                <button className="view_modal_input_btn" onClick={handleSignCard}>Sign Card</button> 
                : 
                <button className="view_modal_input_btn"><i className="fa-solid fa-spinner fa-spin"></i></button> 
              }
            </form>
          </div>
          {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
        </div>
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
      <p>Hide Sender{"'s"} Name</p>
      <div className="tool_tip_card_arrow"></div>
    </div>
  );
};
