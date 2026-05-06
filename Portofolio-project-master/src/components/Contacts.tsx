import React, { useEffect } from "react";
import gsap from "gsap";

const Contacts: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-section",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      id="contact"
      className="contact-section min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>

          <p className="text-lg leading-relaxed opacity-90">
            I'm excited to collaborate and bring your ideas to life.
            Let's create something modern, fast, and beautiful together.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Me
          </h2>

          <form className="space-y-4 flex flex-col items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full md:w-80 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-80 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full md:w-80 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full md:w-80 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacts;