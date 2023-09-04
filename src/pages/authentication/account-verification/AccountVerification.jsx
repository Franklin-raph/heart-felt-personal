import {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../assets/images/YouTube_loading_symbol_3_(transparent).gif'

const AccountVerification = ({baseUrl}) => {
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const navigate = useNavigate()
    const [pageLoader, setPageLoader] = useState(false)
    const {token} = useParams()
    const [isSuccess, setIsSuccess] = useState()
    useEffect(() => {
      // if (!user_info) {
      //   navigate("/verify/:token");
      // }
      verifyAccount()

      console.log(token)
    }, []);

    async function verifyAccount(){
      setPageLoader(true)
      const response = await fetch(`${baseUrl}/verify/${token}`)
      const data = await response.json()
      if(response) setPageLoader(false)
      if(response.ok) setIsSuccess(true)
      if(!response.ok) setIsSuccess(false)
      console.log(response, data)
    }
  
  return (
    <div>
      {pageLoader && 
        <div className='loader-bg'>
          <div className="loader">
            <img src={Loader} alt=""/>
          </div>
        </div>
      }
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
          onClick={navigate("/sign-in")}
        />
      </div>
    </div>
  )
}

export default AccountVerification