import { Link, useNavigate } from "react-router-dom";
import payStackIcon from "../../assets/images/paystack.svg";
import deliver_details_icon from "../../assets/images/delivery-details-card-sample.png";
import { useRef, useState } from "react";
import { FillInAllFormDetails } from "../../components/form-error-modal/DeliveryDetailsErrorModal";

const DeliveryDetails = () => {
  // References
  const error_modal_1 = useRef();

  //
  const [isTime, setIsTime] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const navigate = useNavigate();

  // form inputs states
  const uploadedCard = JSON.parse(localStorage.getItem("card_cover"))
  const [recipientFullName, setRecipientFullName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderFullName, setSenderFullName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [deliveryTimeZone, setDeliveryTimeZone] = useState("");
  const [deliveryVoucherName, setDeliveryVoucherName] = useState(""); //only when checked
  const [deliveryVoucherCode, setDeliveryVoucherCode] = useState(""); //only when checked
  const [deliveryVoucherAmount, setDeliveryVoucherAmount] = useState(""); //only when checked

  const [listOfTimeZones, setListOfTimeZones] = useState(false)

  // check inputs
  const [addGiftCardCheck, setAddGiftCardCheck] = useState(true);
  const [addVideoCheck, setAddVideoCheck] = useState(false);

  const timeZones =  [
      {"name": "UTC-12:00", "offset": "-12:00"},
      {"name": "UTC-11:00", "offset": "-11:00"},
      {"name": "UTC-10:00", "offset": "-10:00"},
      {"name": "UTC-09:00", "offset": "-09:00"},
      {"name": "UTC-08:00", "offset": "-08:00"},
      {"name": "UTC-07:00", "offset": "-07:00"},
      {"name": "UTC-06:00", "offset": "-06:00"},
      {"name": "UTC-05:00", "offset": "-05:00"},
      {"name": "UTC-04:00", "offset": "-04:00"},
      {"name": "UTC-03:00", "offset": "-03:00"},
      {"name": "UTC-02:00", "offset": "-02:00"},
      {"name": "UTC-01:00", "offset": "-01:00"},
      {"name": "UTC", "offset": "00:00"},
      {"name": "UTC+01:00", "offset": "+01:00"},
      {"name": "UTC+02:00", "offset": "+02:00"},
      {"name": "UTC+03:00", "offset": "+03:00"},
      {"name": "UTC+03:30", "offset": "+03:30"},
      {"name": "UTC+04:00", "offset": "+04:00"},
      {"name": "UTC+04:30", "offset": "+04:30"},
      {"name": "UTC+05:00", "offset": "+05:00"},
      {"name": "UTC+05:30", "offset": "+05:30"},
      {"name": "UTC+05:45", "offset": "+05:45"},
      {"name": "UTC+06:00", "offset": "+06:00"},
      {"name": "UTC+06:30", "offset": "+06:30"},
      {"name": "UTC+07:00", "offset": "+07:00"},
      {"name": "UTC+08:00", "offset": "+08:00"},
      {"name": "UTC+08:45", "offset": "+08:45"},
      {"name": "UTC+09:00", "offset": "+09:00"},
      {"name": "UTC+09:30", "offset": "+09:30"},
      {"name": "UTC+10:00", "offset": "+10:00"},
      {"name": "UTC+10:30", "offset": "+10:30"},
      {"name": "UTC+11:00", "offset": "+11:00"},
      {"name": "UTC+12:00", "offset": "+12:00"},
      {"name": "UTC+12:45", "offset": "+12:45"},
      {"name": "UTC+13:00", "offset": "+13:00"},
      {"name": "UTC+14:00", "offset": "+14:00"}
    ]
  

  // delivery details input data
  const delivery_input_details = {
    recipientFullName,
    recipientEmail,
    senderFullName,
    deliveryDate,
    deliveryTime,
    deliveryTimeZone,
    deliveryVoucherName,
    deliveryVoucherCode,
    deliveryVoucherAmount,
  };

  function submitCardDeliveryDetails(e) {
    e.preventDefault();

    //
    if (
      !recipientFullName ||
      !recipientEmail ||
      !senderFullName ||
      !deliveryDate ||
      !deliveryTime ||
      !deliveryTimeZone
    ) {
      error_modal_1.current.classList.toggle("show_delivery_error_modal");
      return;
    } else if (addGiftCardCheck === true) {
      if (
        !recipientFullName ||
        !recipientEmail ||
        !senderFullName ||
        !deliveryDate ||
        !deliveryTime ||
        !deliveryTimeZone ||
        !deliveryVoucherName ||
        !deliveryVoucherCode ||
        !deliveryVoucherAmount
      ) {
        error_modal_1.current.classList.toggle("show_delivery_error_modal");
        return;
      } else {
        navigate("/payment-page");
      }
    }

    // reset delivery details form
    setRecipientFullName("");
    setRecipientEmail("");
    setSenderFullName("");
    setDeliveryDate("");
    setDeliveryTime("");
    setDeliveryTimeZone("");
    setDeliveryVoucherName("");
    setDeliveryVoucherCode("");
    setDeliveryVoucherAmount("");
    navigate("/payment-page");
  }

  // close error modal 1
  const close_error_modal_1 = () => {
    error_modal_1.current.classList.toggle("show_delivery_error_modal");
  };

  function openListOfTimeZones(){
    alert("Hello")
  }

  //
  return (
    <section className="delivery_details_section">
      <div className="delivery_details_col_1">
        {/* Recipient Details */}
        <form
          className="delivery_details_form"
          onSubmit={submitCardDeliveryDetails}
        >
          <div className="recipient_details">
            <h4>Recipient Details</h4>
            <div>
              <label htmlFor="recipient_name">Full Name</label>
              <input
                type="text"
                id="recipient_name"
                placeholder="Eg. James Eze"
                onChange={(e) => setRecipientFullName(e.target.value)}
                value={recipientFullName}
              />
            </div>
            <div>
              <label htmlFor="recipient_email">Email Address</label>
              <input
                type="email"
                id="recipient_email"
                placeholder="example@example.com"
                onChange={(e) => setRecipientEmail(e.target.value)}
                value={recipientEmail}
              />
            </div>
          </div>
          {/* Sender Details */}
          <div className="recipient_details">
            <h4>Sender Details</h4>
            <div>
              <label htmlFor="sender_name">Full Name</label>
              <input
                type="text"
                id="sender_name"
                placeholder="Eg. James Eze"
                onChange={(e) => setSenderFullName(e.target.value)}
                value={senderFullName}
              />
            </div>
          </div>
          {/* Delivery Details */}
          <div className="recipient_details">
            <h4>Delivery Details</h4>
            <div className="delivery_details_dual_holder">
              <div>
                <label htmlFor="delivery_date">Date</label>
                <input
                  type={isDate === true ? "date" : "text"}
                  placeholder="dd-mm-yyy"
                  onFocus={() => setIsDate(true)}
                  onBlur={() => setIsDate(false)}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  value={deliveryDate}
                  id="delivery_date"
                />
              </div>

              <div>
                <label htmlFor="delivery_time">Time</label>
                <input
                  type={isTime === true ? "time" : "text"}
                  onFocus={() => setIsTime(true)}
                  onBlur={() => setIsTime(false)}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  value={deliveryTime}
                  placeholder="Eg. 12:00 Am"
                  id="delivery_time"
                />
              </div>
            </div>
            <div style={{ position:"relative" }}>
              <label htmlFor="delivery_time_zone">Time Zone</label>
              <div style={{ display:"flex", flexDirection:"row", alignItems:"center" }}>
                <input
                  type="text"
                  id="delivery_time_zone"
                  placeholder="Eg. UTC +1"
                  // onChange={(e) => setDeliveryTimeZone(e.target.value)}
                  value={deliveryTimeZone}
                />
                <i class="ri-arrow-down-s-line" style={{ fontSize:"22px", cursor:"pointer" }} onClick={() => setListOfTimeZones(!listOfTimeZones)}></i>
                {listOfTimeZones && 
                  <div className="timeZone">
                    {timeZones.map(timeZone => (
                      <p onClick={() => setDeliveryTimeZone(timeZone.name)}>{timeZone.name}</p>
                    ))}
                  </div>
                }
              </div>
            </div>
          </div>
          {/* Preferences */}
          <div className="recipient_details preferences">
            <h4>Preferences</h4>
            <div className="want_gift_card_segment">
              <div className="the_input_check">
                <input
                  type="checkbox"
                  id="want_card_check"
                  checked={addGiftCardCheck}
                  onChange={(e) => setAddGiftCardCheck(!addGiftCardCheck)}
                />
                <label htmlFor="want_card_check">
                  I want to add Gift card{" "}
                  <i className="bx bxs-error-circle"></i>
                </label>
              </div>

              {addGiftCardCheck && (
                <div className="want_gift_card_inputs">
                  <div>
                    <label htmlFor="sender_name">Gift voucher name</label>
                    <input
                      type="text"
                      id="sender_name"
                      placeholder="Eg. Amazon Card"
                      onChange={(e) => setDeliveryVoucherName(e.target.value)}
                      value={deliveryVoucherName}
                    />
                  </div>
                  <div>
                    <label htmlFor="sender_name">Voucher code</label>
                    <input
                      type="text"
                      id="sender_name"
                      placeholder="AHS$100"
                      onChange={(e) => setDeliveryVoucherCode(e.target.value)}
                      value={deliveryVoucherCode}
                    />
                  </div>
                  <div>
                    <label htmlFor="sender_name">Voucher amount</label>
                    <input
                      type="text"
                      id="sender_name"
                      placeholder="$100"
                      onChange={(e) => setDeliveryVoucherAmount(e.target.value)}
                      value={deliveryVoucherAmount}
                    />
                  </div>
                </div>
              )}
            </div>
            {/*  */}
            <div>
              <input
                type="checkbox"
                id="add_video"
                checked={addVideoCheck}
                onChange={() => setAddVideoCheck(!addVideoCheck)}
              />
              <label htmlFor="add_video">Add video</label>
            </div>
            {/*  */}
            <div>
              <input type="checkbox" id="add_audio" />
              <label htmlFor="add_audio">Add Audio</label>
            </div>
            {/*  */}
            <div>
              <input type="checkbox" id="add_confetti" />
              <label htmlFor="add_confetti">Add confetti</label>
            </div>
            {/*  */}
            <div>
              <input type="checkbox" id="send_mails_check" />
              <label htmlFor="send_mails_check">
                Send list of signed signatures to my email
              </label>
            </div>
            {/*  */}
            <div>
              <input type="checkbox" id="set_reminder_check" />
              <label htmlFor="set_reminder_check">
                Set a reminder for next year
              </label>
            </div>
            {/*  */}
          </div>
          {/* <div className="coupon_input">
            <label htmlFor="coupon_input">Coupon Code</label>
            <div className="coupon_input_box">
              <input
                type="text"
                id="coupon_input"
                placeholder="Enter Code"
                onChange={(e) => setDeliveryCouponCode(e.target.value)}
                value={deliveryCouponCode}
              />
              <button>Apply</button>
            </div>
          </div> */}
          <button className="delivery_form_purchase_btn">Purchase Card</button>
        </form>
      </div>

      {/*  */}
      <div className="delivery_details_col_2">
        <div className="delivery_details_col_2_header">
          <h5>Order Summary</h5>
          <div className="delivery_details_img">
            {uploadedCard && <img src={uploadedCard} alt="" />}
            {!uploadedCard && <img src={deliver_details_icon} alt="" />}
          </div>
        </div>
        <div className="delivery_details_summary_row">
          <h4>Total</h4>
          <div>
            <p>Card Cover</p>
            <h6>₦4,999</h6>
          </div>
          {addVideoCheck && (
            <div>
              <p>Video ...</p>
              <h6>₦3,500</h6>
            </div>
          )}
          <div>
            <p>VAT (7.5%)</p>
            <h6>₦375</h6>
          </div>
          <div className="delievry_total_price">
            <p>Total Price</p>
            <h6>₦8,974</h6>
          </div>
        </div>
        <div className="delivery_details_summary_row_2">
          <h4>Pay With</h4>
          <div>
            <input type="radio" name="paywith" />
            <img src={payStackIcon} alt="" />
            <p>Paystack</p>
          </div>
          <div>
            <input type="radio" name="paywith" />
            <img src={payStackIcon} alt="" />
            <p>Flutterwave</p>
          </div>
        </div>
        <Link className="delivery_details_footer_link">Change Gift Card</Link>
      </div>
      <FillInAllFormDetails
        error_modal_1={error_modal_1}
        close_modal_1={close_error_modal_1}
      />
    </section>
  );
};

export default DeliveryDetails;
