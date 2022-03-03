import "./featured.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
// import other section

const Featured = () => {
  const [weeksData, setWeeksData] = useState([]);
  const [isDisaplyProduct, setIsDisplayProduct] = useState(false);
  const [dialogOpen, isDialogOpen] = useState(false);
  const [productTitle, setProductTitle] = useState({});
  const [getFiles, setGetFiles] = useState();
  const [productId, setProductData] = useState();

  useEffect(() => {
    if ( localStorage.length  ===  0 || localStorage.getItem('Email') === 'null' )
    {
      setIsDisplayProduct(false);
    }
    else{
      
      setIsDisplayProduct(true);
    }
    fetchData();
    console.log("weeksData", weeksData);
  }, []);

  const fetchData = async () => {
    let { data } = await axios.get(
      `https://localhost:44369/api/v1/Product/GetProducts`
    );
    if (data) {
      if (data.length > 0) {
        setWeeksData(data);
      }
    }
  };
  function handleOpen(e) {
    isDialogOpen(true);
  }

  function handleClose(e) {
    isDialogOpen(false);
  }

  const uploadImg = (e) => {
    setProductData(e.target.id);
    console.log("thisdata", e);
    isDialogOpen(true);
    setProductTitle(e.target.title);
  };

  function handleUpload() {
    var bodyFormData = new FormData();
    bodyFormData.append("ProductImages", getFiles);
    var id = productId;
    axios({
      method: "post",
      url: `https://localhost:44369/api/v1/Product/ChangeProductImage?id=${id}`,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        //handle success
        if (response) {
          alert("Image updated");
          isDialogOpen(false);
          fetchData();
        }
      })
      .catch(function (response) {
        //handle error
        alert("Something Went Wrong! Please try again.");
        console.log(response);
      });
  }

  function setFile(e) {
    setGetFiles(e.target.files[0]);
  }
  return (
    <section id="featured_section" className="featured_section">
      <div className="container">
        <div className="row">
          <div className="featured_title page_title col-12 text-center">
            <div className="page_title_box">
              <h2 className="text-uppercase m-0">
                This Week's Exclusive Deals
              </h2>
            </div>
          </div>
        </div>
        <div className="featured_post animate__animated animate__delay-0.5s row justify-content-center">
          {weeksData.length > 0 &&
            weeksData.map((item) => (
              <div className="post_box col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                <div className="box_content box_content_400">
                  <div className="content_img content_img_270">
                    <img src={item.productImage} alt={item.sku}  className="h-100"/>
                  </div>
                  <div className="content_text d-flex align-items-center justify-content-between">
                    <h4>{item.title}</h4>
                    {isDisaplyProduct && (
                      <span
                        value={item}
                        id={item.id}
                        title={item.title}
                        onClick={(e) => uploadImg(e)}
                      >
                        Edit
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          <Modal show={dialogOpen} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{productTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Upload Product Image</Form.Label>
                <Form.Control
                  type="file"
                  size="lg"
                  id="upload_img"
                  onChange={(e) => setFile(e)}
                />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleUpload}>
                Upload
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Featured;
