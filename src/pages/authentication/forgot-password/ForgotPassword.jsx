import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <form className="sign-in-form flex-center">
        <div className="header">
          <h1>Forgot your passord?</h1>
          <p>
            Enter email linked to your account. We'll send you a password reset
            email.
          </p>
        </div>
        <div className="inputs">
          <div>
            <label>Email Adress</label>
            <input type="email" placeholder="email address" />
          </div>
        </div>
        <input
          type="submit"
          value="Send reset email"
          className="submit-btn primary-button"
        />
        <Link to="/sign-in">Back to Login</Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
