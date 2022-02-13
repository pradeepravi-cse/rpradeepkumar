import React from "react";
import { Home } from "./Modules";

import "./Styles/index.scss";
import "antd/dist/antd.min.css";
import { Navbar } from "./Components";
import { Signature } from "./Components/Signature";
import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="SVG-wrapper">
        <div className="line-1 anim-typewriter">Pradeepkumar</div>
      </div>
    </>
  );
}

export default App;
