import "./signup-verified.css";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// import other section

const SignupVerified = () => {
  const [verify, setVerify] = useState(false);
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("Email");
  const id = new URLSearchParams(search).get("Id");
  useEffect(() => {
    // debugger;
    // console.log("name", name);
    // console.log("id", id);
     verfiy();
    // setMsgSuccess("Successfull Please");
  });
  const history = useHistory();
  const verfiy = () => {
    axios
      .post(`https://localhost:44369/api/v1/User/VerifyUser`, {
        email: name,
        id: id,
        firstName: "Vice",
        lastName: "Armory",
        mobile: "9898989898",
        password: "Test@123",
      })
      .then(
        (response) => {
          if (response.data === "EMAILVERIFIED") {
            alert("Email is Verified please login");
            setVerify(true)
            afterVerify();
          }
        },
        (error) => {
          alert("Something Went Wrong! Please try again.");
          setVerify(false)
        }
      );
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  const afterVerify = useCallback(() => history.push("/"), [history]);
  return (
    <section className="login">
    {verfiy && <div className="text-center p-5">
        <h1>Welcome</h1>
     <p>Your Account is Verified.Please Login.</p>
      </div>}
     {!verfiy &&  <form
        onSubmit={handleSubmit}
        className="d-flex flex-wrap align-items-center justify-content-center"
      >
        {/* <div className="form_box input-box">
          <input
            type="email"
            id="txtEmailLogin"
            className="form_box_input input"
            placeholder="Your email"
          />
        </div>
        <div className="form_box btn-box">
          <button type="submit" className="btn">
            Verify
          </button>
        </div>
        {/* <div className="form_box or-box input-box text-center">
                    <p>OR</p>
                  </div>
                  <div className="form_box sign-box forget-box input-box text-center">
                    <a href="/register">Sign Up</a>
                  </div> */}
      </form>}
    </section>
  );
};

export default SignupVerified;
