import React from "react";
import Banner from "../assets/images/Banner.jpeg";
import { BiPhotoAlbum } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function IntroPost() {
  const navigate = useNavigate();
  return (
    <div
      className="md:flex  gap-3 px-5 md: mt-10 md:ml-24"
      onClick={() => navigate("blog-detail/" + post.id)}
    >
      <img
        src={Banner}
        className="mt-9 rounded-2xl w-[350px]  items-center md:mr-14"
      />
      <div className="flex-col mt-9 ">
        <h1 className="whitespace-pre-line md: ml-3 text-xl font-bold">
          Welcomee To My Tech Blog
        </h1>
        <h3 className="ml-3 mt-4">
          Discover tips, trends, and stories that matter.
        </h3>
      </div>
      {/* <div className="">
        <img src={Banner} className="w-[80px] rounded-full " />
      </div> */}
    </div>
  );
}

export default IntroPost;
