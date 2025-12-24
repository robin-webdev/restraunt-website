import { div, nav } from "motion/react-client";
import React, { useState } from "react";
import logo2 from "../assets/images/logo2.jpg";
import { easeIn, easeOut, motion } from "motion/react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="overflow-hidden">
      <nav className="z-50  bg-[#010300] flex items-center justify-between w-full py-2 px-4">
        <div>
          <img src={logo2} alt="logo img" width={70} />
        </div>
        <div className="text-2xl text-white flex gap-2">
          <a href="tel:+37128732556">
            <i className="ri-phone-fill"></i>
          </a>
          <i
            onClick={() => setIsActive(!isActive)}
            className="ri-menu-2-fill"
          ></i>
        </div>
      </nav>

      <motion.div
        className="bg-gray-700 absolute w-full h-full "
        initial={{ x: "100%" }}
        animate={
          !isActive
            ? { x: "100%", transition: { duration: 0.2, ease: easeIn } }
            : { x: "0%", transition: { duration: 0.2, ease: easeOut } }
        }
      >
        dsd
      </motion.div>
    </div>
  );
};
export default Navbar;
