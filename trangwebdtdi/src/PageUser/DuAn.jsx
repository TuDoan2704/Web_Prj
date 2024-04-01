import axios from "axios";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import Carousel from "react-owl-carousel";
import { urlCommon } from "../common";
import {ReactOwlCarousel} from "react-owl-carousel";
export default function DuAn() {
  const [content29, setContent29] = useState();
  const [title29, setTitle29] = useState();
  const [img29, setImg29] = useState();
  const [content30, setContent30] = useState();
  const [title30, setTitle30] = useState();
  const [img30, setImg30] = useState();
  const [content31, setContent31] = useState();
  const [title31, setTitle31] = useState();
  const [img31, setImg31] = useState();
  const [content32, setContent32] = useState();
  const [title32, setTitle32] = useState();
  const [img32, setImg32] = useState();
  const [content33, setContent33] = useState();
  const [title33, setTitle33] = useState();
  const [img33, setImg33] = useState();
  const [content34, setContent34] = useState();
  const [title34, setTitle34] = useState();
  const [img34, setImg34] = useState();
  const [content35, setContent35] = useState();
  const [title35, setTitle35] = useState();
  const [img35, setImg35] = useState();
  const [content36, setContent36] = useState();
  const [title36, setTitle36] = useState();
  const [img36, setImg36] = useState();
  const [key, setKey] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  () => {
    axios
      .get(urlCommon + 'getdata')
      .then( (response) => {
        let listData = response.data;
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id == 29) {
            setContent29(listData[i].content);
            setTitle29(listData[i].title); 
            setImg29(listData[i].fileData);     
          }
          if (listData[i].id == 30) {
            setContent30(listData[i].content);
            setTitle30(listData[i].title); 
            setImg30(listData[i].fileData);     
          }
          if (listData[i].id == 31) {
            setContent31(listData[i].content);
            setTitle31(listData[i].title);
            setImg31(listData[i].fileData);
             
          }
          if (listData[i].id == 32) {
            
            setContent32(listData[i].content);
            setTitle32(listData[i].title); 
            setImg32(listData[i].fileData);     
          }
          if (listData[i].id == 33) {
            setContent33(listData[i].content);
            setTitle33(listData[i].title);  
            setImg33(listData[i].fileData);      
          }
          if (listData[i].id == 34) {
            setContent34(listData[i].content);
            setTitle34(listData[i].title);
            setImg34(listData[i].fileData);
      
          }
          if (listData[i].id == 35) {
            setContent35(listData[i].content);
            setTitle35(listData[i].title); 
            setImg35(listData[i].fileData);     
          }
          if (listData[i].id == 36) {
            setContent36(listData[i].content);
            setTitle36(listData[i].title); 
            setImg36(listData[i].fileData);     
          }
        }
        updateData();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function updateData() {
    setKey(prevKey => prevKey + 1); 
  }
  return (
    <>
      <section id="services" className="news-section">
        <div className="container" style={{ paddingTop: "0px !important" }}>
          <div className="sec-title text-center" style={{ marginTop: "50px" }}>
            <span className="sub-title">Lĩnh vực hoạt động</span>
            <h2>Bạn cần, chúng tôi có!</h2>
          </div>
          <OwlCarousel  key={key} items={3} loop nav margin={10}>
            <div className="testimonial-block">
              <div className="news-block fadeInUp">
                <div className="slide_custom">
                  <div className="image-box">
                    <figure className="image">   
                      <a href>
                        <img
                          className="imgK"
                          style={{ borderRadius: "10px" }}
                          src={'data:image/jpeg;base64,'+ img29}
                          alt=""
                        />  
                      </a>
                    </figure>
                  </div>
                  <div className="content-box" style={{ borderRadius: "15px" }}>
                    <div
                      className="content ntb"
                      style={{ height: "340px", borderRadius: "15px" }}
                    >
                      <div className="post-info">
                        <figure className="author-thumb">
                          <img src="images/icons/check.jpg" alt="" />
                        </figure>   
                      </div>
                      <div style={{ height: "70px", textAlign: "center" }}>
                        <h4 className="title">
                          <a href>{title29}</a>   
                        </h4>
                      </div>
                      <div className="dd">
                        <h7>
                          {content29}
                        </h7>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="news-block fadeInUp">
                <div className="slide_custom">
                  <div className="image-box">
                    <figure className="image">
                      <a href>
                        <img
                          className="imgK"
                          src={'data:image/jpeg;base64,'+ img30}
                          style={{ borderRadius: "10px" }}
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="content-box" style={{ borderRadius: "15px" }}>
                    <div
                      className="content ntb"
                      style={{ height: "340px", borderRadius: "15px" }}
                    >
                      <div className="post-info">
                        <figure className="author-thumb">
                          <img src="images/icons/check.jpg" alt="" />
                        </figure>
                      </div>
                      <div style={{ height: "70px", textAlign: "center" }}>
                        <h4 className="title">
                          <a href>{title30}</a>
                        </h4>
                      </div>
                      <div className="dd">
                        <h7>
                          {content30}
                        </h7>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="news-block fadeInUp">
                <div className="slide_custom">
                  <div className="image-box">
                    <figure className="image">
                      <a href>
                        <img
                          className="imgK"
                          src={'data:image/jpeg;base64,'+ img31}
                          style={{ borderRadius: "10px" }}
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="content-box" style={{ borderRadius: "15px" }}>
                    <div
                      className="content ntb"
                      style={{ height: "340px", borderRadius: "15px" }}
                    >
                      <div className="post-info">
                        <figure className="author-thumb">
                          <img src="images/icons/check.jpg" alt="" />
                        </figure>
                      </div>
                      <div style={{ height: "70px", textAlign: "center" }}>
                        <h4 className="title">
                          <a href="#">
                            {title31}
                          </a>
                        </h4>
                      </div>
                      <div className="dd">
                        <h7>
                        {content31}
                        </h7>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="news-block fadeInUp">
                <div className="slide_custom">
                  <div className="image-box">
                    <figure className="image">
                      <a href>
                        <img
                          className="imgK"
                          src={'data:image/jpeg;base64,'+ img32}
                          style={{ borderRadius: "10px" }}
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                  <div className="content-box" style={{ borderRadius: "15px" }}>
                    <div
                      className="content ntb"
                      style={{ height: "340px", borderRadius: "15px" }}
                    >
                      <div className="post-info">
                        <figure className="author-thumb">
                          <img src="images/icons/check.jpg" alt="" />
                        </figure>
                      </div>
                      <div style={{ height: "70px", textAlign: "center" }}>
                        <h4 className="title">
                          <a href="#">{title32}</a>
                        </h4>
                      </div>
                      <div className="dd">
                        <h7>
                          {content32}
                        </h7>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section id="services" className="testimonial-section pt-0">
    <div className="bg bg-pattern-4 pull-up" />
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">Các dự án đã triển khai</span>
        <h2>Dự án của DTDI Tech</h2>
      </div>
      <Carousel items={2} loop nav margin={10}>
          {/* Testimonial Block */}
          <div className="testimonial-block">
            <div className="inner-box ct">
              <div className="upper-box">
                <h4 className="name">{title33}</h4>
              </div>
              <div className="text-box">
                <div className="text">{content33}</div>
              </div>
              <div className="info-box">
                <figure className="thumb"><img src={'data:image/jpeg;base64,'+ img33} />
                </figure>
                <div className="rating">
                  <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                  <span className="avg-review">4.9 Reviews</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial Block */}
          <div className="testimonial-block">
            <div className="inner-box ct">
              <div className="upper-box">
                <h4 className="name">{title34}</h4>
              </div>
              <div className="text-box">
                <div className="text">{content34}</div>
              </div>
              <div className="info-box">
                <figure className="thumb"><img src={'data:image/jpeg;base64,'+ img34}/>
                </figure>
                <div className="rating">
                  <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half" />
                  <span className="avg-review">4.5 Reviews</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial Block */}
          <div className="testimonial-block">
            <div className="inner-box ct">
              <div className="upper-box">
                <h4 className="name">{title35}</h4>
              </div>
              <div className="text-box">
                <div className="text">{content35}</div>
              </div>
              <div className="info-box">
                <figure className="thumb"><img src={'data:image/jpeg;base64,'+ img35} /></figure>
                <div className="rating">
                  <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star-half" />
                  <span className="avg-review">4.5 Reviews</span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial Block */}
          <div className="testimonial-block">
            <div className="inner-box ct">
              <div className="upper-box">
                <h4 className="name">{title36}</h4>
              </div>
              <div className="text-box">
                <div className="text">{content36}</div>
              </div>
              <div className="info-box">
                <figure className="thumb"><img src={'data:image/jpeg;base64,' + img36} /></figure>
                <div className="rating">
                  <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
                  <span className="avg-review">4.9 Reviews</span>
                </div>
              </div>
            </div>
          </div>
          </Carousel>
    </div>
  </section>
    </>
  );
}
