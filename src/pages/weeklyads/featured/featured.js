import './featured.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Document } from 'react-pdf';
import { Pagination } from "@material-ui/lab";
import usePagination from "./../../pagination/pagination";

// import other section

function Featured() {
  
 
  const [weeksData, setWeeksData] = useState([])
  const fetchData = async () => {
    let { data } = await axios.get(`https://localhost:44369/api/v1/WeeklyAds/GetPdf`)
    if (data) {
      if(data.length>0){
      setWeeksData(data);
      }
    }
  };
  useEffect(() => {
    fetchData();
  },[]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(weeksData.length / PER_PAGE);
  const _DATA = usePagination(weeksData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  // const fileURL = 'D:/projects/Vice_Armory/vicearmory_front/Files/PaymentReceipt.pdf';
  const fileURL = '';
  function Download() {
    if (!window.ActiveXObject) {
      var save = document.createElement("a");
      save.href = fileURL;
      save.target = "_blank";
      var fileName = fileURL.substring(fileURL.lastIndexOf("/") + 1);
      save.download = fileName || fileName;
      if (
        navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) &&
        navigator.userAgent.search("Chrome") < 0
      ) {
        document.location = save.href;
        // window event not working here
      } else {
        var evt = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        save.dispatchEvent(evt);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
      }
    }

    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
      var _window = window.open(fileURL, "_blank");
      _window.document.close();
      _window.document.execCommand("SaveAs", true, fileName || fileURL);
      _window.close();
    }
  }

  return (
    <section id="featured_section" className="featured_section">
      <div className="container">
        <div className="row">
          <div className="featured_title page_title col-12 text-center">
            <div className="page_title_box">
              <h2 className="text-uppercase m-0">
                Check out this week’s exclusive deals!
              </h2>
            </div>
          </div>
        </div>
        <div className="featured_post animate__animated animate__delay-0.5s row justify-content-center">
                {_DATA.currentData().map(item =>   
        <div className="post_box col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="box_content">
                <div className="content_img">
                  <object
                    data={item.filePath}
                    type="application/pdf"
                    width="500"
                    height="678"
                  >

                    <iframe
                      src={item.filePath}
                      width="500"
                      height="678"
                    >
                      <p>This browser does not support PDF!</p>
                    </iframe>
                  </object>
                </div>
              </div>
            </div>
        )}
        </div>
        <div className='text-center pt-5'>
        <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
        </div>

      </div>
    </section>
  );
}

export default Featured;
