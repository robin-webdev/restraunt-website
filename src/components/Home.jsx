import React from "react";
import heroimage from "../assets/images/hero-section.jpg";

const Home = () => {
  return (
    <section className="text-white flex flex-col-reverse md:flex-row md:mt-20 xl:mt-15 2xl:mt-5 items-center">
      <div className="flex flex-col gap-2 px-7 lg:pl-30 xl:pl-40">
        <div className="flex gap-2.5 text-sm">
          <span className="text-[#ffb700] flex gap-0.5">
            {Array.from(Array(5)).map((_, i) => {
              return <i key={i} className="ri-star-fill"></i>;
            })}
          </span>
          <span className="font-extrabold">4.5/5</span>
          <span className="text-[gray]">- on Google</span>
        </div>

        <h1 className=" font-poppins font-semibold text-3xl">
          Chatwala – Authentic Indian Flavors in Riga
        </h1>
        <p className=" font-bold text-[#adadad]">
          Experience the taste of India right in the heart of Riga. From spicy
          curries to street-food classics, every dish is made to delight your
          taste buds.
        </p>
        <div>
          <button className="mt-4 bg-[#d2e40f] py-1 text-black font-extrabold rounded-2xl inline-block px-6 ">
            Explore
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img src={heroimage} alt="hero image" className="w-80 md:w-250 xl:w-300" />
      </div>
    </section>
  );
};

export default Home;
