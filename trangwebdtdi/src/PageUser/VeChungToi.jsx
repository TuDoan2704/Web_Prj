
import axios from "axios";
import React, { useEffect, useState } from "react";
import { urlCommon } from './../common';
export default function VeChungToi() {
  const [listDataHome, setListDataHome] = useState([]);
  const [content11, setContent11] = useState();
  const [title11, setTitle11] = useState();
  const [content12, setContent12] = useState();
  const [title12, setTitle12] = useState();
  const [content13, setContent13] = useState();
  const [title13, setTitle13] = useState();
  const [content14, setContent14] = useState();
  const [title14, setTitle14] = useState();
  const [content15, setContent15] = useState();
  const [title15, setTitle15] = useState();
  const [content16, setContent16] = useState();
  const [title16, setTitle16] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  () => {
    axios
      .get(urlCommon + 'getdata')
      .then( (response) => {
        let listData = response.data;
        setListDataHome(listData);
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id === 11) {
            setContent11(listData[i].content);
            setTitle11(listData[i].title);      
          }
          if (listData[i].id === 12) {
            setContent12(listData[i].content);
            setTitle12(listData[i].title);      
          }
          if (listData[i].id === 15) {
            setContent15(listData[i].content);
            setTitle15(listData[i].title);      
          }
          if (listData[i].id === 16) {
            setContent16(listData[i].content);
            setTitle16(listData[i].title);      
          }
          if (listData[i].id === 13) {
            setContent13(listData[i].content);
            setTitle13(listData[i].title);      
          }
          if (listData[i].id === 14) {
            setContent14(listData[i].content);
            setTitle14(listData[i].title);   
             
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
return(
    <section id="about" className="services-section">
        <div className="bg" style={{backgroundImage: 'url(./images/main-slider/shape-2.jpg)'}} />
        <div className="auto-container">
          {/* <div class="">
					<div> */}
          <div className="col-lg-7 sec-title text-center" style={{margin: '0px auto 30px auto'}}>
            <span className="sub-title">Tại sao chọn AT Tech</span>
            <h2>Làm hài lòng khách hàng là niềm hạnh phúc của chúng tôi!</h2>
          </div>
          {/* </div>
				</div> */}
          <div className="row justify-content-center">
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>{title11}</a></h6>
                <i className="icon fa-duotone fa-gears" />
                <a href="l" className="read-more">{content11}</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>{title12}</a></h6>
                <i className="icon fa-regular fa-head-side-brain" />
                <a href className="read-more">{content12}</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>{title13}</a></h6>
                <i className="icon fa-thin fa-user-tie" />
                <a href className="read-more">{content13}</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>{title14}</a></h6>
                <i className="icon fa-regular fa-bolt-lightning" />
                <a href className="read-more">{content14}</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-2 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                {/* <h6 class="title ct1"><a href="page-service-details.html">Công nghệ</a></h6> */}
                <h6 className="title ct1"><a href>{title15}</a></h6>
                <i className="icon fa-light fa-microchip-ai" />
                <a href className="read-more">{content15}</a>
              </div>
            </div>
            {/* Service Block */}
            <div className="service-block col-xl-4 col-lg-2 col-md-4 col-sm-6 wow fadeInUp">
              <div className="inner-box ">
                <h6 className="title ct1"><a href>{title16}</a></h6>
                <i className="icon fa-solid fa-book" />
                <a href className="read-more">{content16}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
)

}