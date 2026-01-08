import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../Data/ProjectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in frontend
            development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 rounded-t-4xl border-red-600 overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0"
            >
              {/* Project Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col justify-center text-black">
                <div className="flex items-center gap-2 mb-3">
                  {project.featured && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <span className="text-sm text-white">
                    Project {project.id.toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1  bg-red-600 text-white rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 px-5 py-3 bg-red-600 text-white font-medium rounded-full shadow-md transition hover:bg-white hover:text-red-600 hover:scale-105"
                  >
                    <FiExternalLink className="text-lg" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 px-5 py-3 bg-white text-red-600 font-medium rounded-full shadow-md transition hover:bg-red-600 hover:text-white hover:scale-105"
                  >
                    <FiGithub className="text-lg" /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ShazamDeCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-red-600 font-medium hover:bg-red-600 hover:text-white transition"
          >
            <FiGithub /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
