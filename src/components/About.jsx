import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="text-white scroll-mt-18 flex-col-reverse lg:flex-row gap-20 lg:gap-10  px-7 md:px-12 lg:px-7 xl:px-12 flex items-center justify-center xl:items-start"
    >
      <div className="flex flex-col lg:w-full gap-1">
        <div className="flex items-center gap-2">
          <div className="w-10 h-1 bg-[#d2e40f] " />
          <h2 className="font-poppins text-[#d2e40f] text-sm">ABOUT US</h2>
        </div>

        <h2 className="font-poppins font-bold text-3xl lg:text-4xl">
          About Chaatwala
        </h2>

        <p className="text-sm font-semibold text-[#d6d7c5] max-w-lg ">
          Chatwala serves bold Indian street flavors using fresh ingredients and
          traditional recipes. Simple food, strong taste, and a relaxed place to
          enjoy it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-x-3 gap-y-4 pt-5">
          <div className="flex items-center font-bold gap-3">
            <i className="ri-bowl-line text-4xl"></i>
            Freshly prepared dishes every day
          </div>
          <div className="flex items-center font-bold gap-3">
            <i className="ri-cake-2-line text-4xl"></i>
            Authentic Indian spices and recipes
          </div>
          <div className="flex items-center font-bold gap-3">
            <i className="ri-bread-fill text-4xl"></i>
            Quick bites and full meals
          </div>

          <div className="flex items-center font-bold gap-3">
            <i className="ri-restaurant-2-line text-4xl"></i>
            Casual, welcoming spot in Riga
          </div>
        </div>

        <div>
          <a
            href="https://food.bolt.eu/en/3-riga/p/135586-chaatwala/"
            target="_blank"
            className="mt-5 bg-[#d2e40f] py-1 text-black font-bold font-poppins rounded-2xl inline-block px-6 "
          >
            Order
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-[minmax(120px,1fr)_minmax(120px,1fr)] gap-6  min-h-60 max-h-120  sm:mt-20 lg:mt-0  lg:min-h-[80%] overflow-hidden ">
        <img
          className="row-span-2 object-cover h-full rounded-t-[3rem] rounded-br-[3rem]"
          src="https://static.wixstatic.com/media/93f03e_d13ef4c9593b49a0af245e29e60c9ac1~mv2.jpg/v1/fill/w_640,h_680,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/93f03e_d13ef4c9593b49a0af245e29e60c9ac1~mv2.jpg"
          alt="about us image"
        />
        <div className="rounded-t-[3rem] overflow-hidden">
          <img
            className="object-cover h-full rounded-t-[3rem]  w-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1YMAvVcddzxTbkyPkHaWmQ6u691ehTWLPA&s"
            alt="about us image"
          />
        </div>
        <div className=" rounded-b-[3rem] overflow-hidden">
          <img
            className="object-cover h-full rounded-b-[3rem] w-full "
            src="https://www.lattravel.lv/assets/New_galleries/Singhs/5.jpg"
            alt="about us image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
