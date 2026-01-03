import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallary from "./components/Gallary";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="h-screen overflow-hidden w-screen relative bg-[#010300] md:text-lg">
      <header>
        <Navbar />
      </header>
      <div
        className="overflow-y-auto h-full flex flex-col gap-2"
        style={{ scrollbarWidth: "none" }}
      >
        <main className="flex gap-20 flex-col">
          <Home />
          <About />
          <Menu />
          <Gallary />
          <Testimonials />
        </main>
        <footer className="h-screen w-screen pb-50">
          <hr className="text-white w-full opacity-15 " />
          <Contact />
          <div className="text-[#9f9f9f] flex items-center font-light pt-8 text-sm justify-around">
            <h4>ChaatWala - 2025 All Rights Reserved</h4>
            <h5 className="font-poppins text-[#d2e40f]">Designed By Robin</h5>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
