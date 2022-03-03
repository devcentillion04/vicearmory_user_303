import './post_section.css';

// import other section

function PostSection() {
  return (
    <section id="gallery_section" className="gallery_section animate__slideInUp animate__animated">
      <div className="container">
        <div className="row">
          <div className="gallery_title page_title col-12 text-center">
            <div className="page_title_box">
              <h2 className="text-uppercase m-0">Gallery</h2>
            </div>
          </div>
        </div>
        <div className="gallery_post row popup-gallery">
          <div className="post_box animate__animated animate__slideInUp animate__faster col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <a href="./Assets/gallery/image_1.png" className="gallrey_popup">
                  <img src="./Assets/gallery/image_1.png" alt="image_1" />
                </a>
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__slideInUp animate__faster col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <a href="./Assets/gallery/image_2.png" className="gallrey_popup">
                  <img src="./Assets/gallery/image_2.png" alt="image_2" />
                </a>
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__slideInUp animate__faster col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <a href="./Assets/gallery/image_3.png" className="gallrey_popup">
                  <img src="./Assets/gallery/image_3.png" alt="image_3" />
                </a>
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__slideInUp animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <a href="./Assets/gallery/image_4.png" className="gallrey_popup">
                  <img src="./Assets/gallery/image_4.png" alt="image_4" />
                </a>
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__slideInUp animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <a href="./Assets/gallery/image_5.png" className="gallrey_popup">
                  <img src="./Assets/gallery/image_5.png" alt="image_5" />
                </a>
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__slideInUp animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <a href="./Assets/gallery/image_6.png" className="gallrey_popup">
                  <img src="./Assets/gallery/image_6.png" alt="image_6" />
                </a>
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__slideInUp animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <a href="./Assets/gallery/image_7.png" className="gallrey_popup">
                  <img src="./Assets/gallery/image_7.png" alt="image_7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostSection;
