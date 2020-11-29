import React from "react";
import { FooterContainer } from "./containers/Footer";
import { JumbotronContainer } from "./containers/Jumbotron";

export default function App() {
  return (
    <div className="app">
      <JumbotronContainer />
      <FooterContainer />
    </div>
  );
}
