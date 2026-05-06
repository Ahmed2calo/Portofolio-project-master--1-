import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animation for the entire Skills section
    gsap.fromTo(
      skillsRef.current,
      {
        opacity: 0,
        y: 50, // Start from below
      },
      {
        opacity: 1,
        y: 0, // Move to normal position
        duration: 1.5,
        ease: "power2.out",
      }
    );

    // Animate each skill card with a stagger effect
    gsap.fromTo(
      ".skill-card",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3, // Add stagger to create a delay between animations
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      ref={skillsRef}
      className="section min-h-screen bg-gradient-to-r from-teal-500 to-indigo-600 text-white text-center py-16 px-4"
      id="skills"
    >
      <h2 className="text-5xl font-extrabold mb-12">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Skill 1 */}
        <div className="skill-card bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">React</h3>
          <p className="text-lg text-gray-300 mb-6">
            Expert in building interactive UIs with React, utilizing hooks, context, and advanced state management.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="skill-card bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">Tailwind CSS</h3>
          <p className="text-lg text-gray-300 mb-6">
            Proficient in creating highly responsive and modern UI designs with Tailwind CSS and utility-first principles.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className="skill-card bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">TypeScript</h3>
          <p className="text-lg text-gray-300 mb-6">
            Strong knowledge of TypeScript, ensuring type safety, and creating scalable, maintainable code.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-28 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="skill-card bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">JavaScript</h3>
          <p className="text-lg text-gray-300 mb-6">
            Extensive experience with JavaScript, including ES6+, promises, async/await, and event-driven programming.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-32 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Skill 5 */}
        <div className="skill-card bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">Git</h3>
          <p className="text-lg text-gray-300 mb-6">
            Strong experience with Git for version control, including branching, merging, and collaborative development.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-22 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Skill 6 */}
        <div className="skill-card bg-gray-800 p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl flex flex-col justify-between">
          <h3 className="text-3xl font-semibold text-blue-400 mb-4">API Integration</h3>
          <p className="text-lg text-gray-300 mb-6">
            Skilled in integrating RESTful APIs into front-end applications, ensuring smooth data flow and user experience.
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-26 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
