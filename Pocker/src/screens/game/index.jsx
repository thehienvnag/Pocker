import React from "react";
import Controller from "./Controller";
import Main from "./Main";
import "./index.css";

const GameBaiCao = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Game bài cào</h1>
      <Controller />
      <Main />
    </div>
  );
};

export default GameBaiCao;
