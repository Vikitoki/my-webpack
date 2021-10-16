import React, { FC } from "react";
import "./App.scss";
import Img from "../public/images/example.jpg";

export const App: FC = () => {
  return (
    <div>
      App component
      <img className="img" src={Img} alt="" />
    </div>
  );
};
