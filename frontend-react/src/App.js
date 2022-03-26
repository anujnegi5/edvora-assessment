import React from "react";

import { Rides } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Rides />
      {/* <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer /> */}
    </div>
  );
};

export default App;
