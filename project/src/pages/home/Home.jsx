import React, { useState, useRef } from "react";
import "../../reset.css";
import "./css/home.css";
import image3 from "../home/images/image3.png";
import image4 from "../home/images/image4.png";
import image5 from "../home/images/image5.png";
import image7 from "../home/images/image7.png";
import image8 from "../home/images/image8.png";
import image9 from "../home/images/image9.png";
import right from "../home/images/right.svg";
import left from "../home/images/left.svg";
import clooth from "../home/images/clooth.png"
import clooth3 from "../home/images/clooth3.png"
import clooth4 from "../home/images/clooth4.png"
import clooth5 from "../home/images/clooth5.png"
import clooth6 from "../home/images/clooth6.png"
import clooth7 from "../home/images/clooth7.png"

const images = [
  { src: image3, label: "Button Downs" },
  { src: image4, label: "T-Shirts" },
  { src: image5, label: "Denims" },
  { src: image7, label: "Shoes & Boots" },
  { src: image8, label: "Big & Tall" },
  { src: image9, label: "Pajamers" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 || prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 5 ? 0 : prevIndex + 1
    );
  };


  return (
    <section className="home_main_section w-full flex flex-col gap-y-[200px] p-[100px]">
      <section className="main_img w-full h-[700px] flex items-center justify-center bg-[url('/src/pages/home/images/homeimg1.png')] bg-no-repeat bg-cover bg-left rounded-2xl shadow-lg">
        <article className="title_article flex flex-col gap-y-[30px] text-center">
          <p className="main_img_text text-[50px] text-center font-semibold text-white">
            We Make The Goods That Make Life Better.
          </p>
          <h2 className="main_img_text text-[60px] text-center font-bold text-white">
            LENOMA
          </h2>
        </article>
      </section>

      <section className="flex gap-x-[20px] relative">
        <img
          className="w-[50px] cursor-pointer hover:opacity-80 transition-opacity duration-300"
          src={left}
          alt="Left Arrow"
          onClick={handlePrev}
        />
        <div
          ref={carouselRef}
          className="flex justify-center gap-x-[20px] overflow-hidden w-[calc(100%_-_100px)] transition-transform duration-500 ease-in-out"
        >
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
              <h3 className="text-xl font-semibold text-center">
                {image.label}
              </h3>
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

      <section className="flex flex-col gap-y-[70px]">
        <h3 className="text-[30px] text-center font-semibold text-gray-700">
          TRENDING BRANDS
        </h3>
        <section className="flex justify-center gap-x-[20px] overflow-x-scroll">
          <img className="w-[200px] rounded-2xl " src={clooth}/>
          <img className="w-[200px] rounded-2xl" src={clooth3}/>
          <img className="w-[200px] rounded-2xl" src={clooth5}/>
          <img className="w-[200px] rounded-2xl" src={clooth6}/>
          <img className="w-[200px] rounded-2xl" src={clooth4}/>
          <img className="w-[200px] rounded-2xl" src={clooth7}/>
        </section>
      </section>
    </section>
  );
};

export default Home;
