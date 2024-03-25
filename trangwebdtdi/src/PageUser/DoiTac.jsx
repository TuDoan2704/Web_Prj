import React from "react";
export default function DoiTac() {
return(
    <section id="home" className="fun-fact-section pt-0">
        {/* Call To Action */}
        <section className="call-to-action" id="home">
          <div className="outer-box">
            <div className="bg bg-image" style={{backgroundImage: 'url(./css/images/image015.jpg)'}}>
            </div>
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="title-box col-xl-8 col-lg-6 col-md-12">
                  <h2 className="title">We are here to serve you!</h2>
                </div>
                <div className="btn-box col-xl-4 col-lg-6 col-md-12">
                  <div className="btn-outer">
                    {/* <a href="page-about.html" class="theme-btn btn-style-one"><span class="btn-title">Explore Now</span></a> */}
                    {/* <a href="page-services.html" class="theme-btn btn-style-two"><span class="btn-title">Get Started</span></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Call To Action */}
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row">
              {/* Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-checking" />
                    <div className="count-box"><span className="count-text" data-speed={1000} data-stop={3}>0</span></div>
                    <h6 className="counter-title">3 năm trên thị trường</h6>
                  </div>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-recommend" />
                    <div className="count-box"><span className="count-text" data-speed={2500} data-stop={100}>0</span></div>
                    <h6 className="counter-title">100% chi phí hợp lý</h6>
                  </div>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-increment" />
                    <div className="count-box"><span className="count-text" data-speed={2500} data-stop={100}>0</span></div>
                    <h6 className="counter-title">100+ thành viên</h6>
                  </div>
                </div>
              </div>
              {/*Counter block*/}
              <div className="counter-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                <div className="inner">
                  <div className="content">
                    <i className="icon flaticon-consulting" />
                    <div className="count-box"><span className="count-text" data-speed={2500} data-stop={80}>0</span></div>
                    <h6 className="counter-title">80+ chuyên gia kỹ thuật</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
)

}