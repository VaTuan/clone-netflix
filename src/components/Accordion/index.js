import React from "react";

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{chilren}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
