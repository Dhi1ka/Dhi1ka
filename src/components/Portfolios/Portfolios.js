import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./PortfoliosStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponent";
import { portfolios } from "../../constants/portfolios";

const Portfolios = () => (
  <Section nopadding id="portfolios">
    <SectionDivider />
    <SectionTitle main>Portfolios</SectionTitle>
    <GridContainer>
      {portfolios.map(
        ({ id, title, description, image, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>#{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit} target="_blank">
                Visit
              </ExternalLinks>
              <ExternalLinks href={source} target="_blank">
                Source
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Portfolios;
