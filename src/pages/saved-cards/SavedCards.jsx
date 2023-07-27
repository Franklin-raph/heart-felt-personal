import React from 'react'
import UploadCardNav from '../../components/upload-card-nav/UploadCardNav'
import { useNavigate } from 'react-router-dom'

const SavedCards = () => {
    const navigate = useNavigate()

    const gift_card = [
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Modern New Year Celeb...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
        {
          card_title: "Gold Happy Birthday Ca...",
          card_price: "₦500",
          card_maxPrice: "₦50,000",
        },
      ];

  return (
    <div>
        <UploadCardNav />
        <div className="upload-card-container flex-center">
            <div className="header">
                <h2>What card cover will you use?</h2>
                <div className='flex-center g-2' style={{ fontSize:"13px", color:"var(--body-texts)" }}>
                    <p onClick={()=> navigate("/upload-card")} style={{ all:"unset", cursor:"pointer" }}>Upload</p>
                    <p onClick={()=> navigate("/saved-card")} style={{ border:"1px solid var(--primary-color)", padding:"2px 16px", color:"var(--primary-color)", borderRadius:"6px" }} >Saved Covers</p>
                </div>
            </div>
            <div className="body">
            
            </div>
        </div>
    </div>
  )
}

export default SavedCards