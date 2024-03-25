import axios from "axios";
import React, { useEffect, useState } from "react";
import { urlCommon } from './../common';
export default function DichVu() {
  const [content17, setContent17] = useState();
  const [title17, setTitle17] = useState();
  const [img17, setImg17] = useState();
  const [content18, setContent18] = useState();
  const [title18, setTitle18] = useState();
  const [img18, setImg18] = useState();
  const [content19, setContent19] = useState();
  const [title19, setTitle19] = useState();
  const [img19, setImg19] = useState();
  const [content20, setContent20] = useState();
  const [title20, setTitle20] = useState();
  const [img20, setImg20] = useState();
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  () => {
    axios
      .get(urlCommon + 'getdata')
      .then( (response) => {
        let listData = response.data;
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id == 17) {
            setContent17(listData[i].content);
            setTitle17(listData[i].title); 
            setImg17(listData[i].fileData);     
          }
          if (listData[i].id == 18) {
            setContent18(listData[i].content);
            setTitle18(listData[i].title); 
            setImg18(listData[i].fileData);     
          }
          if (listData[i].id == 19) {
            setContent19(listData[i].content);
            setTitle19(listData[i].title);
            setImg19(listData[i].fileData);
             
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
    return (
        <>
        <section id="services" className="about-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center" style={{marginTop: '50px'}}>
            <span className="sub-title">Về chúng tôi</span>
            <h2>Hướng tới tương lai</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href><img className="imgH" src={'data:image/jpeg;base64,'+ img17} alt="" /></a></figure>
                  <div className="info-box">
                    <i className="icon flaticon-success" />
                    <h6 className="title">{title17}</h6>
                    <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <i className="icon flaticon-success" />
                    <h6 className="title"><a href>{title17}</a></h6>
                    <div className="text">{content17}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href><img className="imgH" src={'data:image/jpeg;base64,'+ img18} alt="" /></a></figure>
                  <div className="info-box">
                    <i className="icon flaticon-growth-graph" />
                    <h6 className="title"><a href>{title18}</a></h6>
                    <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <i className="icon flaticon-growth-graph" />
                    <h6 className="title"><a href>{title18}</a></h6>
                    <div className="text">{content18}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><a href><img className="imgH" src={'data:image/jpeg;base64,'+ img19} alt="" /></a></figure>
                  <div className="info-box">
                    <i className="icon flaticon-marketing" />
                    <h6 className="title"><a href>{title19}</a></h6>
                    <a href="#" className="read-more"><i className="fa fa-long-arrow-alt-right" /></a>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <i className="icon flaticon-marketing" />
                    <h6 className="title"><a href>{title19}</a></h6>
                    <div className="text">{content19}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      </>
    )

}