import React, { useEffect } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

const Navbar: React.FC = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        opacity: 0,
        y: -30,
        filter: "blur(8px)",
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav className="bg-white/80 backdrop-blur-md text-gray-800 fixed w-full top-0 z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          My Portfolio
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 items-center">

          <Link to="home" smooth duration={500}
            className="nav-item cursor-pointer hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link to="about" smooth duration={500}
            className="nav-item cursor-pointer hover:text-blue-600 transition"
          >
            About
          </Link>

          <Link to="work" smooth duration={500}
            className="nav-item cursor-pointer hover:text-blue-600 transition"
          >
            Work
          </Link>

          <Link to="projects" smooth duration={500}
            className="nav-item cursor-pointer hover:text-blue-600 transition"
          >
            Projects
          </Link>

          <Link to="contact" smooth duration={500}
            className="nav-item cursor-pointer hover:text-blue-600 transition"
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;