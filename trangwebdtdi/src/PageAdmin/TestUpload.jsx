import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import axios from 'axios';
import { urlCommon } from '../common';
const UploadImg = ({ handleChangeImg, myIndex, myId }) => {

  const url = urlCommon + 'upload/' + myId;
  const props = {
    name: 'file',
    action: url,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info);
        console.log(info.file);
        console.log(info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`Up load thành công`);
        // setContentObj1(info.file);
      } else if (info.file.status === 'error') {
        handleChangeImg("images/image015.jpg", myIndex);
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Upload {...props} multiple={false} maxCount={1}>
      <Button icon={<UploadOutlined />}>Thay đổi ảnh</Button>
    </Upload>
  )
}

export default UploadImg;