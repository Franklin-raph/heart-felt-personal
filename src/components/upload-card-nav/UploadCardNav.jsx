import React from 'react'
import { useNavigate } from 'react-router-dom'

const UploadCardNav = () => {
  const navigate = useNavigate()
  return (
    <div className="upload-card-nav flex-between g-3">
      <button onClick={()=> navigate("/upload-card-cover")}>Cancel</button>
      <div className='edit_and_continue'>
        <button className='secondary-button'>Edit Cover</button>
        <button className='primary-button' onClick={() => navigate("/preview-uploaded-card")}>Continue</button>
      </div>
    </div>
  )
}

export default UploadCardNav