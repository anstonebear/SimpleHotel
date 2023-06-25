import React from "react";

import "../InputMain/index.scss";

const InputMain = ({ placeholder, type, label }) => {
  return (
    <div className="input__box">
      <label className="input__box-label">{label}</label>
      <input
        placeholder={placeholder}
        className="input__box-input"
        type={type}
      />
    </div>
  );
};

export default InputMain;
