import React from 'react'

const Occasions = () => {
  return (
    <div style={{ padding:"0 3rem" }}>
        <div className='parent-container-padding flex-between occasion-tab'>
            <button className="occasions flex-between g-1">
                <p>Occasions</p>
                <i class="ri-arrow-down-s-line"></i>
            </button>
            <ul className='flex-between g-3'>
                <li>Birthday</li>
                <li>Annivasary</li>
                <li>Goodwill</li>
                <li>Festival</li>
                <li>Sympathy</li>
                <li>Love</li>
                <li>Relationship</li>
            </ul>
            <button className="occasions">
            Try Demo
            </button>
        </div>
    </div>
  )
}

export default Occasions