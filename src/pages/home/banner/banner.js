import './banner.css';

// import other section

function Banner() {
  return (
    <section className="banner_section">
      <div className="owl-carousel owl-theme">
        <div className="item">
          <div className="banner_img">
            <img src="./Assets/Banner.jpg" alt="banner_1" />
          </div>
        </div>
        <div className="item">
          <div className="banner_img">
            <img src="./Assets/Banner_2.jpg" alt="banner_1" />
          </div>
        </div>
    </div>
    </section>
  );
}

export default Banner;
