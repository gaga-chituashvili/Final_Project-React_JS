import React from "react";
import clooth from "../home/images/clooth.png";
import clooth3 from "../home/images/clooth3.png";
import clooth4 from "../home/images/clooth4.png";
import clooth5 from "../home/images/clooth5.png";
import clooth6 from "../home/images/clooth6.png";
import clooth7 from "../home/images/clooth7.png";

const TrendingBrands = () => {
  return (
    <section className="flex flex-col gap-y-[70px]">
      <h3 className="text-[30px] text-center font-semibold text-gray-700">
        TRENDING BRANDS
      </h3>
      <section className="flex justify-center gap-x-[20px] overflow-x-scroll">
        {[clooth, clooth3, clooth4, clooth5, clooth6, clooth7].map((brand, index) => (
          <img
            key={index}
            className="w-[200px] rounded-2xl transition-transform transform hover:scale-110 hover:shadow-xl"
            src={brand}
            alt={`Brand ${index + 1}`}
          />
        ))}
      </section>
    </section>
  );
};

export default TrendingBrands;
