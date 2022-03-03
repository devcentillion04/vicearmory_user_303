import './newsletter.css';
import axios from 'axios';

// import other section

function Newsletter() {

  
  
  function handleSubmit(e) {
    e.preventDefault();
    var emailSubscribe = document.getElementById("txtMailSubscribe").value;
    var validateemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailSubscribe === null || emailSubscribe === "") {
      alert("Email can't be empty.");
      return false;
    } else if (!emailSubscribe.match(validateemail)) {
      alert(
        'Email should be in correct format as "xyz@abc.com/in/org".'
      );
      return false;
    } else {
      axios.post(`https://localhost:44369/api/v1/Newsletter/CreateNewsletter`, {
        email: emailSubscribe,
        })
        .then((response)=> {
          if(response) {
            alert('Suceessfully create news.');
            console.log('CreateNewsletters',response);            
          }
        }, (error) => {
          alert('Something Went Wrong! Please try again.');
          console.log(error);
        })
    }
  }

  return (
    <section id="newsletter_section" className="newsletter_section animate__animated animate__faster">
      <div className="container">
        <div className="row">
          <div className="newsletter_box col-12">
            <div className="box_bg text-center">
              <h3>Subscribe to get the latest news, exclusive deals, and special pricing on featured items.</h3>
              <form onSubmit={handleSubmit} className="d-flex flex-wrap align-items-center justify-content-center">
                <div className="form_box input-box">
                  <input type="email" id="txtMailSubscribe" className="form_box_input input" placeholder="Your email" />
                </div>
                <div className="form_box btn-box">
                  <button type="submit" className="btn">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
