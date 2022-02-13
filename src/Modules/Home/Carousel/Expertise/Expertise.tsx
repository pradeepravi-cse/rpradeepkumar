import { Row, Col } from "antd";
import React from "react";
import { map } from "lodash";
import datas from "./expertise.json";

import "./Expertise.scss";

export const Expertise = () => {
  return (
    <Row
      style={{ height: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Col span={24}>
        {map(datas, (data, key) => (
          <Row
            className={"row row-gutter"}
            gutter={[16, 16]}
            style={{ justifyContent: "start" }}
          >
            {map(data, (d, i) => (
              <Col
                span={3}
                className={d}
                style={{
                  ...(key === "row2" && i === 0 && { marginLeft: "6.5%" }),
                }}
              >
                {console.log(key, i)}
                <div className="hex"></div>
              </Col>
            ))}
          </Row>
        ))}
      </Col>
    </Row>
  );
};
