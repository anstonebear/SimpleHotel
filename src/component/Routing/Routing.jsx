import { Route, Routes } from "react-router-dom";

import AuthPage from "../../pages/AuthPage";
import MainPage from "../../pages/MainPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/mainpage" element={<MainPage />} />
    </Routes>
  );
};
export default Routing;
