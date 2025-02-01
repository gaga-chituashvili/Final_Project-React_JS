import React, { useState, useEffect, useRef } from "react";
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
import clooth from "../home/images/clooth.png";
import clooth3 from "../home/images/clooth3.png";
import clooth4 from "../home/images/clooth4.png";
import clooth5 from "../home/images/clooth5.png";
import clooth6 from "../home/images/clooth6.png";
import clooth7 from "../home/images/clooth7.png";

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
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollTop) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
    setLastScrollTop(currentScroll || 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

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

      <section className="flex flex-col gap-y-[30px]">
        <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Discover Top Brands and Exclusive Deals at Kolh's Your Ultimate
          Shopping Destination
        </h3>
        <p class="text-lg text-center leading-relaxed px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-gray-800">
          Welcome to Kolh's, where exceptional style, unbeatable deals, and top
          brands come together for a shopping experience like no other. Whether
          you're updating your wardrobe, finding the perfect gift, or sprucing
          up your home, Kolh's has it all. As a leading department store, we
          offer a wide variety of items to meet all your needs, both in-store
          and through Kolh's online shopping. Looking for high-quality,
          affordable fashion? Check out our exclusive brands, including Sonoma
          Goods for Life, offering versatile clothing and home goods designed to
          fit your lifestyle. For a touch of elegance and trendy, feminine
          looks, don't miss the chic collections from LC Lauren Conrad, Simply
          Vera Vera Wang, and Nine West. Kolh's makes it easy to find all the
          apparel you need for your family. Start by exploring our vast
          selection of women's clothing and men's clothing, with styles ranging
          from casual essentials to formal business attire. Next, check out our
          full assortment of kids' clothing, featuring options for boys and
          girls of all ages. Kolh's also offers an extensive range of shoes for
          the whole family, with options for work, play, and everything in
          between. Kolh's has a wide selection to make your home uniquely yours.
          Be sure to take advantage of our clearance deals for even more
          savings! You'll find deeply discounted prices on everything from
          clothing to home essentials, making Kolh's the perfect place for
          budget-friendly shopping. Plus, don't forget about the amazing beauty
          products found here. Shop the latest beauty trends, skincare
          solutions, and exclusive offers at Sephora at Kolh's, your one-stop
          shop for premium beauty brands. Managing your account is easy with a
          Kolh's login. Here, you can check orders, track rewards, and monitor
          your Kolh's credit card all in one place. Whether you prefer the
          convenience of shopping at Kolh's online or prefer the in-person
          experience at a Kolh's store, we make it simple and enjoyable. At
          Kolh's, we strive to be your favorite clothing store and online
          shopping destination, with a focus on value, quality, and service.
          Start shopping now to find everything you need - from clothing, home
          decor, and more - all here at Kolh's!
        </p>
      </section>

      <section className="flex flex-col gap-y-[70px]">
        <h3 className="text-[30px] text-center font-semibold text-gray-700">
          TRENDING BRANDS
        </h3>
        <section className="flex justify-center gap-x-[20px] overflow-x-scroll">
          <img className="w-[200px] rounded-2xl" src={clooth} alt="Brand 1" />
          <img className="w-[200px] rounded-2xl" src={clooth3} alt="Brand 2" />
          <img className="w-[200px] rounded-2xl" src={clooth5} alt="Brand 3" />
          <img className="w-[200px] rounded-2xl" src={clooth6} alt="Brand 4" />
          <img className="w-[200px] rounded-2xl" src={clooth4} alt="Brand 5" />
          <img className="w-[200px] rounded-2xl" src={clooth7} alt="Brand 6" />
        </section>
      </section>

      {showScrollButton && (
        <div
          className="w-12 h-12 rounded-full bg-slate-400 fixed bottom-5 right-5 m-5 cursor-pointer opacity-90 transition-all duration-300 ease-in-out flex justify-center items-center hover:bg-slate-800 hover:transform hover:translate-y-[-5px] hover:opacity-100"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></div>
      )}
    </section>
  );
};

export default Home;
