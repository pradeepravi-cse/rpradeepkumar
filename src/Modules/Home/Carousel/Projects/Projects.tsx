import { Col, Row, Typography, Tag } from "antd";
import { map } from "lodash";
import React from "react";
import datas from "./projects.json";

import "./Projects.scss";

const { Title } = Typography;

export const Projects = () => {
  return (
    <Row className="Row" gutter={[20, 20]}>
      {map(datas, (data) => (
        <Col lg={{ span: 5 }} xs={{ span: 12 }}>
          <div className="project">
            <div className="project__imagewrapper">
              <img src={require(`../../../../Assets/projects/${data.img}`)} />
            </div>
            <div className="project__contentwrapper">
              <Title level={3}>{data.title}</Title>
              <Row>
                {map(data.tags, (tag) => (
                  <Col>
                    <Tag>{tag}</Tag>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
