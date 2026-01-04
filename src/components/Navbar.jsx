import { div, nav } from "motion/react-client";
import React, { useState } from "react";
import logo2 from "../assets/images/logo2.jpg";
import { easeIn, easeOut, motion } from "motion/react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOn, setIsOn] = useState("home");

  const scrollIntoView = (ref) => {
    if (ref) {
      setIsOn(ref.getAttribute("id"));
      setIsActive(false);
      if (isActive) {
        setTimeout(() => {
          ref.scrollIntoView({
            behavior: "smooth",
          });
        }, 300);
      } else {
        ref.scrollIntoView({
          behavior: "smooth",
        });
      }
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
              className={`cursor-pointer scroll-mt-26 ${
                isOn === "home" &&
                "underline underline-offset-8 text-[#bcca22] font-bold "
              }`}
              onClick={() => scrollIntoView(document.querySelector("#home"))}
            >
              Home
            </a>
            <a
              className={`cursor-pointer scroll-mt-26 ${
                isOn === "about" &&
                "underline underline-offset-8 text-[#bcca22]  ont-bold"
              }`}
              onClick={() => scrollIntoView(document.querySelector("#about"))}
            >
              About
            </a>
            <a
              className={`cursor-pointer scroll-mt-26 ${
                isOn === "menu" &&
                "underline underline-offset-8 text-[#bcca22] font-bold"
              }`}
              onClick={() => scrollIntoView(document.querySelector("#menu"))}
            >
              Menu
            </a>
            <a
              className={`cursor-pointer scroll-mt-26 ${
                isOn === "gallery" &&
                "underline underline-offset-8 text-[#bcca22]  font-bold"
              }`}
              onClick={() => scrollIntoView(document.querySelector("#gallery"))}
            >
              Gallery
            </a>
            <a
              className={`cursor-pointer scroll-mt-26 ${
                isOn === "testimonials" &&
                "underline underline-offset-8 text-[#bcca22]  font-bold"
              }`}
              onClick={() =>
                scrollIntoView(document.querySelector("#testimonials"))
              }
            >
              Testimonials
            </a>
            <a
              className={`cursor-pointer scroll-mt-26 ${
                isOn === "contact" &&
                "underline underline-offset-8 text-[#bcca22]  font-bold"
              }`}
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
        <a
          className={`cursor-pointer scroll-mt-26 ${
            isOn === "home" &&
            "underline underline-offset-8 text-[#bcca22] font-bold "
          }`}
          onClick={() => scrollIntoView(document.querySelector("#home"))}
        >
          Home
        </a>
        <a
          className={`cursor-pointer scroll-mt-26 ${
            isOn === "about" &&
            "underline underline-offset-8 text-[#bcca22]  ont-bold"
          }`}
          onClick={() => scrollIntoView(document.querySelector("#about"))}
        >
          About
        </a>
        <a
          className={`cursor-pointer scroll-mt-26 ${
            isOn === "menu" &&
            "underline underline-offset-8 text-[#bcca22] font-bold"
          }`}
          onClick={() => scrollIntoView(document.querySelector("#menu"))}
        >
          Menu
        </a>
        <a
          className={`cursor-pointer scroll-mt-26 ${
            isOn === "gallery" &&
            "underline underline-offset-8 text-[#bcca22]  font-bold"
          }`}
          onClick={() => scrollIntoView(document.querySelector("#gallery"))}
        >
          Gallery
        </a>
        <a
          className={`cursor-pointer scroll-mt-26 ${
            isOn === "testimonials" &&
            "underline underline-offset-8 text-[#bcca22]  font-bold"
          }`}
          onClick={() =>
            scrollIntoView(document.querySelector("#testimonials"))
          }
        >
          Testimonials
        </a>
        <a
          className={`cursor-pointer scroll-mt-26 ${
            isOn === "contact" &&
            "underline underline-offset-8 text-[#bcca22]  font-bold"
          }`}
          onClick={() => scrollIntoView(document.querySelector("#contact"))}
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};
export default Navbar;
