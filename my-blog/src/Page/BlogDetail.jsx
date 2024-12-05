import React from "react";
import Photo5 from "../assets/images/Photo5.jpeg";

function BlogDetail() {
  return (
    <div className="p-3 items-center justify-center text-center border bg-gray-100 mt-7 rounded-lg">
      <h1 className="font-bold text-xl">
        Welcome To My Journey as a Web Developer
      </h1>
      <h2 className="mt-5 mb-5 text-gray-800 md:text-xl md:p-3">
        Hi, I’m Tobi Siyanbola, a passionate web developer from Lagos, Nigeria.
        With over three years of hands-on experience in web development, I’ve
        honed my skills across various projects, using technologies like HTML,
        CSS, JavaScript, React, Tailwind CSS, and WordPress. Here’s a bit more
        about my journey so far!
      </h2>

      <img src={Photo5} className=" ml-5 md:ml-48" />

      <h1 className="font-bold mt-4 text-xl">I Build A Strong Function</h1>
      <h2 className="mt-3  text-gray-800 md:text-xl md:p-3">
        After earning my Bachelor’s degree in Computer Science from ESGT
        University in the Republic of Benin in October 2022, I launched my
        career in web development through freelance projects. The excitement of
        creating something from scratch and seeing it come to life on the screen
        has driven me to continuously improve my craft.
      </h2>
      <h1 className="font-bold mt-4 mb-3 text-xl">
        Professional Experience and Projects
      </h1>
      <p>
        While I haven’t worked in a company yet, I’ve gained extensive
        experience working on freelance projects, and I’m eager to join a team
        where I can collaborate and learn from others. Here are a couple of my
        favorite projects:
        <br />{" "}
        <span className="font-semibold -ml-6">
          1. Personal Portfolio Website:
        </span>{" "}
        I designed and developed my own portfolio using React and Tailwind CSS
        to showcase my skills and projects. This project helped me push my
        creativity and showcase my skills to potential clients and employers.
        <br />{" "}
        <span className="font-semibold -ml-5 ">
          2. WordPress Blog for a Local Business:{" "}
        </span>{" "}
        I customized a WordPress theme, optimized the site for SEO, and
        increased the client’s web traffic by 25%. This project taught me a lot
        about client interaction and delivering high-quality work that meets
        business goals.
      </p>
    </div>
  );
}

export default BlogDetail;
