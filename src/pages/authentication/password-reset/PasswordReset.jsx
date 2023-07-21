import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const PasswordReset = () => {

  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const navigate = useNavigate()
  useEffect(() => {
    if (!user_info) {
      navigate("/password-reset/:id/:token");
    }
  }, []);


  return (
    <div>
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
    </div>
  );
}

export default PasswordReset