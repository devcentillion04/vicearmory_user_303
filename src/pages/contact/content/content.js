import './content.css';

// import other section
// import Newsletter from '../home/newsletter/newsletter';

function Content() {
  return (
    <section id="gallery_section" className="content gallery_section animate__slideInUp animate__animated">
      <div className="container">
        <div className="row">
          <div className="gallery_title page_title col-12 text-center">
            <div className="page_title_box">
              <h2 className="text-uppercase m-0">Contact US</h2>
            </div>
          </div>
          <div className="col-xs-12 col-6 col-lg-6  mt-5 space-contact-div">
            <div className="content_box">
              <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">
                <h5>For general sales & inquiries</h5>
                <ul>
                  <li><a href="mailto:info@vicearmory.com" className="a-link">info@vicearmory.com</a></li>
                </ul>
              </div>
              <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">
                {/* <h5>For Customer Work inquiries & Pricing</h5> */}
                <ul>
                  <li><a href="mailto:custom@vicearmory.com" className="a-link">custom@vicearmory.com</a></li>
                </ul>
              </div>
              <div className="box_content_social box_content col-xl-12 col-lg-12 col-sm-12 col-xs-12 col-12">
                {/* <h5>For Customer Work inquiries & Pricing</h5> */}
                <div className="social_box nav_box">
                  <ul className="d-flex aling-items-center flex-wrap">
                    <li>
                      <a href="https://www.facebook.com/vicearmory" className="facebook"  target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
                          <g id="facebook" transform="translate(-1034 -4441)">
                            <path id="Background" d="M20.5,41A20.5,20.5,0,1,0,0,20.5,20.5,20.5,0,0,0,20.5,41Z" transform="translate(1034 4441)" fill="#fff" />
                            <path id="Facebook_Icon" data-name="Facebook Icon" d="M5.537,2.244a3.523,3.523,0,0,0-1.024-.169c-.416,0-1.312.287-1.312.844V4.253H5.329V6.5H3.2V12.69H1.056V6.5H0V4.253H1.056V3.122C1.056,1.418,1.792,0,3.569,0A8.08,8.08,0,0,1,5.857.253Z" transform="translate(1051.571 4457)" fill="#080809" />
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/vicearmory/" className="insta"  target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 45 45">
                          <g id="insta" transform="translate(-1100 -4441)">
                            <path id="Background" d="M22.5,45A22.5,22.5,0,1,0,0,22.5,22.5,22.5,0,0,0,22.5,45Z" transform="translate(1100 4441)" fill="#fff" />
                            <g id="instagram_1" data-name="instagram 1" transform="translate(1115 4455)">
                              <g id="Group">
                                <g id="Group-2" data-name="Group">
                                  <path id="Vector" d="M13.656,0H2.344A2.347,2.347,0,0,0,0,2.344V13.656A2.346,2.346,0,0,0,2.344,16H13.656A2.346,2.346,0,0,0,16,13.656V2.344A2.346,2.346,0,0,0,13.656,0Zm1.406,13.656a1.408,1.408,0,0,1-1.406,1.406H2.344A1.408,1.408,0,0,1,.938,13.656V2.344A1.408,1.408,0,0,1,2.344.938H13.656a1.408,1.408,0,0,1,1.406,1.406Z" />
                                </g>
                                <g id="Group-3" data-name="Group">
                                  <path id="Vector-2" data-name="Vector" d="M.938,0a.938.938,0,1,0,.938.938A.939.939,0,0,0,.938,0Z" transform="translate(12.219 1.906)" />
                                </g>
                                <g id="Group-4" data-name="Group">
                                  <path id="Vector-3" data-name="Vector" d="M4.219,0A4.219,4.219,0,1,0,8.438,4.219,4.223,4.223,0,0,0,4.219,0Zm0,7.5A3.281,3.281,0,1,1,7.5,4.219,3.285,3.285,0,0,1,4.219,7.5Z" transform="translate(3.781 3.781)" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
                          <g id="twitter" transform="translate(-1170 -4443)">
                            <path id="Background" d="M20.5,41A20.5,20.5,0,1,0,0,20.5,20.5,20.5,0,0,0,20.5,41Z" transform="translate(1170 4443)" fill="#fff" />
                            <path id="Vector" d="M16,1.539a6.839,6.839,0,0,1-1.89.518A3.262,3.262,0,0,0,15.553.244a6.555,6.555,0,0,1-2.08.794A3.28,3.28,0,0,0,7.8,3.281a3.378,3.378,0,0,0,.076.748A9.284,9.284,0,0,1,1.114.6,3.281,3.281,0,0,0,2.122,4.982a3.239,3.239,0,0,1-1.482-.4v.036A3.3,3.3,0,0,0,3.268,7.837a3.274,3.274,0,0,1-.86.108,2.9,2.9,0,0,1-.621-.056,3.311,3.311,0,0,0,3.065,2.285,6.591,6.591,0,0,1-4.067,1.4A6.144,6.144,0,0,1,0,11.528,9.234,9.234,0,0,0,5.032,13a9.272,9.272,0,0,0,9.336-9.334c0-.145-.005-.285-.012-.424A6.544,6.544,0,0,0,16,1.539Z" transform="translate(1182 4457)" fill="#080809" />
                          </g>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="tel:(810) 412-4749" className="mt-1 pt-1 color-white" >
                        <i class="fa fa-phone-alt p-10" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="box_form box_content col-12">
                <form action="" method="post" className="d-flex flex-wrap align-items-center justify-content-center">
                  <div className="form_box input-box">
                    <input type="text" className="form_box_input input" placeholder="Name" />
                  </div>
                  <div className="form_box input-box">
                    <input type="email" className="form_box_input input" placeholder="Email" />
                  </div>
                  <div className="form_box btn-box">
                    <button type="submit" className="btn">Login</button>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="col-xs-12 col-6 col-lg-6">
            <iframe className="map-style" width="100%" height="500" src="https://maps.google.com/maps?q=5360 N State Rd, Davison, MI 48423&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;