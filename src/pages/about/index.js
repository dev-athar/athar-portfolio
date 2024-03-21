import React from "react";
import Link from "next/link";
import "../../app/globals.css";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div>
      <div className="body-projects">
        <Header />
        <div className="container mx-auto py-8 lg:px-32">
          <h1 className="text-3xl font-bold mb-4 mx-4 lg:text-4xl">About Me</h1>
          {/* First Segment */}
          <div className="flex items-center mb-8 mx-4">
            <div className="w-1/2 pr-4">
              <h4 className="mb-4 sm:text-lg md:text-xl lg:text-xl">
                I am a Mechatronics Engineering student with a passion for web
                development. I am from Bangladesh, and I am doing my bachelors
                here.
              </h4>
            </div>
            <div className="w-1/2">
              <img
                src="./design-elements/fluid-blue.png"
                alt="Profile Image"
                className="w-full"
              />
            </div>
          </div>

          {/* Second Segment */}
          <div className="flex items-center mb-8 mx-4 ">
            <div className="w-1/2">
              <img
                src="./design-elements/disk-blue.png"
                alt="Profile Image"
                className="w-full"
              />
            </div>
            <div className="w-1/2 pl-4">
              <p className="mb-4 sm:text-lg md:text-xl lg:text-xl">
                Over the last 3 years, I have been actively learning and working
                on various web development projects.
              </p>
            </div>
          </div>

          {/* Third Segment */}
          <div className="my-14">
            <p className="mb-8 text-center mx-4 sm:text-lg md:text-xl lg:text-2xl">
              Check out some of my demo work below and feel free to reach out if
              you have any questions or collaboration opportunities.
            </p>
            <div className="flex justify-center lg:py-4">
              <Link href="/projects">
                <span className="border-2 border-white px-6 hover:bg-white hover:text-black font-bold py-2 px-4 inline-block transition duration-300 cursor-pointer">
                  View Projects
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <SocialLinks />

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
