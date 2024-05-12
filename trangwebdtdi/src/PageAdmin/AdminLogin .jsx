import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const AdminLogin = ({authenticate}) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value); 
  };
  const handleLogin = () => {
    authenticate(username,password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Đăng nhập cho Admin</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Tên đăng nhập" onChange={handleUsernameChange}/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Mật khẩu"
              onChange={handlePasswordChange}
            />
          </Form.Item>
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ đăng nhập</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Quên mật khẩu
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleLogin} className="login-form-button" style={{ width: '100%' }}>
              Đăng nhập
            </Button>
          
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
