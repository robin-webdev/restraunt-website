import React from "react";

const MenuCard = ({ img, title, description, price }) => {
  return (
    <div className="h-90 w-3/4 items-start rounded-2xl gap-1 flex flex-col bg-[#060D01] border border-[#2f322d]">
      <img
        className="w-3/4 self-center min-h-45"
        src={img}
        alt="menu card img"
      />
      <h3 className="font-poppins font-bold opacity-90 -z-10 text-white px-4 text-lg">
        {title}
      </h3>
      <p className="text-[#c4c4c4] px-4">{description}</p>
      <p className="text-white px-4 font-poppins font-bold pt-3 text-3xl">
        €{price}
      </p>
    </div>
  );
};

export default MenuCard;
