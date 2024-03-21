import React, { useState } from "react";
import Link from "next/link";
import styles from "../app/NavBar.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 lg:px-32">
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="text-xl font-bold">
          <Link href="/">{"<Athar />"}</Link>
        </div>
        <div className="flex space-x-6 items-center">
          <nav className="sm:flex space-x-6 items-center">
            <ul className="flex space-x-6 items-center">
              <li>
                <div className="border-2 border-primary-color px-6 hover:bg-primary-color hover:text-black font-bold py-2 px-4 rounded-full inline-block transition duration-300 cursor-pointer">
                  <Link href="/portfolio">Hire Me</Link>
                </div>
              </li>
            </ul>
          </nav>
          <nav className="hidden sm:flex space-x-6 items-center">
            <ul className="flex space-x-6 items-center">
              <li className="text-secondary-color hover:text-primary-color transition duration-300">
                <Link href="/about">About</Link>
              </li>
              <li className="text-secondary-color hover:text-primary-color transition duration-300">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="text-secondary-color hover:text-primary-color transition duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="sm:hidden">
            {/* Hamburger menu */}
            <div className={styles.hamburgerMenu} onClick={toggleMenu}>
              <div
                className={`${styles.hamburgerIcon} ${
                  isMenuOpen ? styles.open : ""
                }`}
              >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>
            {isMenuOpen && (
              <div className="absolute right-2 top-20 bg-gray-800 text-white  z-10">
                <div className=" px-4 pr-8 py-2 border-b-2 border-gray-700 text-secondary-color hover:text-primary-color transition duration-300">
                  <Link href="/about">About</Link>
                </div>
                <div className=" px-4 pr-8 py-2 border-b-2 border-gray-700 text-secondary-color hover:text-primary-color transition duration-300">
                  <Link href="/projects">Projects</Link>
                </div>
                <div className="px-4 pr-8 py-2 text-secondary-color hover:text-primary-color transition duration-300">
                  <Link href="/contact">Contacts</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
