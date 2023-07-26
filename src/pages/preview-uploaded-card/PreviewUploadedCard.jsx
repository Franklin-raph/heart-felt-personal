import React from 'react'
import UploadCardNav from '../../components/upload-card-nav/UploadCardNav'
import deliver_details_icon from "../../assets/images/delivery-details-img.png";

const PreviewUploadedCard = () => {
  return (
    <div className='upload-card'>
      <UploadCardNav />
      <div className="upload-card-container-preview flex-center">
        <div className="header">
         <h2>What card cover will you use?</h2>
        </div>
        <div className="body">
          <img src={deliver_details_icon} alt="" />
        </div>
        <div className='flex-center'>
          <input type="checkbox" />
          <p style={{ color:"var(--body-texts)", fontSize:"13px", margin:"3px 0 0 5px" }}>Save my card cover</p>
        </div>
      </div>
    </div>
  )
}

export default PreviewUploadedCard