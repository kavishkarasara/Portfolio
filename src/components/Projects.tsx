import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Weather Mobile App',
      description: 'Weather app UI using Flutter',
      tech: ['Flutter'],
      image: '/src/assets/image/3.jpeg',
      github: 'https://github.com/kavishkarasara/Flutter_project_01.git'
    },
    {
      title: 'Responsive UI',
      description: 'Complete web application with React frontend.',
      tech: ['React', 'Tailwind Css'],
      image: '/src/assets/image/4.jpg',
      github: 'https://github.com/kavishkarasara/project01.git'
    },
    {
      title: 'Honey Bee UI project',
      description: 'UI design using react and tailwind css',
      tech: ['React', 'Tailwind CSS'],
      image: '/src/assets/image/1.jpeg',
      github: 'https://github.com/kavishkarasara/Honey_Bee_project.git'
    },
    {
      title: 'Inventory Management System',
      description: 'Inventory Management System',
      tech: ['React', 'Tailwind CSS', 'NodeJS', 'MongoDB', 'ExpressJS'],
      image: '/src/assets/image/2.webp',
      github: 'https://github.com/kavishkarasara/IMS.git'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
          Featured Projects
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        <span>View Code</span>
                        <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;