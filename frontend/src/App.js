import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";
import Navbarr from "./components/Navbar.jsx";
import Body from './components/Body.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Donate from './components/Donate.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <Router>
            <Navbarr  />

      <Routes>
      <Route exact path="/" element={<Body/>} />

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Donate" element={<Donate/>} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
