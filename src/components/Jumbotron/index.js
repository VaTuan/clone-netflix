import React from "react";
import {
  Item,
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction} {...restProps} className="Jumbotron-Item">
        {children}
      </Inner>
    </Item>
  );
}

//** Cách tạo component khác */
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return (
    <Container {...restProps} className="jumbotron-container">
      {children}
    </Container>
  );
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubtitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
