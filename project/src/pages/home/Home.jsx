import React, { useState, useEffect } from "react";
import "../../reset.css";
import "./css/home.css";
import image3 from "../home/images/image3.png";
import image4 from "../home/images/image4.png";
import image5 from "../home/images/image5.png";
import image7 from "../home/images/image7.png";
import image8 from "../home/images/image8.png";
import image9 from "../home/images/image9.png";
import ImageCarousel from "./ImageCarousel";
import TrendingBrands from "./TrendingBrands";
import ScrollButton from "./ScrollButton";

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
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    setShowScrollButton(currentScroll > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 5 : prevIndex - 1
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

      <ImageCarousel
        images={images}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />

      <section className="flex flex-col gap-y-[30px] bg-gradient-to-r from-indigo-100 to-white py-16">
        <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Discover Top Brands and Exclusive Deals at Kolh's Your Ultimate Shopping Destination
        </h3>
        <p className="text-lg text-center leading-relaxed px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-gray-800">
          Welcome to Kolh's, where exceptional style, unbeatable deals, and top brands come together for a shopping experience like no other...
        </p>
      </section>

      <TrendingBrands />

      <ScrollButton showScrollButton={showScrollButton} />
    </section>
  );
};

export default Home;
