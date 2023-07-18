import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <form className="sign-in-form flex-center">
        <div className="header">
          <h1>Get started for free</h1>
          <p>
            Already have an account? <Link to="/sign-in">login</Link>
          </p>
        </div>
        <div className="continue-with-google flex-center">
          <i className="ri-google-fill"></i>
          <p>Continue with Google</p>
        </div>
        <div className="center-line flex-center">
          <div className="line1 flex-center g-1">
            <p className="or_line"></p>
            <p>or</p>
            <p className="or_line"></p>
          </div>
        </div>
        <div className="inputs">
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="full name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="Password" placeholder="password" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" placeholder="country" />
          </div>
        </div>
        <input
          type="submit"
          value="Create Account"
          className="submit-btn primary-button"
        />
        <div className="sign-up-form-footer">
          By signing up, i agree to Heartfelt's{" "}
          <Link to="/terms-and-conditions">Terms of services</Link> and{" "}
          <Link to="/terms-and-conditions">Privacy Policy</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
