import React from 'react';
import './Course.css'
import logo from "./LOGO.png"

export default function Course(){
    return(

        <div class="course">

<>
  <meta charSet="UTF-8" />
  <title>Login and Registration Form Example</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css"
  />
  <link rel="stylesheet" href="./style.css" />
  {/* partial:index.partial.html */}
  <nav className="main-nav">
    <ul>
      <li>
        <a className="signin" href="#0">
          Sign in
        </a>
      </li>
      <li>
        <a className="signup" href="#0">
          Sign up
        </a>
      </li>
    </ul>
  </nav>
  <div className="user-modal">
    <div className="user-modal-container">
      <ul className="switcher">
        <li>
          <a href="#0">Sign in</a>
        </li>
        <li>
          <a href="#0">New account</a>
        </li>
      </ul>
      <div id="login">
        <form className="form">
          <p className="fieldset">
            <label className="image-replace email" htmlFor="signin-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="signin-email"
              type="email"
              placeholder="E-mail"
            />
            <span className="error-message">
              An account with this email address does not exist!
            </span>
          </p>
          <p className="fieldset">
            <label className="image-replace password" htmlFor="signin-password">
              Password
            </label>
            <input
              className="full-width has-padding has-border"
              id="signin-password"
              type="password"
              placeholder="Password"
            />
            <a href="#0" className="hide-password">
              Show
            </a>
            <span className="error-message">Wrong password! Try again.</span>
          </p>
          <p className="fieldset">
            <input type="checkbox" id="remember-me" defaultChecked="" />
            <label htmlFor="remember-me">Remember me</label>
          </p>
          <p className="fieldset">
            <input className="full-width" type="submit" defaultValue="Login" />
          </p>
        </form>
        <p className="form-bottom-message">
          <a href="#0">Forgot your password?</a>
        </p>
        {/* <a href="#0" class="close-form">Close</a> */}
      </div>
      <div id="signup">
        <form className="form">
          <p className="fieldset">
            <label className="image-replace username" htmlFor="signup-username">
              Username
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-username"
              type="text"
              placeholder="Username"
            />
            <span className="error-message">
              Your username can only contain numeric and alphabetic symbols!
            </span>
          </p>
          <p className="fieldset">
            <label className="image-replace email" htmlFor="signup-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-email"
              type="email"
              placeholder="E-mail"
            />
            <span className="error-message">Enter a valid email address!</span>
          </p>
          <p className="fieldset">
            <label className="image-replace password" htmlFor="signup-password">
              Password
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-password"
              type="password"
              placeholder="Password"
            />
            <a href="#0" className="hide-password">
              Show
            </a>
            <span className="error-message">
              Your password has to be at least 6 characters long!
            </span>
          </p>
          <p className="fieldset">
            <input type="checkbox" id="accept-terms" />
            <label htmlFor="accept-terms">
              I agree to the{" "}
              <a className="accept-terms" href="#0">
                Terms
              </a>
            </label>
          </p>
          <p className="fieldset">
            <input
              className="full-width has-padding"
              type="submit"
              defaultValue="Create account"
            />
          </p>
        </form>
        {/* <a href="#0" class="cd-close-form">Close</a> */}
      </div>
      <div id="reset-password">
        <p className="form-message">
          Lost your password? Please enter your email address.
          <br /> You will receive a link to create a new password.
        </p>
        <form className="form">
          <p className="fieldset">
            <label className="image-replace email" htmlFor="reset-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="reset-email"
              type="email"
              placeholder="E-mail"
            />
            <span className="error-message">
              An account with this email does not exist!
            </span>
          </p>
          <p className="fieldset">
            <input
              className="full-width has-padding"
              type="submit"
              defaultValue="Reset password"
            />
          </p>
        </form>
        <p className="form-bottom-message">
          <a href="#0">Back to log-in</a>
        </p>
      </div>
      <a href="#0" className="close-form">
        Close
      </a>
    </div>
  </div>
  {/* partial */}
</>

       
</div>
     
                    
                 );
}

