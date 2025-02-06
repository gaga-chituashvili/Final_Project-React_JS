import React from "react";
import left from "../home/images/left.svg";
import right from "../home/images/right.svg";

const ImageCarousel = ({ images, currentIndex, handlePrev, handleNext }) => {
  return (
    <section className="flex gap-x-[20px] relative">
      <img
        className="w-[50px] cursor-pointer hover:opacity-80 transition-opacity duration-300"
        src={left}
        alt="Left Arrow"
        onClick={handlePrev}
      />
      <div className="flex justify-center gap-x-[20px] overflow-hidden w-[calc(100%_-_100px)] transition-transform duration-500 ease-in-out">
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <article
            key={index}
            className="flex flex-col gap-y-[30px] border border-solid border-black p-[20px] rounded-[15px] hover:scale-105 transform transition-all duration-300 shadow-md"
          >
            <img
              className="slide_img object-cover w-[250px] h-[300px] rounded-[15px]"
              src={image.src}
              alt={image.label}
            />
            <h3 className="text-xl font-semibold text-center">{image.label}</h3>
          </article>
        ))}
      </div>
      <img
        className="w-[50px] cursor-pointer hover:opacity-80 transition-opacity duration-300"
        src={right}
        alt="Right Arrow"
        onClick={handleNext}
      />
    </section>
  );
};

export default ImageCarousel;
