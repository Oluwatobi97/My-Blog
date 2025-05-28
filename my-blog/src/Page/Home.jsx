import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { motion } from "framer-motion";
import profilePhoto from "../assets/images/Photo.jpg";

function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "My Blog",
      description:
        "A modern blog and portfolio website built with React and Tailwind CSS",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Tailwind CSS", "Portfolio"],
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Node.js", "React", "MongoDB"],
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Firebase", "Material UI"],
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Building a Modern Portfolio with React",
      excerpt:
        "Learn how to create a stunning portfolio website using React and Tailwind CSS...",
      date: "2024-03-15",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Mastering Responsive Design",
      excerpt:
        "Best practices for creating responsive websites that work on all devices...",
      date: "2024-03-10",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    },
    {
      id: 3,
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies in web development...",
      date: "2024-03-05",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <FaCode className="w-8 h-8" />,
      items: ["React", "Vue.js", "Tailwind CSS", "TypeScript", "Next.js"],
    },
    {
      category: "Backend",
      icon: <FaServer className="w-8 h-8" />,
      items: ["Node.js", "Python", "Express", "Django", "REST APIs"],
    },
    {
      category: "Database",
      icon: <FaDatabase className="w-8 h-8" />,
      items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "GraphQL"],
    },
    {
      category: "DevOps",
      icon: <FaTools className="w-8 h-8" />,
      items: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm Alex 👋
                <br />
                <span className="text-blue-600 dark:text-blue-400">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                I build modern web applications and share my journey through
                code. Let's create something amazing together.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/Projects" className="btn btn-primary">
                  View My Work
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  to="/Contact"
                  className="btn bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Contact Me
                </Link>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full Stack Developer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I create seamless user experiences and
              robust server-side solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My journey in web development started 5 years ago, and since then,
              I've worked on various projects ranging from small business
              websites to large-scale applications. I'm constantly learning and
              exploring new technologies to stay at the forefront of web
              development.
            </p>
            <Link
              to="/About"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              Learn more about me
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={profilePhoto}
              alt="Developer at work"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-lg -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Here are some of my recent works that showcase my skills and
              experience
            </p>
          </div>
          <Link
            to="/Projects"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            View All Projects
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here are some of my core competencies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {skill.category}
              </h3>
              <div className="space-y-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="block text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Recent Blog Posts
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Latest articles and tutorials about web development
            </p>
          </div>
          <Link
            to="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            View All Posts
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  Read More
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            to="/Contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
