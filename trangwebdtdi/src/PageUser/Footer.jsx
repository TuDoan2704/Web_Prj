import axios from "axios";
import React, { useEffect, useState } from "react";
import { urlCommon } from '../common';
export default function Footer() {
  const [content20, setContent20] = useState();
  const [content21, setContent21] = useState();
  const [content22, setContent22] = useState();
  const [content23, setContent23] = useState();
  const [content24, setContent24] = useState();
  const [titile24, setTitle24] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  () => {
    axios
      .get(urlCommon + 'getdata')
      .then( (response) => {
        let listData = response.data;
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id ==20) {
            setContent20(listData[i].content);
          }
          if (listData[i].id ==21) {
            setContent21(listData[i].content);
          }
          if (listData[i].id ==22) {
            setContent22(listData[i].content);
          }
          if (listData[i].id ==23) {
            setContent23(listData[i].content);
          }
          if (listData[i].id ==24) {
            setContent24(listData[i].content);
            setTitle24(listData[i].title);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
    return(
        <section id="contact" className="footerc">
        <footer className="main-footer">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className>
              <div className="row fth" style={{margin: '0 146px'}}>
                {/*Footer Column*/}
                <div className="footer-column col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-widget about-widget">
                    {/* <img class="logo" src="./css/images/Logo_full color.svg" alt=""> */}
                    {/* <img class="logo" src="./css/images/ATTECH., JSC.svg" alt="logo" style="width: 65%;">  */}
                    <h5 style={{color: '#ffffff'}}>{titile24}</h5>
                    <div className="text" style={{width: '92%'}}>{content24}</div>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-xl-3 col-lg-3 col-md-3">
                  <div className="footer-widget links-widget">
                    <h6 className="widget-title fontft">Giờ làm việc</h6>
                    <ul className="user-links">
                      <li>
                        <div className="timelv">
                          <div>Thứ 2 đến thứ 6:&nbsp;</div>
                          <div>8h00 - 17h00</div>
                        </div>
                      </li>
                      <li>
                        <div className>Thứ 7: 8h00 - 12h00</div>
                      </li>
                      <li>
                        <div className>Chủ nhật: NGHỈ</div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-xl-5 col-lg-5 col-md-5">
                  <div className="footer-widget contacts-widget">
                    <h6 className="widget-title fontft">Thông tin liên hệ</h6>
                    <div className="tencty">
                      <div className="contact-info textlg clg">{content20}</div>
                      {/* <div className="contact-info textlg clg">VÀ GIẢI PHÁP AT</div> */}
                      {/* <div class="contact-info textlg">CÔNG TY CỔ PHẦN CÔNG NGHỆ VÀ GIẢI PHÁP AT</div> */}
                    </div>
                    <ul className="contact-info">
                      <li><i className="fa fa-envelope" /> <a className="clg">{content21}</a><br /></li>
                      <li><i className="fa fa-phone-square" /> <a className="clg">
                          {content22}</a><br /></li>
                      <li><i className="fa-solid fa-house" /> <a target="_blank" className="clg" >
                          {content23}</a><br />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Footer Bottom*/}
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner-container">
                <div className="copyright-text">Công ty Cổ phần Công nghệ DTDI © 2022</div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    )
}