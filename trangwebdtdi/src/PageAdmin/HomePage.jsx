import React, { useEffect } from "react";
import { Card, Button, Row, Col, Input, Upload, Progress, Modal } from "antd";
import { useState } from "react";
import UploadImg from "./TestUpload";
import axios from "axios";
import { urlCommon } from './../common';

export default function HomePage({ list, setList }) {
  const { TextArea } = Input;
  // const [list, setList] = useState([]);
  const handleChangeContent = (value, index) => {
    const newList = [...list];
    newList[index].content = value;
    setList(newList);
  };
  const handleChangeTitle = (value, index) => {
    const newList = [...list];
    newList[index].title = value;
    setList(newList);
  };
  const handleChangeImg = (value, index) => {
    const newList = [...list];
    newList[index].linkImg = value;
    setList(newList);
  };
  const updateData = () => {
    axios({
      method: "post",
      url: urlCommon + "update-data",
      data: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json", // Set kiểu dữ liệu là JSON
      },
    })
      .then((response) => {
        alert("Cập nhật thông tin thành công");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const cols = list.map((item, index) => {
    return (
      <Col span={6}>
        <Card
          title=""
          hoverable
          style={{ width: 300 }}
          cover={<img src={"" + item.fileData}/>}
          actions={[
            item.id !== 7 && item.id !== 8 && item.id !== 9 && item.id !== 10 ? (
            <UploadImg
              myIndex={index}
              handleChangeImg={handleChangeImg}
              myId={item.id} 
            />) : null
          ]}
          bordered={false}
          loading={false}
          size="default"
        >
          
            <Input
              value={item.title}
              onChange={(e) => handleChangeTitle(e.target.value, index)}
            />
         
          <p></p>
          
          {item.id !== 1 && item.id !== 2 && item.id !== 3 && item.id !== 4 ?(
          item.id === 5 || item.id === 6 ? (
            <TextArea
              value={item.content}
              onChange={(e) => handleChangeContent(e.target.value, index)}
            />
          ) : (
            <Input
              value={item.content}
              onChange={(e) => handleChangeContent(e.target.value, index)}
            />
          )) : null}
          {/* {inputType(item.id, item.content, index)} */}
        </Card>
      </Col>
    );
  });

  
  return (
    <div>
      <p></p>
      <Row gutter={[16, 24]} style={{ marginLeft: "2%" }}>
        {/* <Col span={}></Col> */}
        {cols}
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={8}></Col>
        <Col span={8}>
          <Button
            hoverable
            style={{
              backgroundColor: "blue",
              color: "white",
              width: 500,
              border: "radius",
              height: 50,
            }}
            onClick={() => updateData()}
          >
            Save
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}
