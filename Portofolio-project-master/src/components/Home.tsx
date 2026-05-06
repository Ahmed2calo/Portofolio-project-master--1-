import React from "react";

const Home: React.FC = () => (
  <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-900 flex items-center justify-center px-6">

    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Left Section - Text */}
      <div className="flex flex-col justify-center space-y-6">

        <p className="text-blue-600 font-semibold tracking-wide">
          Frontend Developer
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hello, I'm <span className="text-blue-600">Ahmed</span>
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed">
          I build modern, responsive, and interactive web applications using React, TypeScript, and Tailwind CSS.
        </p>

        {/* Buttons */}
       

      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center">

        <div className="relative">

          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-30 rounded-full"></div>

          <img
            src="https://via.placeholder.com/350"
            alt="Ahmed"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white"
          />

        </div>

      </div>

    </div>

  </section>
);

export default Home;