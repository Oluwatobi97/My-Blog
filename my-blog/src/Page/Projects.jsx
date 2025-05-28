import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Blog",
      description:
        "A modern personal blog and portfolio website built with React and Tailwind CSS. Features include dark mode, responsive design, and a comment system.",
      challenges: [
        "Implementing responsive design for all screen sizes",
        "Setting up dark mode functionality",
        "Creating smooth animations and transitions",
        "Building a comment system with nested replies",
      ],
      solutions: [
        "Used Tailwind CSS for responsive design",
        "Implemented system preference-based dark mode",
        "Added CSS transitions and animations",
        "Created a reusable Comments component with state management",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router",
        "React Icons",
        "Framer Motion",
      ],
      githubLink: "https://github.com/yourusername/my-blog",
      liveLink: "https://your-blog-url.com",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      challenges: [
        "Implementing secure payment processing",
        "Building a scalable database architecture",
        "Creating an intuitive admin interface",
        "Handling real-time inventory updates",
      ],
      solutions: [
        "Integrated Stripe for secure payments",
        "Used MongoDB for flexible data modeling",
        "Built a custom admin dashboard with React",
        "Implemented WebSocket for real-time updates",
      ],
      technologies: ["Node.js", "React", "MongoDB", "Stripe", "Socket.io"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce-url.com",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      challenges: [
        "Implementing real-time collaboration",
        "Building a drag-and-drop interface",
        "Managing complex state updates",
        "Creating an intuitive UI/UX",
      ],
      solutions: [
        "Used Firebase for real-time updates",
        "Implemented react-beautiful-dnd for drag-and-drop",
        "Utilized Redux for state management",
        "Designed a clean, modern interface with Material UI",
      ],
      technologies: [
        "React",
        "Firebase",
        "Material UI",
        "Redux",
        "react-beautiful-dnd",
      ],
      githubLink: "https://github.com/yourusername/task-app",
      liveLink: "https://your-task-app-url.com",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents
          a unique challenge and learning experience in my journey as a
          developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Challenges Faced
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Solutions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.solutions.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 justify-center"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  View Code
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 flex-1 justify-center"
                >
                  <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
