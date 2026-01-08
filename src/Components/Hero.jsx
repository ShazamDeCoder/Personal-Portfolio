import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile1.png";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black pt-16 flex items-center justify-center relative overflow-hidden "
    >
      {/* Content */}
      <div className="relative z-10 text-center px-6 mx-auto">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Mubarak's Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-red-600 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="text-red-600">Mubarak</span>
        </h1>

        <p className="text-xl md:text-[22px] text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Frontend Developer creating responsive, user-friendly web experiences
          with modern technologies and meticulous attention to detail.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("#contact")}
            aria-label="Contact Me"
            className="px-6 py-3 rounded-full bg-red-600 hover:bg-white hover:text-red-600 text-white transition-all duration-300 flex items-center gap-2"
          >
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            Available
          </button>

          <button
            onClick={() => scrollToSection("#projects")}
            aria-label="View My Work"
            className="px-6 py-3 rounded-full border-3 border-red-700 text-red-600 bg-white hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            View My Work
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/ShazamDeCoder"
            className="text-white hover:text-red-600  p-2 transition-transform transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/adiomubarak76"
            className="text-white hover:text-red-600  p-2 transition-transform transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:adiomubarakadebukola2026@gmail.com"
            className="text-white hover:text-red-600 p-2 transition-transform transform hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
