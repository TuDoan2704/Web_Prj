import Input from "antd/es/input/Input";
import React, { useState } from "react";
export default function DuAn(){
    const [value, setValue] = useState("aaa")
    return(
      <section id="services" className="news-section">
      <div className="container" style={{paddingTop: '0px !important'}}>
        <div className="sec-title text-center" style={{marginTop: '50px'}}>
          <span className="sub-title">Lĩnh vực hoạt động</span>
          <h2>Bạn cần, chúng tôi có!</h2>
        </div>
        <div className="carousel-outer">
          <div className="testimonial-carousel-1 owl-carousel owl-theme">
            <div className="testimonial-block">
              <div className="news-block fadeInUp">
                <div className="slide_custom">
                  <div className="image-box">
                    <figure className="image"><a href><img className="imgK" style={{borderRadius: '10px'}} src="./css/images/phattrienphanmem.jpg" alt="" /></a>
                    </figure>
                  </div>
                  <div className="content-box" style={{borderRadius: '15px'}}>
                    <div className="content ntb" style={{height: '340px', borderRadius: '15px'}}>
                      <div className="post-info">
                        <figure className="author-thumb"><img src="images/icons/check.jpg" alt="" />
                        </figure>
                      </div>
                      <div style={{height: '70px', textAlign: 'center'}}>
                        <h4 className="title"><a href>Phát triển phần mềm theo yêu cầu</a></h4>
                      </div>
                      <div className="dd">
                        <h7>AT Tech luôn nghiên cứu và áp dụng các công nghệ mới
                          nhất
                          trong
                          sản phẩm cung cấp tới Khách hàng.</h7>
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
                    <figure className="image"><a href><img className="imgK" src="./css/images/tuvan.jpg" style={{borderRadius: '10px'}} alt="" /></a></figure>
                  </div>
                  <div className="content-box" style={{borderRadius: '15px'}}>
                    <div className="content ntb" style={{height: '340px', borderRadius: '15px'}}>
                      <div className="post-info">
                        <figure className="author-thumb"><img src="images/icons/check.jpg" alt="" />
                        </figure>
                      </div>
                      <div style={{height: '70px', textAlign: 'center'}}>
                        <h4 className="title"><a href>Tư vấn, đưa ra giải pháp phù hợp nhất</a>
                        </h4></div>
                      <div className="dd">
                        <h7>Luôn luôn lắng nghe mong muốn của Khách hàng, tư vấn
                          giải pháp
                          phù
                          hợp nhất với nhu cầu của Khách hàng là tiêu chí hoạt động của AT
                          Tech.
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
                    <figure className="image"><a href><img className="imgK" src="./css/images/ITSupport.jpg" style={{borderRadius: '10px'}} alt="" /></a></figure>
                  </div>
                  <div className="content-box" style={{borderRadius: '15px'}}>
                    <div className="content ntb" style={{height: '340px', borderRadius: '15px'}}>
                      <div className="post-info">
                        <figure className="author-thumb"><img src="images/icons/check.jpg" alt="" />
                        </figure>
                      </div>
                      <div style={{height: '70px', textAlign: 'center'}}>
                        <h4 className="title"><a href="#">Đào tạo <br /> nhân sự IT</a></h4>
                      </div>
                      <div className="dd">
                        <h7>Với cam kết tạo ra nhân sự IT chất lượng cao, chúng
                          tôi đồng
                          hành cùng bạn trên con đường thành công trong thế giới công nghệ
                          hiện
                          đại.</h7>
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
                    <figure className="image"><a href><img className="imgK" src="./css/images/Outsourcing.jpg" style={{borderRadius: '10px'}} alt="" /></a></figure>
                  </div>
                  <div className="content-box" style={{borderRadius: '15px'}}>
                    <div className="content ntb" style={{height: '340px', borderRadius: '15px'}}>
                      <div className="post-info">
                        <figure className="author-thumb"><img src="images/icons/check.jpg" alt="" />
                        </figure>
                      </div>
                      <div style={{height: '70px', textAlign: 'center'}}>
                        <h4 className="title"><a href="#">Outsourcing</a></h4>
                      </div>
                      <div className="dd">
                        <h7>Sản phẩm AT Tech cung cấp đảm bảo về chất lượng và kế
                          hoạch
                          triển khai
                          bởi mọi công việc ở AT Tech đều chuẩn hóa theo các quy trình.</h7>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}