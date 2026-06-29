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
import Eizo from "./pages/luxery-product/brands/eizo";
import Hypervsn from "./pages/luxery-product/brands/hypervsn";
import Seenspire from "./pages/luxery-product/brands/Seenspire";
import Heckler from "./pages/luxery-product/brands/heckler";
import Mapsted from "./pages/luxery-product/brands/mapsted";
import Convergence from "./pages/convergence/convergence";
import Immresive from "./pages/immresive/immresive";
import AboutUs from "./pages/aboutus/aboutus";
import Software from "./pages/software/software";
import GCC from "./components/gcc/GCC";
import OTSecurity from "./components/gcc/OTSecurity";
import GCCLanding from "./pages/enterpriseit/enterpriceit";
import TermsConditions from "./pages/privacy-policy/privacypolicy";
import Computers from "./pages/computers/computers";
import Printers from "./pages/printers/printers";
import Video from "./pages/video-conf/video";
import Storage from "./pages/storage/storage";
import Servers from "./pages/servers/servers";
// import OTSecurity from "../../../Users/hp/Downloads/OTSecurity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/apple-solution" element={<Applesolution />} />
      <Route path="/luxury-products" element={<Luxery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newline" element={<Newline />} />
      <Route path="/eizo" element={<Eizo />} />
      <Route path="/hypervsn" element={<Hypervsn />} />
      <Route path="/seenspire" element={<Seenspire />} />
      <Route path="/heckler" element={<Heckler />} />
      <Route path="/mapsted" element={<Mapsted />} />
      <Route path="/convergence" element={<Convergence />} />
      <Route path="/immresive" element={<Immresive />} />
      <Route path="/software" element={<Software />} />
      <Route path="/privacypolicy" element={<TermsConditions />} />
      <Route path="/enterpriseit" element={<GCCLanding />} />
      <Route path="/GCC" element={<GCC />} />
      <Route path="/OTSecurity" element={<OTSecurity />} />
      <Route path="/computers" element={<Computers />} />
      <Route path="/printers" element={<Printers />} />
      <Route path="/videoandconferencing" element={<Video />} />
      <Route path="/storage" element={<Storage />} />
      <Route path="/servers" element={<Servers />} />
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
