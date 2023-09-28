import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ErrorAlert from "../../../components/alert/ErrorAlert";
import SuccessAlert from "../../../components/alert/SuccessAlert";

const PasswordReset = ({baseUrl}) => {

  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loader, setLoader] = useState(false)
  const {token} = useParams()

  useEffect(() => {
    console.log(token)
    verifyToken()
  }, []);

  async function verifyToken(){
    setLoader(true)
    console.log(JSON.stringify({token:token}))
    const response = await fetch(`${baseUrl}/verify-password-reset`, {
      method:"POST",
      body: JSON.stringify({token:token}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    if(response) setLoader(false)
    const data = await response.json()
    if(response.ok){
      setSuccess(data.message)
    }
    if(!response.ok){
      setError(data.message)
    }
    console.log(data)
  }


  return (
    <div>
      {loader &&
        <div className='pageLoader-bg'>
          <div className="pageLoader">
            <i className="fa-solid fa-spinner fa-spin"></i>
            <p>Verifying password reset token please wait</p>
          </div>
        </div>
      }
      <form className="sign-in-form flex-center">
        <div className="header" style={{ marginBottom:"1rem" }}>
          <h1>Passord Reset</h1>
        </div>
        <div className="inputs">
          <div>
            <label>Password</label>
            <input type="password" placeholder="*******" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" placeholder="**********" />
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          className="submit-btn primary-button"
        />
      </form>
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
      {error && <ErrorAlert error={error} setError={setError} />}
    </div>
  );
}

export default PasswordReset