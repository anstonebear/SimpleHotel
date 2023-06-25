import React from "react";

import InputMain from "../../component/UI/InputMain";
import Button from "../../component/UI/Button";
import CardMain from "../../component/UI/CardMain";

import "../Filter/index.scss";

const Filter = () => {
  return (
    <>
      <div className="filtr__box">
        <CardMain>
          <div className="filtr_box-menu">
            <InputMain label={"Локация"} placeholder={"Москва"} type={"text"} />
            <InputMain label={"Дата заселения"} type={"date"} />
            <InputMain
              label={"Количество дней"}
              placeholder={"1"}
              type={"number"}
            />
            <Button name={"Найти"} />
          </div>
        </CardMain>
      </div>
    </>
  );
};

export default Filter;
