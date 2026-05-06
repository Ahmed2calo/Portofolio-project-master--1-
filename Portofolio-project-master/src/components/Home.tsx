import React from "react";

const Home: React.FC = () => (
  <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-900 flex items-center justify-center px-6">

    <div className="max-w-3xl w-full text-center flex flex-col justify-center space-y-6">

      <p className="text-blue-600 font-semibold tracking-wide">
        Frontend Developer
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Hello, I'm <span className="text-blue-600">Ahmed</span>
      </h1>

      <p className="text-xl text-gray-600 leading-relaxed">
        I build modern, responsive, and interactive web applications using React, TypeScript, and Tailwind CSS.
      </p>

    </div>

  </section>
);

export default Home;