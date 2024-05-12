import { Card, Button, Row, Col, Input, Upload, Progress, Modal } from "antd";
import UploadImg from "./TestUpload";
import axios from "axios";
import { urlCommon } from './../common';


export default function About({list, setList}) {

  //tet
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
        alert('Cập nhật thông tin thành công');
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
          bordered={false}
          loading={false}
          size="default"
          
        >
          <Input
              value={item.title}
              onChange={(e) => handleChangeTitle(e.target.value, index)}
            />
            <p></p>
            <TextArea
            value={item.content}
            onChange={(e) => handleChangeContent(e.target.value, index)}
          />       
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
