import React from "react";

import CardMain from "../../component/UI/CardMain";
import Slider from "../UI/Slider";
import ItemList from "../../component/UI/ItemList";
import MuiBreadcrumbs from "../UI/MuiBreadcrumbs";

import "../HostelList/index.scss";

const HostelList = () => {
  return (
    <>
      <div className="hostellist__box">
        <CardMain>
          <div className="hostellist__box-inner">
            <MuiBreadcrumbs />
            <Slider />
            <ItemList />
          </div>
        </CardMain>
      </div>
    </>
  );
};

export default HostelList;
