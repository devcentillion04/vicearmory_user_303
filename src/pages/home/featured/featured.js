import "./featured.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {ApiUrl} from '../../constant';
import { Modal } from "react-bootstrap";
// import other section

const Featured = () => {
  const [weeksData, setWeeksData] = useState([]);
  const [isDisaplyProduct, setIsDisplayProduct] = useState(false);
  const [dialogOpen, isDialogOpen] = useState(false);
  const [productTitle, setProductTitle] = useState({});
  const [getFiles, setGetFiles] = useState();
  const [productData, setProductData] = useState([]);

  const [allImages, setAllImages] = useState();
  useEffect(() => {
    if ( localStorage.length  ===  0 || localStorage.getItem('Email') === 'null' )
    {
      setIsDisplayProduct(false);
    }
    else{
      
      setIsDisplayProduct(true);
    }
      fetchData();
  }, []);

  const fetchData = async () => {
    let { data } = await axios.get(`${ApiUrl}Product/GetProducts`
    );
    if (data) {
        setWeeksData(data);
    }
  };
  const handleOpen =(data)=> {
    setProductData(data);
    isDialogOpen(true);
  }

  function handleClose(e) {
    isDialogOpen(false);
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
                   {item.productImage != null &&
                    <img src={item.productImage[0]} alt={item.sku}   className="h-100"/>
                   } 
                   {item.productImage == null &&
                    <img src="./Assets/logo.png" alt={item.sku}   className="h-100"/>
                   }
                  </div>
                  <div className="content_text d-flex align-items-center justify-content-between">
                   <div className="col-lg-8">
                    <h4>{item.title}</h4>   
                    </div>
                   <div className="col-lg-4 text-right">                      
                   {item.productImage != null &&     <p className=" mt-2 cursor-hover"  onClick={() => handleOpen(item)}>view All Images</p>   }
                      </div>               
                  </div>
                </div>
              </div>
            ))}
           <Modal show={dialogOpen} onHide={handleClose}>
            <Modal.Header closeButton>
              <h5>Products All Images</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="">      
                  {productData.productImage != null &&  <div><b>{productData.title}</b><hr/></div>  } 
                  <div className="row">
                  {productData.productImage != null && productData.productImage.map((img)=>(
                     <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                          <img
                            src={img}
                            alt={productData.title}
                            className="h-100"
                          />
                          </div>
                   ))} 
                   </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Featured;
