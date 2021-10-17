import React, { FC, useState } from "react";
import "./App.scss";
import Img from "../public/images/example.jpg";

export const App: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>111111111111</span>
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};
