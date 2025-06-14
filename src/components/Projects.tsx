import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Weather Mobile App',
      description: 'Weather app UI using Flutter',
      tech: ['Flutter'],
      image: 'https://th.bing.com/th/id/OIP.W81pUm4Cky36gAu4f7poQgHaFj?w=240&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      github: 'https://github.com/kavishkarasara/Flutter_project_01.git'
    },
    {
      title: 'Responsive UI',
      description: 'Complete web application with React frontend.',
      tech: ['React', 'Tailwind Css'],
      image: 'https://th.bing.com/th/id/OIP.Ji0465mWJv9RmCIe3BCFUgHaD4?w=332&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      github: 'https://github.com/kavishkarasara/project01.git'
    },
    {
      title: 'Honey Bee UI project',
      description: 'UI design using react and tailwind css',
      tech: ['React', 'Tailwind CSS'],
      image: 'https://th.bing.com/th/id/OIP.JyNphyl1nEnuoqIlJrUNXwHapH?w=1200&h=6663&rs=1&pid=ImgDetMain',
      github: 'https://github.com/kavishkarasara/Honey_Bee_project.git'
    },
    {
      title: 'Inventory Management System',
      description: 'Inventory Management System',
      tech: ['React', 'Tailwind CSS', 'NodeJS', 'MongoDB', 'ExpressJS'],
      image: 'data:image/webp;base64,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',
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