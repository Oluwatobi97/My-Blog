import React from "react";
import Photo5 from "../assets/images/Photo5.jpeg";

function BlogDetail() {
  return (
    <article className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800  shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-blue-600 mb-6">
        My Journey as a Web Developer
      </h1>

      <div className="prose prose-lg mx-auto">
        <p className="lead mb-8 dark:text-gray-100">
          Hi, I'm Tobi Siyanbola, a passionate web developer from Lagos,
          Nigeria. With over three years of hands-on experience in web
          development, I've honed my skills across various projects, using
          technologies like HTML, CSS, JavaScript, React, Tailwind CSS, and
          WordPress. Here's a bit more about my journey so far!
        </p>

        <img
          src={Photo5}
          alt="Tobi Siyanbola"
          className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
        />

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-blue-600 mt-8 mb-4">
          Building a Strong Foundation
        </h2>
        <p className=" dark:text-gray-100">
          After earning my Bachelor's degree in Computer Science from ESGT
          University in the Republic of Benin in October 2022, I launched my
          career in web development through freelance projects. The excitement
          of creating something from scratch and seeing it come to life on the
          screen has driven me to continuously improve my craft.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-blue-600 mt-8 mb-4">
          Professional Experience and Projects
        </h2>
        <p className="dark:text-gray-100">
          While I haven't worked in a company yet, I've gained extensive
          experience working on freelance projects, and I'm eager to join a team
          where I can collaborate and learn from others. Here are a couple of my
          favorite projects:
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-4 dark:text-gray-100">
          <li>
            <strong className="dark:text-blue-600">
              Personal Portfolio Website:
            </strong>{" "}
            I designed and developed my own portfolio using React and Tailwind
            CSS to showcase my skills and projects. This project helped me push
            my creativity and showcase my skills to potential clients and
            employers.
          </li>
          <li>
            <strong className="dark:text-blue-600">
              WordPress Blog for a Local Business:
            </strong>{" "}
            I customized a WordPress theme, optimized the site for SEO, and
            increased the client's web traffic by 25%. This project taught me a
            lot about client interaction and delivering high-quality work that
            meets business goals.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 dark:text-blue-600 mb-4">
          Looking Ahead
        </h2>
        <p className="dark:text-gray-100">
          As I continue to grow in my career, I'm excited about the
          possibilities that lie ahead. I'm particularly interested in diving
          deeper into modern JavaScript frameworks, exploring serverless
          architectures, and contributing to open-source projects. I believe
          that continuous learning and collaboration are key to success in the
          ever-evolving field of web development.
        </p>

        <p className="mt-8 dark:text-gray-100 text-center italic">
          Thank you for taking the time to read about my journey. I'm always
          open to new opportunities and connections in the web development
          community!
        </p>
      </div>
    </article>
  );
}

export default BlogDetail;
