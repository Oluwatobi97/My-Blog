import React from "react";

function FirstProject() {
  const features = [
    {
      title: "Landing Page",
      description:
        "A professionally designed page highlighting key features, investment plans, ease of use, and security to attract potential customers.",
    },
    {
      title: "Login and Sign-Up Pages",
      description:
        "Secure login for existing users and a straightforward sign-up process for new users.",
    },
    {
      title: "User Dashboard",
      description:
        "A centralized hub where users can view their total investment amount and access detailed information about their investment history and current status.",
    },
    {
      title: "Investment Cards",
      description:
        "Dashboard features providing an overview of active plans, including plan type, duration, expected returns, and current status.",
    },
    {
      title: "Create Plan Page",
      description:
        "Allows customers to set up new investment packages by entering details such as investment amount, plan type, and expected ROI.",
    },
    {
      title: "Deposit Page",
      description:
        "Generates a unique QR code for transactions and provides the customer's cryptocurrency wallet address for secure payments.",
    },
    {
      title: "Dashboard Update",
      description:
        "Real-time updates of investment amounts, ensuring transparency and allowing users to track their financial progress effectively.",
    },
  ];

  const technicalHighlights = [
    "Implemented secure user authentication and authorization",
    "Integrated real-time data updates using WebSocket technology",
    "Designed responsive UI for seamless experience across devices",
    "Implemented secure cryptocurrency transactions",
    "Utilized RESTful API for efficient data management",
  ];

  const developmentChallenges = [
    {
      question: "How to implement navigation between pages in a React app?",
      solution:
        "Used React Router for navigation. Set up routes for main pages like Home, Investment Plans, Dashboard, and Profile.",
    },
    {
      question: "How to implement user authentication?",
      solution:
        "Implemented Firebase Authentication. Created user sign-up and login functionality, and protected routes using higher-order components.",
    },
    {
      question: "How to fetch real-time cryptocurrency prices?",
      solution:
        "Integrated CoinGecko API for real-time crypto prices. Implemented state management to display dynamic pricing on the investment page.",
    },
    {
      question: "How to create and calculate investment plans?",
      solution:
        "Designed data structures for investment plans and implemented formulas for calculating returns based on user input.",
    },
    {
      question: "How to display user investments and earnings?",
      solution:
        "Created a dashboard layout with sections for Active Investments, Completed Investments, and Earnings Breakdown.",
    },
    {
      question: "How to track and display transaction history?",
      solution:
        "Implemented a structure for saving transaction logs and displayed them in a table format using local storage.",
    },
    {
      question: "How to implement payment functionality?",
      solution:
        "Integrated Paystack SDK for accepting payments and handling transaction confirmations.",
    },
    {
      question: "How to send user notifications for investment updates?",
      solution:
        "Implemented in-app notifications using react-toastify and email notifications using SendGrid.",
    },
    {
      question: "How to make the app mobile-friendly?",
      solution:
        "Used TailwindCSS for responsive design, implementing a mobile-first approach with Flexbox and Grid.",
    },
    {
      question: "How to manage backend for investments and user data?",
      solution:
        "Set up a Node.js backend with Express and MongoDB, creating API routes for user authentication, investment plans, and data storage.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800  shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-blue-600 mb-8">
        My First FullStack Website: Federal Investment
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-100 mb-6">
        Federal Investment is a comprehensive cryptocurrency investment platform
        designed to provide a seamless user experience for managing digital
        asset investments efficiently.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Key Features and Pages
      </h2>
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-4  rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {index + 1}. {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Technical Highlights
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-100 mb-8">
        {technicalHighlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Development Challenges and Solutions
      </h2>
      <div className="space-y-4 mb-8">
        {developmentChallenges.map((challenge, index) => (
          <div key={index} className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              {index + 1}. {challenge.question}
            </h3>
            <p className="text-gray-700">{challenge.solution}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-gray-600 dark:text-gray-100">
        This is the Link to the Website if you want to inspect it <br />
        <a className="mt-7 text-center text-blue-600">
          https://investment-app-oe2x.onrender.com
        </a>
      </p>

      <p className="mt-8 text-center text-gray-600 dark:text-gray-100 italic">
        This project showcases my ability to create a complex, full-stack
        application with a focus on user experience and secure financial
        transactions in the cryptocurrency space.
      </p>
    </div>
  );
}

export default FirstProject;
