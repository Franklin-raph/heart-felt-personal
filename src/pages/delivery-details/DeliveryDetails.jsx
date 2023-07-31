import { Link } from "react-router-dom";
import deliver_details_image from "../../assets/images/delivery-details-img.png";
import payStackIcon from "../../assets/images/paystack.svg"

const DeliveryDetails = () => {
  return (
    <section className="delivery_details_section">
      <div className="delivery_details_col_1">
        <div className="delivery_details_col_1_header">
          <h2>Delivery Details</h2>
          <h4>Sender Details</h4>
        </div>
        {/*  */}
        <form className="delivery_details_form">
          <div className="input_one">
            <h5>Full Name</h5>
            <input type="text" className="delivery_name_input" placeholder="Eg. James Eze" />
          </div>
          <div className="input_two">
            <h5>Coupon Code</h5>
            <div className="coupon_input">
              <input type="text" placeholder="Enter Code" />
              <div className="delivery_form_btn">Apply</div>
            </div>
          </div>
          <button className="delivery_form_purchase_btn">Purchase Card</button>
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
                <input type="radio" name="paywith"/>
                <img src={payStackIcon} alt="" />
                <p>Paystack</p>
              </div>
              <div>
                <input type="radio" name="paywith"/>
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
