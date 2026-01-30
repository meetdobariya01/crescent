import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Working from "../../components/working/working";
import Hero from "../../components/hero-section/hero";
import Solution from "../../components/Innovative_solution/solution";

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

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
