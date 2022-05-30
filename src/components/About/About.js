import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponent";
import Button from "../../styles/GlobalComponent/Button";
import { LeftSection } from "./AboutStyles";

const About = () => {
  return (
    <Section row nopadding id="about">
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My Personal Website
        </SectionTitle>
        <SectionText>
          My name is Dhika Astri Wicaksana, I'm 25 years old, from Madiun,
          graduate from University of PGRI Madiun major Information Technology.
          I'm focusing at services and expertise in Website and Web Application
          Development. I think I suitable the position, apart from increase my
          passion and experience, also improve my skills, and develop my
          potential.
        </SectionText>
        <Button onClick={() => window.open("https://dhi1ka.vercel.app")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
};

export default About;
