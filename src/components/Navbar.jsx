import { div, nav } from "motion/react-client";
import React, { useState } from "react";
import logo2 from "../assets/images/logo2.jpg";
import { easeIn, easeOut, motion } from "motion/react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollIntoView = (ref) => {
    if (ref) {
      ref.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="fixed w-full z-50">
        <nav className="z-50  bg-[#010300] flex items-center justify-between w-full py-2 md:px-5 lg:px-20 px-4">
          <div>
            <img src={logo2} alt="logo img" className="w-20 md:w-24" />
          </div>

          <div className="hidden sm:flex text-[white] lg:gap-[3vw] gap-3 md:gap-4  items-center font-normalz justify-center text-md tracking-wider ">
            <a
              onClick={() => scrollIntoView(document.querySelector("#home"))}
              className="text-[#bcca22] text-shadow-2xs text-shadow-[#d2e40f] underline underline-offset-8"
            >
              Home
            </a>
            <a onClick={() => scrollIntoView(document.querySelector("#about"))}>
              About
            </a>
            <a onClick={() => scrollIntoView(document.querySelector("#menu"))}>
              Menu
            </a>
            <a
              onClick={() => scrollIntoView(document.querySelector("#gallery"))}
            >
              Gallery
            </a>
            <a
              onClick={() =>
                scrollIntoView(document.querySelector("#testimonials"))
              }
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollIntoView(document.querySelector("#contact"))}
            >
              Contact Us
            </a>
          </div>

          <div className="text-2xl sm:text-3xl text-white flex gap-2">
            <a href="tel:+37129158707">
              <i className="ri-phone-fill"></i>
            </a>
            <i
              onClick={() => setIsActive(!isActive)}
              className="ri-menu-2-fill sm:hidden"
            ></i>
          </div>
        </nav>
      </div>

      <motion.div
        className="bg-black absolute pt-35 w-full h-full text-white sm:hidden flex flex-col p-10 gap-10 font-poppins font-semibold text-2xl z-30"
        initial={{ x: "100%" }}
        animate={
          !isActive
            ? { x: "100%", transition: { duration: 0.2, ease: easeIn } }
            : { x: "0%", transition: { duration: 0.2, ease: easeOut } }
        }
      >
        <a href="" className="text-[#d2e40f] underline underline-offset-8">
          Home
        </a>
        <a href="">About</a>
        <a href="">Menu</a>
        <a href="">Gallary</a>
        <a href="">Testimonials</a>
        <a href="">Contact Us</a>
      </motion.div>
    </div>
  );
};
export default Navbar;
