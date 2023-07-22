import React from "react";

const AddGiftCard = () => {
  // gift card array
  const gift_card = [
    {
      card_title: "Modern New Year Celeb...",
      card_price: `<span>₦500</span>
                <span>-</span>
                <span>₦50,000</span>`,
    },
  ];

  //
  return (
    <section className="add_gift_card_section">
      <div className="add_card_header">
        <h3>Add Gift Card</h3>
        <i className="bx bxs-user nav_profile_icon"></i>
      </div>
      {/*  */}
      <form className="search_gift_card_form">
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Which gift card do you want?" />
      </form>
      {/*  */}
      <div className="add_gift_segment">
        <div className="add_gift_card_header">
          <h5>Smart eGift Cards</h5>
          <p>
            Allow recipients to choose the brands they want when redeeming their
            gift card value. Give the gift of choice!.
          </p>
        </div>
        <div className="gift_card_segment_row row_1">
          {/*  */}
          <div className="gift_card_segment_card">
            <div className="gift_card_segment_card_img"></div>
            <div className="gift_card_segment_card_context">
              <h5>Gold Happy Birthdy Ca...</h5>
              <p>
                <span>₦500</span>
                <span>-</span>
                <span>₦50,000</span>
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      {/*  */}
      <div className="add_gift_segment">
        <div className="add_gift_card_header">
          <h5>Smart eGift Cards</h5>
          <p>
            Allow recipients to choose the brands they want when redeeming their
            gift card value. Give the gift of choice!.
          </p>
        </div>
        {/*  */}
        <div className="gift_card_segment_row row_2">
          {/* {gift_card.map((card))} */}
        </div>
      </div>
      {/*  */}
    </section>
  );
};

export default AddGiftCard;
