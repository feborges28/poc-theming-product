import React from 'react';
import "ds-wc/dist/components/card-content/ds-card-content";

const CardContent = () => (
  <ds-card-content
    headingText="Heading React"
    subtitleText="Subtitle React"
    paragraphText="Paragraph React. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    buttonLabel="Button React"
    on-click={handleClick}></ds-card-content>
);

function handleClick(event) {
  console.log("React:", event)
}

export default CardContent;