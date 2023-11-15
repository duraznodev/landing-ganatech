import React from "react";
import "./App.css";
import { CTA, Hero, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
      </div>
      <CTA />
    </>
  );
};

export default App;
