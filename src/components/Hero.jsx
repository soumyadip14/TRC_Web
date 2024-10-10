import React from "react";
import Slider from "react-slick";
import img1 from "/src/assets/images/kali3.png";
import img2 from "/src/assets/images/kali5.jpg";
import img3 from "/src/assets/images/kali4.jpg";
import bgimage from "/src/assets/images/bg1.avif";
import kaliimg from "/src/assets/images/kali5.jpg";
import logo from "/src/assets/images/logo.jpg";

function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div
      className="max-w-full mx-auto p-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Main Heading */}
      <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl mb-5 text-black uppercase tracking-wide shadow-lg font-Merriweather">
        Tanguria Recreation Club, ESTD - 0000
      </h1>

      {/* Image Slider */}
      <Slider {...settings} className="mx-auto max-w-screen-lg">
        <div className="w-full h-[400px] sm:h-[500px]">
          <img src={img1} className="w-full h-full object-cover rounded-lg shadow-xl" alt="Event 1" />
        </div>
        <div className="w-full h-[400px] sm:h-[500px]">
          <img src={img2} className="w-full h-full object-cover rounded-lg shadow-xl" alt="Event 2" />
        </div>
        <div className="w-full h-[400px] sm:h-[500px]">
          <img src={img3} className="w-full h-full object-cover rounded-lg shadow-xl" alt="Event 3" />
        </div>
      </Slider>

      {/* Welcome Section */}
      <div className="flex flex-wrap mt-10">
        {/* Text Section */}
        <div className="w-full lg:w-8/12 mb-10 lg:mb-0">
          <div className="container mx-auto h-full p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg">
            {/* Navigation */}
            <nav className="flex justify-between items-center mb-5">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins uppercase tracking-wide">
                Welcome To <span className="text-green-700">Tanguria Recreation Club</span>
              </div>
              <div>
                <img
                  src={logo}
                  alt="Club Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full transition transform hover:scale-110 shadow-xl"
                />
              </div>
            </nav>

            {/* Hero Content */}
            <header className="container px-4 lg:flex items-center h-full lg:mt-0">
              <div className="w-full text-center lg:text-left">
                <h1 className="text-3xl lg:text-5xl font-bold font-Merriweather">
                  Celebrating <span className="text-green-700">00th</span> Years of Kali Puja
                </h1>
                <div className="w-20 h-1 bg-green-700 my-4 mx-auto lg:mx-0"></div>
                <h1 className="text-xl lg:text-2xl font-bold pb-2 font-NanumGothicCoding">
                  About Us
                </h1>
                <p className="text-base lg:text-lg text-gray-700 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae maiores neque eaque ea odit placeat, tenetur illum
                  distinctio nulla voluptatum a corrupti beatae tempora aperiam
                  quia id aliquam possimus aut.
                </p>
                <button className="bg-green-600 text-white text-lg font-medium px-6 py-2 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition transform ease-in-out">
                  Read More
                </button>
              </div>
            </header>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-4/12">
          <img
            src={kaliimg}
            alt="Maa Kali"
            className="w-full h-56 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
