import React from "react";
import { Row, Col, Typography, Button, Grid } from "antd";
import { FiDownload, FiSend } from "react-icons/fi";

import "./Hero.scss";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;
export const Hero = () => {
  const breakpoint = useBreakpoint();
  const height = window.innerHeight - 80;
  return (
    <Row className="Hero" style={{ height }}>
      <Col span={24} className="h-100">
        <Row gutter={16} className="h-100 w-100">
          <Col
            className="Hero__Welcometext"
            md={10}
            lg={8}
            xs={24}
            style={{
              textAlign: breakpoint.xs === true ? "center" : "left",
            }}
          >
            <Title className="c-white">Hi There!</Title>
            <Paragraph className="c-white w-100">
              I am Pradeepkumar. I am a Software developer expertise in
              Front-End Development, UI/UX Designing and Devops
            </Paragraph>
            <Paragraph className="c-white w-100">
              And Keepin up the phase in the management &amp; process skills
              like Team Management, Scrum Master
            </Paragraph>
            <Row gutter={16} style={{ marginTop: 20 }}>
              <Col xs={12} md={8}>
                <Button
                  className="Button Button--holo-white"
                  href="mailto:pradeepravi.cse@gmail.com"
                >
                  Contact <FiSend style={{ marginLeft: 8 }} size={16} />
                </Button>
              </Col>
              <Col xs={12} md={8}>
                <Button
                  className="Button Button--holo-white"
                  href={`${process.env.PUBLIC_URL}/resume.pdf`}
                  download={`Pradeep-Resume-${new Date().toLocaleDateString()}.pdf`}
                >
                  Resume <FiDownload style={{ marginLeft: 8 }} size={16} />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="Hero__Banner" md={14} lg={12} xs={24}>
            <div className="photo-wrapper"></div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
