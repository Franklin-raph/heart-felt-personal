import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const AccountVerification = () => {
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const navigate = useNavigate()
    useEffect(() => {
      if (!user_info) {
        navigate("/account-verification/:id/:token");
      }
    }, []);
  
  return (
    <div>
      <div className="sign-in-form flex-center" style={{ padding:"3rem 1rem" }}>
        <div className="header" style={{ marginBottom:"1rem" }}>
          <i class='bx bxs-check-circle' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#299e9e" }}></i>
          <h1>Account Verification Successful</h1>
        </div>
        <p style={{ marginBottom:"1rem", textAlign:"center" }}>Your Account has being verified successfully</p>
        <input
          type="submit"
          value="Ok"
          className="submit-btn primary-button"
        />
      </div>
    </div>
  )
}

export default AccountVerification