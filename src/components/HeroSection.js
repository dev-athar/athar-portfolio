import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="glass my-10  text-white py-10 px-8 max-w-80 mx-auto sm:max-w-lg sm:py-16 md:max-w-xl md:py-16 md:px-16 lg:max-w-2xl lg:py-24">
      <div className="w-full h-full"></div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-left lg:text-5xl">Hey!</h1>
        <p className="text-lg mb-8 text-left md:text-xl lg:text-2xl">
          I am a self taught web developer.
        </p>
        <div>
          <Link href="/projects">
            <span className="border-2 border-white px-6 hover:bg-white hover:text-black font-bold py-2 inline-block transition duration-300">
              View Portfolio
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
