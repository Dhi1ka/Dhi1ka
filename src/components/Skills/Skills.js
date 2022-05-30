import React from "react";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3Full,
  DiPostgresql,
  DiMongodb,
  DiNodejsSmall,
} from "react-icons/di";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponent";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./SkillsStyles";

const Skills = () => {
  return (
    <Section id="skills">
      <SectionDivider />
      <SectionTitle main>Skills</SectionTitle>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>
              <DiJavascript1 size="6rem" />
            </ListTitle>
            <ListParagraph>
              JavaScript (JS) is a lightweight, interpreted, or just-in-time
              compiled programming language with first-class functions.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>
              <DiHtml5 size="6rem" />
            </ListTitle>
            <ListParagraph>
              HTML (HyperText Markup Language) is the most basic building block
              of the Web.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>
              <DiCss3Full size="6rem" />
            </ListTitle>
            <ListParagraph>
              Cascading Style Sheets (CSS) is a stylesheet language used to
              describe the presentation of a document written in HTML or XML
              (including XML dialects such as SVG, MathML or XHTML).
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>
              <DiPostgresql size="6rem" />
            </ListTitle>
            <ListParagraph>
              PostgreSQL is a powerful, open source object-relational database
              system with over 30 years of active development that has earned it
              a strong reputation for reliability, feature robustness, and
              performance.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>
              <DiMongodb size="6rem" />
            </ListTitle>
            <ListParagraph>
              MongoDB is a document database designed for ease of application
              development and scaling.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>
              <DiNodejsSmall size="6rem" />
            </ListTitle>
            <ListParagraph>
              Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript
              engine.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Skills;
