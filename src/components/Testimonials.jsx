import React from "react";
import ReviewItem from "./ReviewItem";
import { reviews } from "../data/items";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col scroll-mt-18 gap-2 items-center my-20"
    >
      <h2 className="text-[#d2e40f] font-serif font-bold text-2xl lg:text-3xl xl:text-4xl">
        What our Customers Say
      </h2>
      <p className="text-[#b4b4b4] mb-6 text-sm lg:text-lg">
        Don't just take our word for it.
      </p>

      <div className="flex items-center gap-7 w-screen overflow-auto px-7 pb-5 lg:justify-center lg:px-24 xl:px-35 2xl:px-50">
        {reviews.map(({ img, name, review }, i) => {
          return <ReviewItem key={i} img={img} name={name} review={review} />;
        })}
      </div>
    </section>
  );
};

export default Testimonials;
