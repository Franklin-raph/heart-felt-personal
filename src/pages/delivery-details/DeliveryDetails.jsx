import deliver_details_icon from "../../assets/images/delivery-details-img.png";

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
            <input type="text" placeholder="Eg. James Eze" />
          </div>
          <div className="input_two">
            <h5>Coupon Code</h5>
            <div className="coupon_input">
              <input type="text" placeholder="Enter Code" />
              <button>Apply</button>
            </div>
          </div>
        </form>
      </div>

      {/*  */}
      <div className="delivery_details_col_2">
        <div className="delivery_details_col_2_header">
          <h5>Order Summary</h5>
          <div className="delivery_details_img">
            <img src={deliver_details_icon} alt="" />
            <div className="delivery_details_summary_row">
              <h4>Total</h4>
              <div>
                <p>Card</p>
                <h6>₦4,999</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryDetails;
