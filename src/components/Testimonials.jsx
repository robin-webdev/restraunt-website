import React from "react";
import ReviewItem from "./reviewItem";
import { reviews } from "../data/items";

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-2 items-center ">
      <h2 className="text-[#d2e40f] font-serif font-bold text-2xl ">
        What our Customers Say
      </h2>
      <p className="text-[#b4b4b4] mb-6 text-sm">
        Don't just take our word for it.
      </p>

      <div className="flex items-center gap-5 w-screen overflow-auto px-7 pb-5">
        {reviews.map(({ img, name, review }, i) => {
          return <ReviewItem key={i} img={img} name={name} review={review} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
