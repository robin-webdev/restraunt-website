import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallary from "./components/gallary";

const App = () => {
  return (
    <div className="h-screen overflow-hidden w-screen relative bg-[#010300]">
      <header>
        <Navbar />
      </header>
      <main
        className="overflow-y-scroll h-full flex gap-30 flex-col pb-40 scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {/* <Home />
        <About />
        <Menu />
        <Gallary /> */}k
      </main>
    </div>
  );
};

export default App;
