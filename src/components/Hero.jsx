import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "/src/assets/images/kali3.png";
import img2 from "/src/assets/images/kali5.jpg";
import img3 from "/src/assets/images/kali4.jpg";
import bgimage from "/src/assets/images/bg1.avif";
import kaliimg from "/src/assets/images/kali5.jpg";
import logo from "/src/assets/images/logo.jpg"


function Hero() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (
        <div className="max-w-full mx-auto p-4"
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            <h1 className="text-center font-bold text-5xl mb-3 font-Merriweather uppercase">Tanguria Recreation Club, ESTD - 0000</h1>
            <Slider {...settings}>
                <div className="w-full h-[500px]">
                    <img src={img1} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-full h-[500px]">
                    <img src={img2} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="w-full h-[500px]">
                    <img src={img3} className="w-full h-full object-cover" alt="" />
                </div>
            </Slider>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-8/12 mb-10">
                    <div className="container mx-auto h-full sm:p-10">
                        <nav className="flex px-4 justify-between items-center">
                            <div className="text-4xl font-bold font-poppins uppercase">
                                WelCome To<span className="text-green-700"> Tanguria Recreation Club </span>
                            </div>
                            <div>
                                <img src={logo} alt="" className="w-20 rounded-md transition ease-in-out hover:scale-110 shadow-xl" />
                            </div>
                        </nav>
                        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                            <div className="w-full">
                                <h1 className="text-4xl lg:text-6xl font-bold font-Merriweather">Celebrating <span className="text-green-700">00th</span> Years of KaliPuja</h1>
                                <div className="w-32 h-2 bg-green-700 my-4"></div>
                                <h1 className='text-2xl lg:text-4xl font-bold pb-2 font-NanumGothicCoding'> About Us</h1>
                                <p className="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                                <button className="bg-green-400 text-white text-2xl font-medium px-4 py-2 rounded-xl shadow hover:bg-green-700 hover:scale-110 transition ease-in-out">Read More</button>
                            </div>
                        </header>
                    </div>
                </div>
                <img src={kaliimg} alt="Maa Kali" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
            </div>
        </div>

    );
}

export default Hero;
