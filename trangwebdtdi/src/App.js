import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ListMenu from "./PageAdmin/CustomerMenu";
import MenuUser from "./PageUser/MenuUser";
import AdminLogin from "./PageAdmin/AdminLogin ";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlCommon } from "./common";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập trước đó hay không khi tải trang
    const isLoggedInLc = sessionStorage.getItem('isLoggedIn');
    if (isLoggedInLc) {
      setIsLoggedIn(true);
    }
  }, []); 
  const authenticate = (userName, password) => {
    const requestData = {
      userName: userName,
      password: password,
    };
    axios({
      method: "post",
      url: urlCommon + "getuser",
      data: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json", 
      },
    })
      .then((response) => {
       if(response.data == 'Valid user'){
          setIsLoggedIn(true);
          sessionStorage.setItem('isLoggedIn', 'true');
       }
        
      })
      .catch((error) => {
        // setIsLoggedIn(false);
        alert('Đăng nhập thất bại')
      });

    
  };
  //tt
  return (
    <Router>
      <Routes>
        {/* <Route path="/admin/*" element={<ListMenu/>} /> */}
        <Route path="/" element={<MenuUser />} />
        <Route
          path="/admin/*"
          element={isLoggedIn ? <ListMenu /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <AdminLogin authenticate={authenticate} />
            ) : (
              <Navigate to="/admin" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
