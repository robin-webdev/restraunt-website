import React from "react";

const ReviewItem = ({ img, name, review }) => {
  return (
    <div className="min-w-3/4 h-full items-start rounded-2xl p-4 flex-col bg-[#060D01] border border-[#2f322d]">
      <div className="flex gap-3 mb-5">
        <img className=" self-center w-10" src={img} alt="menu card img" />
        <div>
          <h3 className=" font-bold opacity-90 -z-50 text-white text-lg">
            {name}
          </h3>
          <div className="text-[#ffb700] flex gap-0.5">
            {Array.from(Array(5)).map((_, i) => {
              return <i key={i} className="ri-star-fill"></i>;
            })}
          </div>
        </div>
      </div>

      <p className="text-[#c4c4c4]">"{review}"</p>
    </div>
  );
};

export default ReviewItem;
