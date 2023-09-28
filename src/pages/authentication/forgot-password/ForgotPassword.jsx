import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({ baseUrl }) => {
  const [email, setEmail] = useState();
  //
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: email }));
    try {
      const res = await fetch(`${baseUrl}/password-reset`, {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });
      const data = await res.json();
      console.log(data, res);
    } catch (err) {
      console.log(err);
    }
  };

  //
  return (
    <div>
      <form
        className="sign-in-form flex-center"
        onSubmit={handleForgotPassword}
      >
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
            <input
              type="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
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
