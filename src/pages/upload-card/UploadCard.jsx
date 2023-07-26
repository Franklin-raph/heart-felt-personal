import React from 'react'

const UploadCard = () => {
  return (
    <div className='upload-card'>

      <div className="upload-card-container flex-center">
        <div className="header">
         <h2>What card cover will you use?</h2>
         <div className='flex-center g-2'>
          <p>Upload</p>
          <p>Saved Covers</p>
         </div>
        </div>
        <div className="body">
          <i className='bx bx-images'></i>
          <p>Please upload and image or, Browse </p>
          <p>Maximum 5mb file size. 440px width and 550px height recommended</p>
          <p>
            <span></span>Animated Gifs
          </p>
          <p>
            <span></span>Files should contain 50 frames or less
          </p>
        </div>
      </div>
    </div>
  )
}

export default UploadCard