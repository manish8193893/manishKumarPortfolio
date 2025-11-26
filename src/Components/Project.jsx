import React from "react";

const projectsData = [
    {
        image: "shopToday.png",
        title: "Blog Website",
        description:
            "A full-stack blog website where users can create, edit, and delete their blog posts. Built with React for the frontend and Node.js with Express for the backend. MongoDB is used for data storage.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "CSS"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "shopToday.png",
        title: "E-commerce Platform",
        description:
            "An e-commerce platform that allows users to browse products, add them to the cart, and make purchases. Features include user authentication, product search, and order management. Built with React.js, Node.js, Express.js, MongoDB, BootStrap CSS.",
        techStack: ["React", "Node", "Express", "MongoDB", "Redux-Toolkit", "Bootstrap", "MUI", "swiper", "Rich-Text-Editor", "multer", "jsonwebtoken"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "shopToday.png",
        title: "Real-time Chat Application",
        description:
            "A real-time chat application that supports multiple chat rooms and private messaging. Built using Socket.io for real-time communication and React for the frontend.",
        techStack: ["React", "Node", "Socket.io", "CSS"],
        githubLink: "https://github.com/manish8193892",
        liveLink: "https://github.com/manish8193892",
    },
    {
        image: "task.png",
        title: "Task Management System",
        description:
            "Task Management System is a full-stack web application built with the MERN stack, designed to streamline task assignment, team collaboration, and progress tracking within an organization. It features secure authentication, role-based access, real-time updates, and interactive dashboards that help both admins and team members stay aligned and productive.",
        techStack: ["React", "Tailwind CSS", "Recharts", "React-hot-toast", "react-icons", "Node", "Express", "MongoDB", "JWT Authentication", "multer", "ExcelJS"],
        githubLink: "https://github.com/manish8193893/taskManager",
        liveLink: "https://task-manager-delta-seven-97.vercel.app/",
        allActive: true
    },
    {
        image: "portfolio.png",
        title: "Portfolio Website",
        description:
            "A personal portfolio website to showcase projects, skills, and experience. Built with React and styled with Tailwind CSS.",
        techStack: ["React", "Tailwind CSS", "react-icons", "react-lucide"],
        githubLink: "https://github.com/manish8193893/manishKumarPortfolio",
        liveLink: "https://manish-kumar-portfolio-two.vercel.app/",
        allActive: true
    },
    {
        image: "dashboard.png",
        title: "Expense Tracker",
        description:
            "An expense tracker application that allows users to log their income/expenses and visualize their spending habits through charts and graphs. So they can manage their finances effectively.",
        techStack: ["React", "Node", "Express", "JWT Authentication", "MongoDB", "react-icons", "multer", "Recharts", "emoji-picker-react", "React-hot-toast", "Tailwind CSS"],
        githubLink: "https://github.com/manish8193893/ExpenseTracker",
        liveLink: "https://expense-tracker-iota-khaki.vercel.app/",
        allActive: true
    }
];

export default function Project() {
    return (
        <section className="pt-24 pb-12 bg-linear-to-b from-crypto-blue to-[#12141C] relative overflow-hidden">
            <div className="container flex flex-wrap gap-10 mx-auto px-4 relative z-10">
                <h2 className="w-screen text-center text-3xl md:text-4xl font-bold mb-8 text-gradient">
                    Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {projectsData.map((project, index) => (
                        <article
                            key={index}
                            className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-md overflow-hidden flex flex-col p-2"
                        >
                            {/* Adjust image path as needed — here assumed assets are in public/assets */}
                            <img
                                src={`${project.image}`}
                                alt={project.title}
                                className="h-48 w-full object-cover rounded-md"
                            />

                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-lg font-medium text-white/70 mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-3 line-clamp-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs bg-gray-700  text-teal-400 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-3">
                                    {project.githubLink && project.allActive ? (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-2 bg-teal-600 text-white rounded-full text-sm hover:bg-teal-700"
                                        >
                                            GitHub
                                        </a>
                                    ) :
                                        <a
                                            // href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-2 bg-teal-600 text-white rounded-full text-sm hover:cursor-not-allowed opacity-50"
                                        >
                                            GitHub
                                        </a>
                                    }

                                    {project.liveLink && project.allActive ? (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-2 border bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
                                        >
                                            Live Demo
                                        </a>
                                    ) :
                                        <a
                                            // href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-3 py-2 border bg-gray-100 text-gray-700 rounded-full text-sm hover:cursor-not-allowed opacity-50"
                                        >
                                            Live Demo
                                        </a>
                                    }
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
