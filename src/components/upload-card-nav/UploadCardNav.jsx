import React from 'react'

const UploadCardNav = () => {
  return (
    <div className="upload-card-nav flex-between">
      <button>Cancel</button>
      <div>
        <button className='secondary-button'>Edit Cover</button>
        <button className='primary-button'>Continue</button>
      </div>
    </div>
  )
}

export default UploadCardNav