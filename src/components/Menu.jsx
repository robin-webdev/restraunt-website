import MenuCard from "./MenuCard";
import menuItems from "../data/items";
import { color } from "motion";

const Menu = () => {
  return (
    <section
      id="menu"
      className="scroll-mt-18 px-7 flex flex-col gap-12 items-center justify-center"
    >
      <h2 className="text-poppins text-3xl font-bold text-white text-center lg:text-4xl border-b-2 rounded-2xl px-4 py-2 border-[#d2e40f]">
        Popular Dishes
      </h2>

      <div
        className="w-full h-full grid gap-y-9 justify-items-center overflow-x-auto gap-x-9 grid-cols-[repeat(6,280px)] md:grid-cols-[repeat(2,280px)] md:justify-center lg:grid-cols-[repeat(3,280px)] xl:grid-cols-[repeat(3,300px)] py-4"
        style={{
          scrollbarWidth: "1px",
        }}
      >
        {menuItems.map((item, i) => {
          if (i >= 6) {
            return null;
          }
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
      <button className="bg-transparent border-2 px-6 py-3 font-bold rounded-2xl text-[#d2e40f]">
        See Full Menu
      </button>
    </section>
  );
};

export default Menu;
