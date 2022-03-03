import './gallery.css';

// import other section

function Gallery() {
  return (
    <section id="gallery_section" className="gallery_section animate__animated">
      <div className="container">
        <div className="row">
          <div className="gallery_title page_title col-12 text-center">
            <div className="page_title_box">
              <h2 className="text-uppercase m-0">Custom Work Gallery</h2>
            </div>
          </div>
        </div>
        <div className="gallery_post row">
          <div className="post_box animate__animated animate__faster col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <img src="./Assets/gallery/image_1.png" alt="image_1" />
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__faster col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <img src="./Assets/gallery/image_2.png" alt="image_2" />
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__faster col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <img src="./Assets/gallery/image_3.png" alt="image_3" />
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <img src="./Assets/gallery/image_4.png" alt="image_4" />
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <img src="./Assets/gallery/image_5.png" alt="image_5" />
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <img src="./Assets/gallery/image_6.png" alt="image_6" />
              </div>
            </div>
          </div>
          <div className="post_box animate__animated animate__fast col-lg-3 col-md-4 col-sm-12 col-12">
            <div className="box_content">
              <div className="content_img">
                <img src="./Assets/gallery/image_7.png" alt="image_7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
