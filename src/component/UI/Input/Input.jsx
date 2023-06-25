import React from "react";

import "../Input/Input.scss";

const Input = ({ placeholder, type, label, register, name, errorName }) => {
  return (
    <div className="input__box">
      <label className="input__box-label">{label}</label>
      <input
        placeholder={placeholder}
        className="input__box-input"
        type={type}
        name={name}
        {...register(type, {
          required: true,
          minLength: 6,
          maxLength: 100,
        })}
      />
      {errorName && (
        <span className="input__box-error_alert">
          {errorName?.message ?? "Введите логин"}
        </span>
      )}
      {errorName && errorName.type === "maxLength" && (
        <span className="input__box-error_alert">не более 100 символов</span>
      )}
      {errorName && errorName.type === "minLength" && (
        <span className="input__box-error_alert">не менее 6 символов</span>
      )}
    </div>
  );
};

export default Input;
