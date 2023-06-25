import React from "react";

import HostelList from "../HostelList";
import SettingItemList from "../SettingItemList";
import "./index.scss";

const Menu = () => {
  return (
    <div className="menu">
      <SettingItemList />
      <HostelList />
    </div>
  );
};

export default Menu;
