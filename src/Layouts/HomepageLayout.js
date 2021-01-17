import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Homepage from "../page/Homepage";

const HomepageLayout = () => {
  return (
    <div className="fullHeight">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default HomepageLayout;
