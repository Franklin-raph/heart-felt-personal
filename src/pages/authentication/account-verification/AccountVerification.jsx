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
      <form className="sign-in-form flex-center">
        <div className="header" style={{ marginBottom:"1rem" }}>
          <i class='bx bxs-check-circle' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#299e9e" }}></i>
          <h1>Account Verification Successfull</h1>
        </div>
        <p style={{ marginBottom:"1rem" }}>Your Account has being verified successfully</p>
        <input
          type="submit"
          value="Ok"
          className="submit-btn primary-button"
        />
      </form>
    </div>
  )
}

export default AccountVerification