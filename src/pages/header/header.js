import './header.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

// import other section

const Header = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [isUserName, setIsUserName] = useState(null);
  
    useEffect(() => {
    if (localStorage.length  ===  0 || localStorage.getItem('Email') === 'null') {
      setIsLogin(false);
    }
    else {
      setIsLogin(true);
      setIsUserName(localStorage.getItem('UserName'));
    }
  });
  function onLogout(e) {
    localStorage.setItem('UserId', null);
    localStorage.setItem('UserName', null);
    localStorage.setItem('TokenId', null);
    localStorage.setItem('IpAddress', null);
    localStorage.setItem('Email', null);
    afterLogout();
  }
  const afterLogout = useCallback(() => history.push('/'), [history]);      
  return (
    <header className="header" id="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="logo_img col-xl-1 col-lg-1 col-md-1 col-sm-3 col-4">
            <div className="img_box">
              <a href="/">
                <img src="./Assets/logo.png" alt="logo_image" />
              </a>
            </div>
          </div>
          <div className="header_nav col-xl-11 col-lg-11 col-md-11 col-sm-9 col-8">
            <nav className="navbar navbar-expand-lg justify-content-end p-0" >
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
                <span className="fas fa-bars"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <div className="svg_icon">
                  <button className="close_btn navbar_toggler_btn navbar-toggler col-12 p-0" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 492 492"><g><g><path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
                    c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
                    c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
                    L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
                    c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
                    c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
                    c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"></path></g></g></svg>
                  </button>
                </div>
                <ul className="navbar-nav flex-wrap ms-auto align-items-center mb-2 mb-md-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/gallery">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/weeklyads">Weekly Advertisement</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact Us</a>
                  </li>
                  {!isLogin && <li className="nav-item" >
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                  }
                  {!isLogin && <li className="nav-item nav-btn">
                    <a className="nav-link btn" href="/register">Sign up</a>
                  </li>}
                  {isLogin && <li className="nav-item fw-800" >
                    <a className="nav-link" href="/"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;{isUserName} | <span onClick={onLogout}>Logout</span></a>
                  </li>
                  }
                  <li className="nav-item search_icon">
                    <a className="nav-link" href="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23.906" height="23.91" viewBox="0 0 23.906 23.91">
                        <path id="search-solid" d="M23.581,20.672l-4.655-4.655a1.12,1.12,0,0,0-.794-.327H17.37a9.708,9.708,0,1,0-1.681,1.681v.761a1.12,1.12,0,0,0,.327.794l4.655,4.655a1.116,1.116,0,0,0,1.583,0l1.321-1.321A1.126,1.126,0,0,0,23.581,20.672ZM9.712,15.689a5.977,5.977,0,1,1,5.977-5.977A5.973,5.973,0,0,1,9.712,15.689Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <MessengerCustomerChat
        pageId="109784254814415"
        appId="604997234245001"
      />
    </header>
  );
}

export default Header;
