import React, { useEffect, useState } from "react";
import Carousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { urlCommon } from "../common";
export default function DoiTac() {
  const [img37, setImg37] = useState();
  const [img38, setImg38] = useState();
  const [img39, setImg39] = useState();
  const [img40, setImg40] = useState();
  const [key, setKey] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(urlCommon + "getdata")
      .then((response) => {
        let listData = response.data;
        for (var i = 0; i < listData.length; i++) {
          if (listData[i].id === 37) {
            setImg37(listData[i].fileData);
          }
          if (listData[i].id === 38) {
            setImg38(listData[i].fileData);
          }
          if (listData[i].id === 39) {
            setImg39(listData[i].fileData);
          }
          if (listData[i].id === 40) {
            setImg40(listData[i].fileData);
          }
        }
        updateData();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  function updateData() {
    setKey((prevKey) => prevKey + 1);
  }
  return (
    <section
      id="doitac"
      className="clients-section"
      style={{ margin: "0 135px" }}
    >
      <div className="sec-title text-center lmh" style={{ marginTop: "100px" }}>
        <span className="sub-title">Đối tác</span>
        <h2>Các đối tác của DTDI</h2>
      </div>
      <div className>
        {/* Sponsors Outer */}
        <div className="sponsors-outer">
          {/*clients carousel*/}
          <Carousel
            key={key}
            className="clients-carousel owl-carousel owl-theme"
            items={5}
            loop
            nav
            margin={10}
            autoplay 
            autoplayTimeout={1500}
            responsive={{
              0: {
                items: 1
              },
              600: {
                items: 4
              }
            }}
          >
            <div className="slide-item">
              <a href="#">
                <img
                  className="dt"
                  src={"" + img37}
                  alt=""
                />
              </a>
            </div>
            <div className="slide-item">
              <a href="#">
                <img
                  className="dt"
                  src={"" + img38}
                  alt=""
                />
              </a>
            </div>
            <div className="slide-item">
              <a href="#">
                <img
                  className="dt"
                  src={"" + img39}
                  alt=""
                />
              </a>
            </div>
            <div className="slide-item">
              <a href="#">
                <img
                  className="dt"
                  src={"" + img40}
                  alt=""
                />
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
