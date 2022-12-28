import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ padding: "10px", height: "500px" }}>
      <Link to="/infiniteScroll">infiniteScroll</Link>
      <p></p>
      <Link to="/btnCount">BtnCount</Link>
      <p></p>
    </div>
  );
};

export default Main;
