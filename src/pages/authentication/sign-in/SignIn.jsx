import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../../components/alert/ErrorAlert";

const SignIn = ({baseUrl}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState()
  const [loader, setLoader] = useState(false)

  const navigate = useNavigate();
  //
  const user_info = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user_info) {
      navigate("/user-dashboard");
    }
  }, []);
  
  // on submit function
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(({email, password}))
    if(!email || !password){
      setError("Please fill in all fields")
    }else{
      setLoader(true)
      const response = await fetch(`${baseUrl}/login`, {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({email, password})
      })
      const data = await response.json()
      console.log(response, data)
      if(response) setLoader(false)
      if(!response.ok) setError(data.message)
      if(response.ok){
        localStorage.setItem("user", JSON.stringify(data))
        navigate("/")
      }
    }
  };
  //
  return (
    <div>
      {error && <ErrorAlert error={error} setError={setError}/>}
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
        {loader ?
          <button className="submit-btn primary-button">
            <i className="fa-solid fa-spinner fa-spin"></i>
          </button>
          :
          <input
            type="submit"
            value="Log in"
            className="submit-btn primary-button"
          />
        }
        <Link to="/forgotPassword">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default SignIn;
