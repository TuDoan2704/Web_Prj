import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListMenu from "./PageAdmin/CustomerMenu";
import MenuUser from "./PageUser/MenuUser";
function App() {
  //tt
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<ListMenu/>} />
        <Route path="/" element={<MenuUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
