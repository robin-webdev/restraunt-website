import React from "react";
import heroimage from "../assets/images/hero-section.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="text-white scroll-mt-18 relative bg-[url(./assets/images/hero-section.jpg)] h-[95vh] bg-cover flex flex-col-reverse md:flex-row items-center"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.7)] ">
        <div className="h-full flex flex-col gap-2 px-7 sm:px-15 md:px-20 lg:px-30 xl:px-45 2xl:px-65 pt-[15vh]">
          <div className="flex items-center gap-2.5 text-">
            <span className="text-[#ffb700] flex gap-0.5">
              {Array.from(Array(5)).map((_, i) => {
                return <i key={i} className="ri-star-fill"></i>;
              })}
            </span>
            <span className="font-extrabold">4.5/5</span>
            <span className="text-[#d0d0d0] text-sm">- on Google</span>
          </div>

          <h1 className=" font-poppins font-semibold text-4xl lg:text-5xl xl:text-6xl  ">
            Chatwala - Authentic Indian Flavors in Riga
          </h1>
          <p className="xl:text-lg text-[#c4c4c4]">
            Experience the taste of India right in the heart of Riga. From spicy
            curries to street-food classics, every dish is made to delight your
            taste buds.
          </p>
          <p className="xl:text-lg text-[#c4c4c4]">
            Authentic Indian cuisine made with traditional spices and fresh
            ingredients. From rich curries to street-food classics, Chatwala
            brings the true taste of India to Riga in a warm and welcoming
            setting.
          </p>
          <div>
            <a
              href="https://food.bolt.eu/en/3-riga/p/135586-chaatwala/"
              target="_blank"
              className="mt-4 border-2 bg-transparent border-[#d2e40f] py-1 text-[#d2e40f]  rounded-lg inline-block px-6 "
            >
              Order
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* <img
          src={heroimage}
          alt="hero image"
          className="w-80 md:w-250 xl:w-300"
          /> */}
      </div>
    </section>
  );
};

export default Home;
