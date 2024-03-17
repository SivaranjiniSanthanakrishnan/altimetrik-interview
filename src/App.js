import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CarList from "./Component/CarList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Services() {
  return (
    <>
      <h3> Services Component </h3>
    </>
  );
}

function Gallery() {
  return (
    <>
      <h3> Gallery Component </h3>
    </>
  );
}

function ContactUs() {
  return (
    <>
      <h3> Contact Us Component </h3>
    </>
  );
}
export default App;
