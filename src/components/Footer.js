import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Athar. All Rights Reserved.</p>
        <p>
          Designed and developed by{" "}
          <a
            href="https://github.com/dev-athar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-color hover:text-primary-color"
          >
            dev-athar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
