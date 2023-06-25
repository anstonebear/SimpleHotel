import React from "react";

import Header from "../Header/Index";
import Menu from "../Menu";
import "./index.scss";

const ContentMainpage = () => {
  return (
    <div className="mainpag__box">
      <Header />
      <Menu />
    </div>
  );
};

export default ContentMainpage;
