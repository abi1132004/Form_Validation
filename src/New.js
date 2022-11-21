/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const New = () => {
  return (
      /*
      <label className="name">Name</label>
      <input type="text" className="rectangle-3">Enter your name</input>
      <br></br>
      <span className="phone-number-e-mail">Phone Number&#x2F; E-mail ID</span>
      <div className="rectangle-9">Enter phone number&#x2F; e-mail id</div><br></br>
      <span className="password">Password</span>
      <div className="rectangle-8">
        <span className="enter-password">Enter password</span>
      </div><br></br>
      <span className="user-name">User Name</span>
      <div className="rectangle-27">
        <span className="enter-your-user-name">enter-your-user-name</span>
      </div><br></br>
      <button className="rectangle-28">
        <span className="register">Register</span>
      </button>
    </form>
    $ is a template literal*/
    <center>
    <form className="android-large-2">
        
      <img className="ellipse-7"/>
      <div className="rectangle-25">USER SIGN UP</div>
      <label className="name">Name : <input type="text" className="rectangle-3" placeholder="Enter your name"/></label>
      <label className="phone-number-e-mail">Phone Number&#x2F; E-mail ID<input type="password" className="rectangle-9" placeholder="Enter phone number&#x2F; e-mail id"/></label>
      <label className="password">Password<input type="password" className="rectangle-8" placeholder="Enter password"/></label>
      <label className="user-name">Username : <input type="text" className="rectangle-27" placeholder="Enter your Username"/></label>
      <button className="rectangle-28">
        <span className="register">Register</span>
      </button>
    </form>
    </center>
  );
};
export default New;