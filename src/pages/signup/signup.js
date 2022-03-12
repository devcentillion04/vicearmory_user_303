import "./signup.css";
import axios from "axios";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import {ApiUrl } from "./../constant";
// import other section

const Signup = () => {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    var firstNameReg = document.getElementById("txtFirstNameReg").value;
    var middleNameReg = document.getElementById("txtMiddleNameReg").value;
    var lastNameReg = document.getElementById("txtLastNameReg").value;
    var mobileNoReg = document.getElementById("txtMobileReg").value;
    var emailReg = document.getElementById("txtEmailReg").value;
    var passwordReg = document.getElementById("txtPasswordReg").value;
    var confirmpassword = document.getElementById(
      "txtConfirmPasswordReg"
    ).value;
    var phoneValidate = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var validateemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validatepassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (firstNameReg === null || firstNameReg === "") {
      alert("First Name can't be empty.");
      return false;
    } else if (middleNameReg === null || middleNameReg === "") {
      alert("Middle Name can't be empty.");
      return false;
    } else if (lastNameReg === null || lastNameReg === "") {
      alert("Last Name can't be empty.");
      return false;
    } else if (mobileNoReg === null || mobileNoReg === "") {
      alert("Mobile Number can't be empty.");
      return false;
    }  else if (!mobileNoReg.match(phoneValidate)) {
      alert("Mobile Number should be correct formate.");
      return false;
    } else if (!emailReg.match(validateemail)) {
      alert('Email should be in correct format as "xyz@abc.com/in/org".');
      return false;
    } else if (passwordReg === null || passwordReg === "") {
      alert("Password can't be empty.");
      return false;
    } else if (
      !passwordReg.match(validatepassword) ||
      passwordReg === null ||
      passwordReg === ""
    ) {
      alert(
        "Password has 6 character length which includes 1 Special Character, 1 Capical Alphabet, 1 Numeric value and alaphabets"
      );
      return false;
    } else if (confirmpassword == null || confirmpassword == "") {
      alert("Confirm password can't be empty.");
      return false;
    } else if (!confirmpassword.match(passwordReg)) {
      alert("Password didn't match, so please type correct password.");
      return false;
    } else {
      axios
        .post(`${ApiUrl}User/UserSignup`, {
          userName:firstNameReg + lastNameReg,
          firstName:firstNameReg,
          lastName:lastNameReg,
          middleName:middleNameReg,
          mobileNo:mobileNoReg,
          email: emailReg,
          password: passwordReg,
          CreatedDate:new Date(),
          CreatedBy:firstNameReg,
          IsAdmin:false,
          IsVendor:false,
          IsUser:true
        })
        .then(
          (response) => {
            if (response) {
              console.log('response',response)
              alert(response.data)
              afterSignup();
            }
          },
          (error) => {
            alert("Something Went Wrong! Please try again.");
            console.log(error);
          }
        );
    }
  }
  const afterSignup = useCallback(() =>{ history.push("/");
  window.location.reload(true);
}, [history]);
  return (
    <section className="login">
      <section
        id="newsletter_section"
        className="newsletter_section animate__animated animate__faster"
      >
        <div className="container">
          <div className="row">
            <div className="newsletter_box col-12">
              <div className="box_bg text-center">
                <h3>Sign Up</h3>
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-wrap align-items-center justify-content-center"
                >
                  <div className="form_box input-box">
                    <input
                      type="text"
                      id="txtFirstNameReg"
                      className="form_box_input input"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div className="form_box input-box">
                    <input
                      type="text"
                      id="txtMiddleNameReg"
                      className="form_box_input input"
                      placeholder="Your Middle Name"
                    />
                  </div>
                  <div className="form_box input-box">
                    <input
                      type="text"
                      id="txtLastNameReg"
                      className="form_box_input input"
                      placeholder="Your Last Name"
                    />
                  </div>
                  <div className="form_box input-box">
                    <input
                      type="text"
                      id="txtMobileReg"
                      className="form_box_input input"
                      placeholder="Your Mobile No"
                    />
                  </div>
                  <div className="form_box input-box">
                    <input
                      type="email"
                      id="txtEmailReg"
                      className="form_box_input input"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="form_box input-box">
                    <input
                      type="password"
                      id="txtPasswordReg"
                      className="form_box_input input"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form_box input-box">
                    <input
                      type="password"
                      id="txtConfirmPasswordReg"
                      className="form_box_input input"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="form_box btn-box">
                    <button type="submit" className="btn">
                      Sign Up
                    </button>
                  </div>
                  <div className="form_box or-box input-box text-center">
                    <p>OR</p>
                  </div>
                  <div className="form_box sign-box forget-box input-box text-center">
                    <a href="/login">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Signup;
