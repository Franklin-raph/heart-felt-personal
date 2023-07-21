import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //
  const user_info = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    if (user_info) {
      navigate("/");
    }
  }, []);
  // on submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user_info", JSON.stringify(email));
    navigate("/");
  };
  //
  return (
    <div>
      <form className="sign-in-form flex-center" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Welcome Back</h1>
          <p>
            Don't have an account? <Link to="/sign-up">Start for free</Link>{" "}
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
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input
              type="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Log in"
          className="submit-btn primary-button"
        />
        <Link to="/forgotPassword">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default SignIn;
