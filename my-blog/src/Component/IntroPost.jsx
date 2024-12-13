import React from "react";
import Slider from "react-slick";
import Banner from "../assets/images/Banner.jpeg";
import Photo10 from "../assets/images/Photo10.jpeg";
import Photo11 from "../assets/images/Photo11.jpeg";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderAnimation.css"; // Custom CSS file for animations

function IntroPost() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust speed for smoothness
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Enables fade transition for a smooth animation
    cssEase: "ease-in-out", // Easing function for the animation
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("blog-detail/")}
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <Slider {...settings}>
              <div className="slide">
                <img
                  src={Banner}
                  alt="Tech Blog Banner 1"
                  className="w-full h-64 object-cover slide-image"
                />
              </div>
              <div className="slide">
                <img
                  src={Photo10}
                  alt="Tech Blog Banner 2"
                  className="w-full h-64 object-cover slide-image"
                />
              </div>
              <div className="slide">
                <img
                  src={Photo11}
                  alt="Tech Blog Banner 3"
                  className="w-full h-64 object-cover slide-image"
                />
              </div>
            </Slider>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Welcome To My Tech Blog
            </h1>
            <h3 className="text-xl text-gray-600 dark:text-gray-100">
              Discover tips, trends, and stories that matter.
            </h3>
            <button
              className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                navigate("blog-detail/");
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;
