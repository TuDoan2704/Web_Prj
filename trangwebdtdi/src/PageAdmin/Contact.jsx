import React, { useEffect } from "react";
import { Card, Button, Row, Col, Input, Upload, Progress, Modal } from "antd";
import { useState } from "react";
import UploadImg from "./TestUpload";
import axios from "axios";
import { urlCommon } from "./../common";

export default function DoiTac({ list, setList }) {
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
        "Content-Type": "application/json",
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
          cover={ item.id === 28 ? (<img src={"data:image/jpeg;base64," + item.fileData}/>) : null}
          actions={[
            item.id === 28 ? (
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
          {item.id === 24 ? (
            <Input
              value={item.title}
              onChange={(e) => handleChangeTitle(e.target.value, index)}
            />
          ) : (
            <h3>{item.title}</h3>
          )}
          <p></p>
          {item.id !== 28 ? (
            <TextArea
            value={item.content}
            onChange={(e) => handleChangeContent(e.target.value, index)}
          />
          ) : null}
          
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
