import React from "react";
import { useForm } from "react-hook-form";

import Form from "../../UI/Form/index";

import "../Card/index.scss";

const Card = ({ title, data }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      resetField("login");
      resetField("password");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <div className="card__box">
      <div className="card__box-card">
        <h1>{title}</h1>
        <Form
          name={["password", "login"]}
          disabled={!data}
          title={"Simple Hotel Check"}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Card;
