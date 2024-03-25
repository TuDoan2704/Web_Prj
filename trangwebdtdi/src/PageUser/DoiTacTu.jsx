import React from "react";
export default function DoiTacTu(){
    return(
    <section id="doitac" className="clients-section" style={{margin: '0 135px'}}>
    <img className="dt" src="./css/images/CMC.jpg"></img>    
        <div className="sec-title text-center lmh" style={{marginTop: '100px'}}>
          <span className="sub-title">Đối tác</span>
          <h2>Các đối tác của AT</h2>
        </div>
        {/* <div className> */}
          {/* Sponsors Outer */}
          {/* <div className="sponsors-outer"> */}
            {/*clients carousel*/}
            <ul className="clients-carousel owl-carousel owl-theme">
              <li className="slide-item"> <a href="#"><img className="dt" src="./css/images/ncb1.jpg" alt="" /></a>
              </li>
              <li className="slide-item"> <a href="#"><img className="dt" src="./css/images/CMC.jpg" alt="" /></a> </li>
              <li className="slide-item"> <a href="#"><img className="dt" src="./css/images/FIS.jpg" alt="" /></a> </li>
              <li className="slide-item"> <a href="#"><img className="dt" src="./css/images/aws1.png" alt="" /></a></li>
              {/* <li class="slide-item"> <a href="#"><img class="dt" src="./css/images/iconAT.png" alt=""></a></li> */}
            </ul>
          {/* </div> */}
        {/* </div> */}
      </section>
    )
}