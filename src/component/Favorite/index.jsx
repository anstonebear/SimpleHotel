import React from "react";

import CardMain from "../../component/UI/CardMain";
import FormMain from "../../component/UI/FormMain";

import FavoritesList from '../UI/FavoritesList/FavoritesList';
import Options from "../UI/Options";

const Favorite = () => {
  return (
    <>
      <div className="favorite__menu">
        <CardMain>
          <FormMain title={"Избранное"}>
            <Options />
           <FavoritesList/>
          </FormMain>
        </CardMain>
      </div>
    </>
  );
};

export default Favorite;
