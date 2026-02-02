import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Working from "../../components/working/working";
import Hero from "../../components/hero-section/hero";
import Solution from "../../components/Innovative_solution/solution";
import Whatwedo from "../../components/whatwedo/whatwedo";
import Whoiam from "../../components/whoiam/whoiam";
import Video from "../../components/video-sec/video";
import FaqSection from "../../components/faqs/faqs";

const Home = () => {
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

      {/* who we are Section */}
      <Whoiam />

      {/* Video Section */}
      <Video />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
