import React from "react";

import "../app/globals.css";

const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "A clone of the popular streaming platform Netflix.",
    imageUrl: "/images/netflix-clone.png",
    liveUrl: "https://netflix-clone-pied-gamma-98.vercel.app",
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div>
      <div className="container py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border  border-gray-300 rounded-lg p-4 mx-auto"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover rounded-sm"
              />
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div
                className="border-2 border-white hover:bg-white hover:text-black font-bold py-2 px-4 inline-block transition duration-300 cursor-pointer"
                onClick={() => (window.location.href = project.liveUrl)}
              >
                View Project
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
