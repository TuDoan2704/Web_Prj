import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { urlCommon } from '../common';

export default function Header() {
  const [mail, setMail] = useState();
  const [address, setAddress] = useState();
  const [linkX, setLinkX] = useState();
  const [linkFace, setLinkFace] = useState();
  const [linkIg, setLinkIg] = useState();
  const [logoDTDI, setLogoDTDI] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  () => {
    axios
      .get(urlCommon + 'getdata')
      .then( (response) => {
        let listData = response.data;
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id ===22) {
            setMail(listData[i].content);
          }
          if (listData[i].id ===23) {
            setAddress(listData[i].content);
          }
          if (listData[i].id ===25) {
            setLinkX(listData[i].content);
          }
          if (listData[i].id ===26) {
            setLinkFace(listData[i].content);
          }
          if (listData[i].id ===27) {
            setLinkIg(listData[i].content);
          }
          if (listData[i].id ===28) {
            setLogoDTDI(listData[i].fileData);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <header id="home" className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="inner-container">
            
            <div className="top-left">
              {/* Info List */}
              <ul className="list-style-one">
                <li>
                  <i className="fa fa-envelope" />{" "}
                  <a >{mail}</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    
                  >
                    <i className="fa fa-map-marker" />
                   {address}
                  </a>
                </li> 
              </ul>
            </div>
            <div className="top-right">
              {/* <ul class="useful-links">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul> */}
              <ul className="social-icon-one">
                <li>
                  <a href={linkX} target="_blank">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href={linkFace} target="_blank">
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                {/* <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li> */}
                <li>
                  <a href={linkIg} target="_blank">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Header Top */}
        {/* Header Lower */}
        <div className="header-lower">
          {/* Main box */}
          <div className="main-box">
            <div className="logo-box">
              <div className="logo">
                <a href="index.html">
                  <img
                    className="logo"
                    src={"data:image/jpeg;base64," + logoDTDI}
                    alt=""
                  />
                </a>
              </div>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer">
              <nav className="nav main-menu">
                <ul className="navigation">
                  <li className="mhb">
                    <a
                      onclick="scrollToElement(home)"
                      href="#home"
                      className="active navbarmenu"
                    >
                      TRANG CHỦ
                    </a>
                  </li>
                  <li className="mhb">
                    <a href="#about">VỀ CHÚNG TÔI</a>
                  </li>
                  <li className="mhb">
                    <a href="#services">DỊCH VỤ</a>
                  </li>
                  <li className="mhb">
                    <a href="#doitac">ĐỐI TÁC</a>
                  </li>
                  <li className="mhb">
                    <a href="#contact">LIÊN HỆ</a>
                  </li>
                  {/* <li><a href="#projects">Projects</a></li> */}
                  {/* <li><a href="#news">Blog</a></li> */}
                </ul>
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box">
                {/* <a href="tel:+84 393 245 192" class="info-btn">
                                    <img src="images/icons/icon-chat.png" alt="" class="icon">
                                    <small>Bạn muốn đặt câu hỏi cho chúng tôi? <br>Miễn phí</small>
                                    <strong>+84 393 245 192 </strong>
                                </a> */}
                <div className="ui-btn-outer">
                  <button className="ui-btn ui-btn search-btn">
                    <span className="icon lnr lnr-icon-search" />
                  </button>
                </div>
                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <a href="index.html">
                  <img
                    className="logo"
                    src="./css/images/Logo_full color.svg"
                    alt=""
                    title
                  />
                </a>
              </div>
              <div className="close-btn">
                <i className="icon fa fa-times" />
              </div>
            </div>
            <ul className="navigation clearfix">
              {/*Keep This Empty / Menu will come through Javascript*/}
            </ul>
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Gọi ngay cho chúng tôi</span>
                  <a href="tel:+92880098670">+84 393 245 192</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Email liên hệ</span>
                  <a href="mailto:help@company.com">admin@at-tech.com.vn</a>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Hoạt động</span>
                  T2 - T7 8:00 - 17:00, Chủ nhật - NGHỈ
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="https://twitter.com/?lang=vi">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/attechjsc">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              {/* <li><a href="#"><i class="fab fa-pinterest"></i></a></li> */}
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search">
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="index.html">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  defaultValue
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <a href="index.html" title>
                  <img src="./css/images/Logo_full color.svg" alt="" title />
                </a>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <ul className="navigation clearfix">
                      {/*Keep This Empty / Menu will come through Javascript*/}
                    </ul>
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
  )
}
