import React from "react";
import Link from "next/link";
import Projects from "@/components/Projects";

const PortfolioSection = () => {
  return (
    <div>
      <div className="container mx-auto text-center lg:mx-auto lg:max-w-4xl">
        <div className="flex justify-between items-center mb-4 mx-4 ">
          <h1 className="text-3xl font-bold jus">Projects</h1>
          <Link href="/projects">
            <span className="text-secondary-color hover:text-primary-color">
              View More
            </span>
          </Link>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default PortfolioSection;
