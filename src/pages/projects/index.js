import React from "react";

import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <div>
      <div className="body-projects">
        <Header />
        <div className="container mx-auto pt-8 lg:px-32">
          <h1 className="text-3xl font-bold mb-4 px-4">Projects</h1>
          <Projects />
        </div>
      </div>

      <div className="mt-auto">
        <SocialLinks />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
