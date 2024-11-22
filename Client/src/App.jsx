import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Train from "./Components/Train/Train";
import Home from "./Components/Home/Home";
import Flight from "./Components/Flight/Flight";
import "./App.css";
import Bus from "./Components/Bus/Bus";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./Components/chatbot/Chatbot";
// import Login from './Components/Login/Login';
// import Signup from './Components/Signup/Signup';
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import Details from "./Components/details_page/details";
import CustomerService from "./Components/CustomerService/CustomerService";
import PrivatePortal from "./Components/PrivatePortal/PrivatePortal";
import Terms from "./Components/Terms/Terms";
import NotFound from "./Components/NotFound/NotFound";
import Privacy from "./Components/Privacy/Privacy";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/train" element={<Train />} />
          <Route path="/bus" element={<Bus />}></Route>
          <Route element={<PrivatePortal />}>
            <Route
              path="/CustomerService"
              element={<CustomerService />}></Route>
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/details" element={<Details />} />
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="*" element={<NotFound />} />//
          <Route path="/privacy" element={<Privacy />}></Route>
        </Routes>
        <Chatbot />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
