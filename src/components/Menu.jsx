import React from "react";
import MenuCard from "./MenuCard";
import butter from "../assets/images/menu/butter-chicken.png";
import menuItems from "../data/items";

const Menu = () => {
  return (
    <section className="px-7 flex flex-col gap-12 items-center justify-center">
      <h1 className="text-poppins text-3xl font-bold text-white text-center">
        Popular Dishes
      </h1>

      <div className="w-full h-full grid grid-cols-1 justify-items-center gap-y-5 ">
        {menuItems.map((item, i) => {
          return (
            <MenuCard
              key={i}
              img={item.img}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
      <button className="bg-transparent border-2 px-6 py-3 font-bold rounded-2xl text-[#d2e40f]">See Full Menu</button>
    </section>
  );
};

export default Menu;
