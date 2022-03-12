import './login.css';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {ApiUrl } from './../../constant';
// import other section

const Login = () => {
  const history = useHistory();

const [msgOptVerify,SetVerify] =useState("");
  function handleSubmit(e) {
    e.preventDefault();
    var optVerifyMsg = document.getElementById("txtOtpVerify").value;
    if (optVerifyMsg === null || optVerifyMsg === "") {
      alert("OTP can't be empty.");
      return false;
    } else {
      axios.post(`${ApiUrl}UserAccess/VerifyOTP`,null ).then((response) => {
        if (response) {

          localStorage.setItem('UserId', response.data.id);
          localStorage.setItem('UserName', response.data.userName);
          localStorage.setItem('TokenId', response.data.tokenId);
          localStorage.setItem('IpAddress', response.data.ipAddress);
          localStorage.setItem('Email', response.data.emailId);
          console.log('login', response);
          afterLogin();
          window.location.reload(true);
        }
        else {
          alert(response)
          console.log('error', response);
        }
      }, (error) => {
        alert('Something Went Wrong! Please try again.');
        console.log(error);
      })
    }
  }
  const afterLogin = useCallback(() => history.push('/dashboard'), []);
  return (
    <section className="login">
      <section id="newsletter_section" className="newsletter_section animate__animated animate__faster">
        <div className="container">
          <div className="row">
            <div className="newsletter_box col-12">
              <div className="box_bg text-center">
                <h3>OTP Verification</h3>
                <form onSubmit={handleSubmit} className="d-flex flex-wrap align-items-center justify-content-center">
                  
                  <div className="form_box input-box">
                    <input id="txtOtpVerify" className="form_box_input input" placeholder="enter OTP" />
                  </div>
                  <div className="form_box btn-box">
                    <button type="submit" className="btn">Submit</button>
                  </div>
                  <p>{msgOptVerify}</p>
                  <div className="form_box forget-box input-box">
                    <a href="#">Forget Password?</a>
                  </div>
                  {/* <div className="form_box or-box input-box text-center">
                    <p>OR</p>
                  </div>
                  <div className="form_box sign-box forget-box input-box text-center">
                    <a href="/register">Sign Up</a>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Login;
