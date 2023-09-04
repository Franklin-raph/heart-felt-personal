import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const AccountVerification = ({baseUrl}) => {
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const navigate = useNavigate()
    const {token} = useParams()
    const [isSuccess, setIsSuccess] = useState()
    useEffect(() => {
      if (!user_info) {
        navigate("/verify/:token");
      }
      verifyAccount()

      console.log(token)
    }, []);

    async function verifyAccount(){
      const response = await fetch(`${baseUrl}/verify/${token}`)
      const data = await response.json()
      if(response.ok) setIsSuccess(true)
      if(!response.ok) setIsSuccess(false)
      console.log(response, data)
    }
  
  return (
    <div>
      <div className="sign-in-form flex-center" style={{ padding:"3rem 1rem" }}>
        <div className="header" style={{ marginBottom:"1rem" }}>
          {isSuccess && <i class='bx bxs-check-circle' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#299e9e" }}></i>}
          {/* <i class='' style='color:#ffffff' ></i> */}
          {!isSuccess && <i class='bx bxs-x-circle' style={{ fontSize:"3rem", marginBottom:"1rem", color:"#E20809" }}></i>}
          {isSuccess && <h1>Account Verification Successful</h1>}
          {!isSuccess && <h1>Account Verification Un-Successful</h1>}
        </div>
        {isSuccess && <p style={{ marginBottom:"1rem", textAlign:"center" }}>Your Account has being verified successfully, please proceed to login using the button below</p>}
        {!isSuccess && <p style={{ marginBottom:"1rem", textAlign:"center" }}>invalid verification link, please check the link again or proceed to login using the button below</p>}
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