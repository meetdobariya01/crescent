import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/home/home";
import Applesolution from "./pages/apple-solution/applesolution";
import Contact from "./pages/contact/contact";
import Luxery from "./pages/luxery-product/luxery";
import Newline from "./pages/luxery-product/brands/newline";
import Seenspire from "./pages/luxery-product/brands/Seenspire";
import Heckler from "./pages/luxery-product/heckler";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apple-solution" element={<Applesolution />} />
      <Route path="/luxury-products" element={<Luxery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newline" element={<Newline />} />
       <Route path="/seenspire" element={<Seenspire/>} />
        <Route path="/heckler" element={<Heckler/>} />
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
