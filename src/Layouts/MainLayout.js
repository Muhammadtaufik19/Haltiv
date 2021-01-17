import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const MainLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      <Footer />
    </div>
  );
};

export default MainLayout;
