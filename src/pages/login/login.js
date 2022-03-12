import "./login.css";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { ApiUrl } from './../constant';
// import other section

const Login = () => {
  const history = useHistory();

  const [msgOptVerify, SetVerify] = useState("");
  const [optVerify, setOptVerify] = useState(false);
  const [loginData, setLoginData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    var emailLogin = document.getElementById("txtEmailLogin").value;
    var passwordLogin = document.getElementById("txtPasswordLogin").value;
    var validateemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validatepassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (emailLogin === null || emailLogin === "") {
      alert("Email can't be empty.");
      return false;
    } else if (!emailLogin.match(validateemail)) {
      alert('Email should be in correct format as "xyz@abc.com/in/org".');
      return false;
    } else if (passwordLogin === null || passwordLogin === "") {
      alert("Password can't be empty.");
      return false;
    } else if (
      !passwordLogin.match(validatepassword) ||
      passwordLogin === null ||
      passwordLogin === ""
    ) {
      alert("Invalid user name and password.");
      return false;
    } else {
      axios
        .post(`${ApiUrl}Authenticate/UserAuthenticate`, {
          username: emailLogin,
          password: passwordLogin,
        })
        .then(
          (response) => {
              axios
                .get(`${ApiUrl}Authenticate/VerifyOTP`)
                .then((response1) => {
                  if (response1) {
                    setLoginData(response);
                    setOptVerify(true);
                  } else {
                    setOptVerify(true);
                  }
                },
                (error) => {
                  alert("Something Went Wrong! Please try again.");
                  console.log(error);
                });            
          },
          (error) => {
            alert("Something Went Wrong! Please try again.");
            console.log(error);
          }
        );
    }
  }

  const handleSubmitOTP = () => {
    const OtpValue = Number(document.getElementById("txtOTP").value);
    axios
      .post(`${ApiUrl}Authenticate/OtpVerification`, {
        OTPText: OtpValue,
      })
      .then(
        (response) => {
          if (response.data === "Verify") {
            setOptVerify(true);
            console.log("loginData", loginData);
            localStorage.setItem("UserId", loginData.data.id);
            localStorage.setItem("UserName", loginData.data.userName);
            localStorage.setItem("TokenId", loginData.data.tokenId);
            localStorage.setItem("IpAddress", loginData.data.ipAddress);
            localStorage.setItem("Email", loginData.data.emailId);
            afterLogin();
          } else {
            setOptVerify(true);
            SetVerify("Your OTP is incorrect.Please enter correct OTP");

            setOptVerify(true);
          }
        },
        (error) => {
          SetVerify("Your OTP is incorrect.Please enter correct OTP");
        }
      );
  };

  const resendOTP = () => {
    axios.get(`${ApiUrl}Authenticate/VerifyOTP`).then(
      (response) => {
        if (response) {
          debugger;
          SetVerify("");
        } else {
          alert(response);
          setOptVerify(true);
          console.log("error", response);
        }
      },
      (error) => {
        alert("Something Went Wrong! Please try again.");
        console.log(error);
      }
    );
  };
  const afterLogin = useCallback(() => {history.push("/");
  window.location.reload(true);
}
  , [history]);
  return (
    <section className="login">
      <section
        id="newsletter_section"
        className="newsletter_section animate__animated animate__faster"
      >
        <div className="container">
          <div className="row">
            <div className="newsletter_box col-12">
              {!optVerify && (
                <div className="box_bg text-center">
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-wrap align-items-center justify-content-center"
                  >
                  <h3>Login</h3>
                    <div className="form_box input-box">
                      <input
                        type="email"
                        id="txtEmailLogin"
                        className="form_box_input input"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="form_box input-box">
                      <input
                        type="password"
                        id="txtPasswordLogin"
                        className="form_box_input input"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form_box forget-box input-box">
                      <a href="#">Forget Password?</a>
                    </div>
                    <div className="form_box btn-box">
                      <button type="submit" className="btn">
                        Login
                      </button>
                    </div>
                    {/* <div className="form_box or-box input-box text-center">
                    <p>OR</p>
                  </div>
                  <div className="form_box sign-box forget-box input-box text-center">
                    <a href="/register">Sign Up</a>
                  </div> */}
                  </form>
                </div>
              )}{" "}
              {optVerify && (
                <div className="box_bg text-center">
                  <h3>Verify OTP</h3>
                  <div className=" align-items-center justify-content-center">
                    <div className="form_box input-box">
                      <input
                        id="txtOTP"
                        className=" blue-text input"
                        placeholder="Enter OTP"
                      />
                    </div>
                    <div className="form_box btn-box">
                      <button
                        className="btn blue-btn"
                        type="submit"
                        onClick={handleSubmitOTP}
                      >
                        submit
                      </button>
                    </div>
                    <div className="form_box or-box input-box text-center">
                      <p>OR</p>
                    </div>
                    <div className="form_box forget-box input-box">
                      <p className="text-red">{msgOptVerify}</p>
                    </div>
                    <div className="form_box btn-box ">
                      <button type="submit" className="btn blue-btn" onClick={resendOTP}>
                        Resend OTP
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
