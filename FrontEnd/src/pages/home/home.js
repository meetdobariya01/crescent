import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Working from "../../components/working/working";
import Hero from "../../components/hero-section/hero";
import Solution from "../../components/Innovative_solution/solution";
import Whatwedo from "../../components/whatwedo/whatwedo";
import Whoiam from "../../components/whoiam/whoiam";
import Video from "../../components/video-sec/video";
import FaqSection from "../../components/faqs/faqs";
import Contact from "../../components/contact/contact";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth"
    });
  }, [pathname]);

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Hero Section Component */}
      <Hero />

      {/* Why Work with Crescent Section */}
      <Working />

      {/* Innovative Solutions Section */}
      <Solution />

      {/* What We Do Section */}
      <Whatwedo />

      {/* Video Section */}
      <Video />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
