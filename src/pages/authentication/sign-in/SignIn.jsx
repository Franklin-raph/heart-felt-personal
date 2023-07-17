import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div>
        <form className='sign-in-form flex-center'>
            <div className="header">
                <h1>Welcome Back</h1>
                <p>Don't have an account <Link>Start for free</Link> </p>
            </div>
            <div className='continue-with-google flex-center'>
                <i class="ri-google-fill"></i>
                <p>Continue with Google</p>
            </div>
            <div className='center-line flex-center'>
                <div className='line1'></div>
                <p>or</p>
                <div className='line2'></div>
            </div>
            <div className="inputs">
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="Password" />
                </div>
            </div>
            <input type="submit" value="Log in" className='submit-btn primary-button'/>
            <Link>Forgot Password</Link>
        </form>
    </div>
  )
}

export default SignIn