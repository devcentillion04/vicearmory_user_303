import './image_with_text.css';

// import other section

function Imagewithtext() {
  return (
    <section id="image_with_text_section" className="image_with_text_section">
      <div className="container">
        <div className="row align-items-center">
          <div className="image_with_text_box image_with_text_box_1 animate__animated animate__faster col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <h4>Looking to Complete Your Dream Build?</h4>
              <p>We carry everything from stripped receivers to complete rifles, and everything in between. Whether you’re starting a fresh build, or trying to round up those
                last accessories to perfect your tactical set up, Vice Armory can get you what you need. We offer top quality products from highly recognized brands such as 
                Aero Precision, Palmetto State Armory, Magpul, Geissele, CMC, and much more. Aside from attachments and performance enhancing components, we offer valuable 
                services such as laser engraving and cerakote, at a price that we promise you won’t beat. Work with our in-house designers and gunsmiths to create your 
                dream build, and make all your range buddies jealous. Stop in today and see how Vice Armory can help you!</p>
          </div>
          <div className="image_with_text_box image_with_text_box_2 animate__animated animate__faster col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="image_box">
                <img src="./Assets/text_image.jpg" alt="text_image" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagewithtext;
