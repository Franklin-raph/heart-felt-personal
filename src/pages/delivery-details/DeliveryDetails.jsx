import { Link, useNavigate } from "react-router-dom";
import deliver_details_image from "../../assets/images/delivery-details-img.png";
import payStackIcon from "../../assets/images/paystack.svg"
import deliver_details_icon from "../../assets/images/delivery-details-card-sample.png";
import { useState } from "react";

const DeliveryDetails = () => {
  const [isTime, setIsTime] = useState(false);
  const [isDate, setIsDate] = useState(false);
  const [wantGiftCard, setWantGiftCard] = useState(true);
  const navigate = useNavigate()

  function submitCardDeliveryDetails(e){
    e.preventDefault()
  }

  //
  return (
    <section className="delivery_details_section">
      <div className="delivery_details_col_1">
        {/* Recipient Details */}
        <form className="delivery_details_form" onSubmit={submitCardDeliveryDetails}>
          <div className="recipient_details">
            <h4>Recipient Details</h4>
            <div>
              <label htmlFor="recipient_name">Full Name</label>
              <input
                type="text"
                id="recipient_name"
                placeholder="Eg. James Eze"
              />
            </div>
            <div>
              <label htmlFor="recipient_email">Email Address</label>
              <input
                type="email"
                id="recipient_email"
                placeholder="example@example.com"
              />
            </div>
          </div>
          {/* Sender Details */}
          <div className="recipient_details">
            <h4>Sender Details</h4>
            <div>
              <label htmlFor="sender_name">Full Name</label>
              <input type="text" id="sender_name" placeholder="Eg. James Eze" />
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
                  id="delivery_date"
                />
              </div>

              <div>
                <label htmlFor="delivery_time">Time</label>
                <input
                  type={isTime === true ? "time" : "text"}
                  onFocus={() => setIsTime(true)}
                  onBlur={() => setIsTime(false)}
                  placeholder="Eg. 12:00 Am"
                  id="delivery_time"
                />
              </div>
            </div>
            <div>
              <label htmlFor="delivery_time_zone">Time Zone</label>
              <input
                type="text"
                id="delivery_time_zone"
                placeholder="Eg. UTC +1"
              />
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
                  checked={wantGiftCard}
                  onChange={(e) => setWantGiftCard(!wantGiftCard)}
                />
                <label htmlFor="want_card_check">
                  I want to add Gift card{" "}
                  <i className="bx bxs-error-circle"></i>
                </label>
              </div>

              {wantGiftCard && (
                <div className="want_gift_card_inputs">
                  <div>
                    <label htmlFor="sender_name">Gift voucher name</label>
                    <input
                      type="text"
                      id="sender_name"
                      placeholder="Eg. Amazon Card"
                    />
                  </div>
                  <div>
                    <label htmlFor="sender_name">Voucher code</label>
                    <input type="text" id="sender_name" placeholder="AHS$100" />
                  </div>
                  <div>
                    <label htmlFor="sender_name">Voucher amount</label>
                    <input type="text" id="sender_name" placeholder="$100" />
                  </div>
                </div>
              )}
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
          <div className="coupon_input">
            <label htmlFor="coupon_input">Coupon Code</label>
            <div className="coupon_input_box">
              <input type="text" id="coupon_input" placeholder="Enter Code" />
              <button>Apply</button>
            </div>
          </div>
          <button className="delivery_form_purchase_btn" onClick={() => navigate("/payment-successful") }>Purchase Card</button>
        </form>
      </div>

      {/*  */}
      <div className="delivery_details_col_2">
        <div className="delivery_details_col_2_header">
          <h5>Order Summary</h5>
          <div className="delivery_details_img">
            <img src={deliver_details_image} alt="" />
          </div>
        </div>
        <div className="delivery_details_summary_row">
          <h4>Total</h4>
          <div>
            <p>Card Cover</p>
            <h6>₦4,999</h6>
          </div>
          <div>
            <p>Gift Card</p>
            <h6>₦3,500</h6>
          </div>
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
    </section>
  );
};

export default DeliveryDetails;
