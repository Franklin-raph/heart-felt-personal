import React from 'react'

const PaymentSuccessful = () => {
  return (
    <div>
      <div className="sign-in-form flex-center" style={{ padding:"3rem 1rem" }}>
        <div className="header" style={{ marginBottom:"1rem" }}>
          <i class='bx bxs-check-circle' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#299e9e" }}></i>
          <h1>Payment Successful</h1>
        </div>
        <p style={{ marginBottom:"1rem", textAlign:"center" }}>
        Your payment for contribution to the group card was completed. The recipient will be notified of your contribution.
        </p>
        <input
          type="submit"
          value="View Card"
          className="submit-btn primary-button"
        />
      </div>
    </div>
  )
}

export default PaymentSuccessful