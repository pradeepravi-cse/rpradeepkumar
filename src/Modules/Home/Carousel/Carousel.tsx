import React from "react";
import {
  ScrollingProvider,
  Section,
  useScrollSection,
} from "react-scroll-section";
import cs from "classnames";

import "./Carousel.scss";
import { Col, Row, Grid } from "antd";
import { Expertise } from "./Expertise/Expertise";
import { Projects } from "./Projects/Projects";

const { useBreakpoint } = Grid;

const SectionContainer: React.FC<{ background?: string }> = ({
  children,
  background,
}) => {
  const { xs } = useBreakpoint();
  console.log(xs);
  return (
    <div
      style={{
        height: xs ? "auto" : window.innerHeight,
        width: "100%",
        background,
      }}
    >
      {children}
    </div>
  );
};
const StaticMenu = () => {
  const expertiseSec = useScrollSection("expertise");
  const projectSec = useScrollSection("project");
  const careerSec = useScrollSection("career");
  const educationSec = useScrollSection("education");
  const hiddenSec = useScrollSection("hidden");
  const hidden1Sec = useScrollSection("hidden1");
  const menu = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!menu.current) return;

    window.addEventListener("scroll", () => {
      const expertiseSection = document.getElementById("expertise");
      const educationSection = document.getElementById("education");
      if (expertiseSection && menu.current) {
        if (
          expertiseSection.getBoundingClientRect().top <
          window.innerHeight / 1.5
        ) {
          menu.current.style.position = "fixed";
        } else {
          menu.current.style.position = "relative";
        }
      }
      if (educationSection && menu.current) {
        if (
          educationSection.getBoundingClientRect().bottom < window.innerHeight
        ) {
          menu.current.style.position = "relative";
        }
      }
    });
    if (
      educationSec.selected ||
      projectSec.selected ||
      careerSec.selected ||
      expertiseSec.selected
    ) {
      menu.current.style.position = "fixed";
    } else if (hiddenSec.selected || hidden1Sec.selected) {
      menu.current.style.position = "relative";
    }
  }, [
    expertiseSec,
    projectSec,
    careerSec,
    educationSec,
    hiddenSec,
    hidden1Sec,
  ]);

  return (
    <div
      ref={menu}
      style={{
        height: 600,
        top: 0,
        left: 0,
        bottom: 0,
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        width: "200px",
      }}
    >
      <ul className="SectionList">
        <li
          onClick={expertiseSec.onClick}
          className={cs({ active: expertiseSec.selected })}
        >
          <span>Expertise</span>
        </li>
        <li
          onClick={projectSec.onClick}
          className={cs({ active: projectSec.selected })}
        >
          <span>Project</span>
        </li>
        {/* <li
          onClick={careerSec.onClick}
          className={cs({ active: careerSec.selected })}
        >
          <span>Career</span>
        </li>
        <li
          onClick={educationSec.onClick}
          className={cs({ active: educationSec.selected })}
        >
          <span>Education</span>
        </li> */}
      </ul>
    </div>
  );
};

export const Carousel = () => (
  <>
    <ScrollingProvider scrollBehavior="smooth" debounceDelay={0}>
      <Row gutter={[16, 16]}>
        <Col md={{ span: 4 }} xs={{ span: 0 }}>
          <StaticMenu />
        </Col>
        <Col md={{ span: 20 }} xs={{ span: 24 }}>
          <Section id="hidden">
            <div style={{ height: 100 }} />
          </Section>
          <Section id="expertise">
            <SectionContainer>
              <Expertise />
            </SectionContainer>
          </Section>
          <Section id="project">
            <SectionContainer>
              <Projects />
            </SectionContainer>
          </Section>
          {/* <Section id="career">
            <SectionContainer background="green">💻</SectionContainer>
          </Section>
          <Section id="education">
            <SectionContainer background="pink">💌</SectionContainer>
          </Section> */}
          <Section id="hidden1">
            <div style={{ height: 100 }} />
          </Section>
        </Col>
      </Row>
    </ScrollingProvider>
  </>
);
