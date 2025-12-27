import React from "react";

const Contact = () => {
  return (
    <div className="text-white px-7 pt-8">
      <div className="flex flex-col gap-1 justify-center">
        <h1 className="text-3xl text-white font-poppins font-bold">
          Chaatwala
        </h1>
        <p className="text-[#c2c2c2] text-sm">
          Where every dish is crafted with love and spices.
        </p>
        <div className="flex gap-2 pt-2 text-3xl text-[#d2e40f]">
          <i className="ri-facebook-circle-line"></i>
          <i className="ri-instagram-line"></i>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-7">
        <h2 className="font-extrabold text-2xl">CONTACT US</h2>
        <div className="flex gap-2 items-center ">
          <i className="ri-phone-line text-[#d2e40f] text-2xl"></i>
          <span className="text-[#dcdcdc]">+371 29158707</span>
        </div>
        <div className="flex gap-2 items-center ">
          <i className="ri-mail-line text-[#d2e40f] text-2xl"></i>
          <span className="text-[#dcdcdc]">chaatwala@gmail.com</span>
        </div>
        <div className="flex gap-2 items-center ">
          <i className="ri-map-pin-line text-[#d2e40f] text-2xl"></i>
          <span className="text-[#dcdcdc]">
            Stabu iela 35, Centra rajons, Rīga, LV-1011
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-7">
        <h2 className="font-extrabold text-2xl pb-2">QUICK LINKS</h2>
        <div className="grid grid-cols-2 gap-y-2">
          <span className="text-[#cfcfcf] font-extrabold text-lg">Home</span>
          <span className="text-[#cfcfcf] font-extrabold text-lg">About</span>
          <span className="text-[#cfcfcf] font-extrabold text-lg">Menu</span>
          <span className="text-[#cfcfcf] font-extrabold text-lg">Gallary</span>
          <span className="text-[#cfcfcf] font-extrabold text-lg">
            Testimonials
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-7">
        <h2 className="font-extrabold text-2xl pb-2">OPENING HOURS</h2>
        <span className="text-[#dcdcdc] flex gap-4">
          Mon - Sun
          <span className="text-white font-extrabold">11am - 11:30pm</span>
        </span>
        <div>
          <button className="px-6 flex gap-3 items-center py-3 border-2 border-[#d2e40f] mt-6 rounded-3xl">
            <i className="ri-road-map-fill text-[#d2e40f] text-2xl"></i>
            <span className="font-bold text-lg text-[#d2e40f]">
              View on Map
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
