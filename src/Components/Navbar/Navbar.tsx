import React from "react";
import { Row, Col } from "antd";

import logo from "../../Assets/images/logo.png";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <Row className="Navbar" justify="center" align="middle">
      <Col
        span={4}
        offset={2}
        className="h-100"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={logo} alt="logo" className="logo" />
      </Col>
      <Col span={16} offset={2}></Col>
    </Row>
  );
};
