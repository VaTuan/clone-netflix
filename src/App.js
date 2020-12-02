import React from "react";
import { FAQsContainer } from "./containers/FAQs";
import { FooterContainer } from "./containers/Footer";
import { JumbotronContainer } from "./containers/Jumbotron";

export default function App() {
  return (
    <div className="app">
      <JumbotronContainer />
      <FAQsContainer />
      <FooterContainer />
    </div>
  );
}
