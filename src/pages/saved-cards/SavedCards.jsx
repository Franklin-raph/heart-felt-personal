import React, { useState } from 'react'
import UploadCardNav from '../../components/upload-card-nav/UploadCardNav'
import { useNavigate } from 'react-router-dom'
import amazonImage from '../../assets/images/delivery-details-img.png'

const SavedCards = () => {
    const navigate = useNavigate()
    const [isEditCardOpen, setIsEditCardOpen] = useState(false)

    const gift_card = [
      {
        card_title: "Modern New Year Celeb....",
        card_text: "New Year"
      },
        {
          card_title: "Modern New Year Celeb....",
          card_text: "New Year"
        },
      {
        card_title: "Modern New Year Celeb....",
        card_text: "New Year"
      },
        {
          card_title: "Modern New Year Celeb....",
          card_text: "New Year"
        },
      {
        card_title: "Modern New Year Celeb....",
        card_text: "New Year"
      },
        {
          card_title: "Modern New Year Celeb....",
          card_text: "New Year"
        },
      {
        card_title: "Modern New Year Celeb....",
        card_text: "New Year"
      },
        {
          card_title: "Modern New Year Celeb....",
          card_text: "New Year"
        },
      ];

  return (
    <div className='saved-card'>
        <div className="upload-card-nav flex-between g-3">
          <button onClick={()=> navigate("/upload-card-cover-birthday")}>Cancel</button>
          <div className='edit_and_continue'>
            <button className='primary-button' onClick={() => navigate("/preview-uploaded-card")}>Continue</button>
          </div>
        </div>
        <div className="upload-card-container flex-center">
            <div className="header">
                <h2>What card cover will you use?</h2>
                <div className='flex-center g-2' style={{ fontSize:"13px", color:"var(--body-texts)" }}>
                    <p onClick={()=> navigate("/upload-card")} style={{ all:"unset", cursor:"pointer" }}>Upload</p>
                    <p onClick={()=> navigate("/saved-card")} style={{ border:"1px solid var(--primary-color)", padding:"2px 16px", color:"var(--primary-color)", borderRadius:"6px" }} >Saved Covers</p>
                </div>
            </div>
            <div className="body">
              {gift_card.map((card, i) => (
                <div key={i} onClick={() => setIsEditCardOpen(true)}>
                  <div className="gift_card_segment_card_img image"></div>
                  <h4>{card.card_title}</h4>
                  <p>{card.card_text}</p>
                </div>
              ))}
            </div>
        </div>
        {
          isEditCardOpen ?
            <div className='editCardModalBg flex-center'>
                <div className="editCardModal">
                    <div className="header flex-between">
                        <h4>Edit Card Cover</h4>
                        <i class="ri-close-fill"  onClick={() => setIsEditCardOpen(false)}></i>
                    </div>
                    <div className="modal-body flex-center">
                      <img src={amazonImage} alt="" />
                      <div className="controls flex-center g-1">
                        <i class="ri-zoom-in-line"></i>
                        <i class="ri-zoom-out-line"></i>
                        <i class='bx bx-rotate-right'></i>
                        <i class='bx bx-rotate-left'></i>
                        <i class="fa-solid fa-up-right-and-down-left-from-center upToDown"></i>
                        <i class="fa-solid fa-up-right-and-down-left-from-center rightToLeft"></i>
                        <i class="ri-loop-right-fill"></i>
                      </div>
                    </div>
                    <div className="footer flex-between">
                      <p></p>
                      <div>
                        <button className='secondary-button' onClick={() => setIsEditCardOpen(false)}>Cancel</button>
                        <button className='primary-button'>Save Changes</button>
                      </div>
                    </div>
                </div>
            </div>:""
        }
    </div>
  )
}

export default SavedCards