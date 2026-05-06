import React, { useEffect } from "react";
import gsap from "gsap";

const Projects: React.FC = () => {
  useEffect(() => {
    // GSAP animation for the Projects section when it comes into view
    gsap.fromTo(
      ".projects-section",
      {
        opacity: 0,
        y: 50, // Start from below
      },
      {
        opacity: 1,
        y: 0, // Animate to the original position
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className="projects-section section min-h-screen bg-black text-white text-center py-16 px-4"
    >
      <h2 className="text-4xl font-semibold mb-12">Latest works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          
<h3 className="text-2xl font-bold text-blue-400 mb-4">Movie App Search</h3>
          <p className="text-lg text-gray-300">
           A movie search app is a simple application that allows users to search for movies and quickly view their details. When a user enters a movie name, the app fetches data from an external API and displays information such as the movie title, poster, rating, release date, and a short description. It is commonly built using technologies like React for the frontend and APIs such as TMDB or OMDb for movie data. The main purpose of this type of app is to provide a fast and easy way for users to discover and explore movies in one place with a clean and user-friendly interface.
          </p>
           
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Quote App</h3>
          <p className="text-lg text-gray-300">
            A Quote App Generator could be an app that provides a random collection of quotes or allows users to browse through different categories, like motivational, love, or wisdom quotes. Users can also save their favorite quotes, share them on social media, or even submit their own.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Tasks App</h3>
          <p className="text-lg text-gray-300">
            A Tasks App is a productivity tool that helps users organize and manage their tasks and to-do lists effectively. It allows users to break down their day-to-day activities into manageable actions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
