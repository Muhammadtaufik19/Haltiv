import React, { Component } from "react";
import BajuPria from "../../Asset/BajuPria.jpg";
import BajuWanita from "../../Asset/BajuWanita.jpg";
import "./styles.scss";

const Directorry = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${BajuPria})` }}>
          <a>BajuPria</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${BajuPria})` }}>
          <a>wanita</a>
        </div>
      </div>
    </div>
  );
};

export default Directorry;
