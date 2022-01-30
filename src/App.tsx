import React from "react";
import { Home } from "./Modules";

import "./Styles/index.scss";
import "antd/dist/antd.min.css";
import { Navbar } from "./Components";
import Signature from "./Assets/signature.svg";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Signature />
      </div>
    </>
  );
}

export default App;
