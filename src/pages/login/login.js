import './login.css';
import axios from 'axios';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

// import other section

const Login = () => {
  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault();
    var emailLogin = document.getElementById("txtEmailLogin").value;
    var passwordLogin = document.getElementById("txtPasswordLogin").value;
    var validateemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validatepassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (emailLogin === null || emailLogin === "") {
      alert("Email can't be empty.");
      return false;
    } else if (!emailLogin.match(validateemail)) {
      alert(
        'Email should be in correct format as "xyz@abc.com/in/org".'
      );
      return false;
    } else if (passwordLogin === null || passwordLogin === "") {
      alert("Password can't be empty.");
      return false;
    } else if (
      !passwordLogin.match(validatepassword) ||
      passwordLogin === null ||
      passwordLogin === ""
    ) {
      alert(
        "Invalid user name and password."
      );
      return false;
    } else {
      axios.post(`https://vicearmory.com/armoryApi/api/v1/Authenticate/Authenticate`, {
        username: emailLogin,
        password: passwordLogin
      }).then((response) => {
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
                <h3>Login</h3>
                <form onSubmit={handleSubmit} className="d-flex flex-wrap align-items-center justify-content-center">
                  <div className="form_box input-box">
                    <input type="email" id="txtEmailLogin" className="form_box_input input" placeholder="Your email" />
                  </div>
                  <div className="form_box input-box">
                    <input type="password" id="txtPasswordLogin" className="form_box_input input" placeholder="Password" />
                  </div>
                  <div className="form_box forget-box input-box">
                    <a href="#">Forget Password?</a>
                  </div>
                  <div className="form_box btn-box">
                    <button type="submit" className="btn">Login</button>
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
