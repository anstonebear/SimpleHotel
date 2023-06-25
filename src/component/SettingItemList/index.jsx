import React from "react";

import Filter from "../Filter";
import Favorite from "../Favorite";

import "./index.scss";

const SettingItemList = () => {
  return (
    <div className="settingItemList_box">
      <Filter />
      <Favorite />
    </div>
  );
};

export default SettingItemList;
