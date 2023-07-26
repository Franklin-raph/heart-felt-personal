import React from 'react'
import UploadCardNav from '../../components/upload-card-nav/UploadCardNav'
import { useNavigate } from 'react-router-dom'

const SavedCards = () => {
    const navigate = useNavigate()
  return (
    <div>
        <UploadCardNav />
        <div className="upload-card-container flex-center">
            <div className="header">
                <h2>What card cover will you use?</h2>
                <div className='flex-center g-2'>
                    <p onClick={()=> navigate("/upload-card")} >Upload</p>
                    <p onClick={()=> navigate("/saved-card")} >Saved Covers</p>
                </div>
            </div>
            <div className="body">

            </div>
        </div>
    </div>
  )
}

export default SavedCards