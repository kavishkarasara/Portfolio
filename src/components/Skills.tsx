import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'React',
      category: 'Frontend',
      color: 'from-blue-400 to-cyan-400',
      glow: 'hover:shadow-blue-1000/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      color: 'from-gray-300 to-white',
      glow: 'hover:shadow-white/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
      name: 'HTML/CSS',
      category: 'Frontend',
      color: 'from-orange-400 to-red-400',
      glow: 'hover:shadow-orange-400/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      color: 'from-yellow-400 to-yellow-300',
      glow: 'hover:shadow-yellow-400/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      color: 'from-cyan-400 to-blue-400',
      glow: 'hover:shadow-cyan-400/50',
      icon: 'https://www.svgrepo.com/show/333609/tailwind-css.svg'
    },
    {
      name: 'Flutter',
      category: 'Mobile',
      color: 'from-blue-400 to-sky-400',
      glow: 'hover:shadow-blue-400/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      color: 'from-green-400 to-emerald-400',
      glow: 'hover:shadow-green-400/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Python',
      category: 'Backend',
      color: 'from-blue-400 to-yellow-400',
      glow: 'hover:shadow-blue-400/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'Java',
      category: 'Backend',
      color: 'from-red-400 to-orange-400',
      glow: 'hover:shadow-red-400/50',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
          Technical Skills
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {['Frontend', 'Mobile', 'Backend'].map((category, categoryIndex) => (
              <div
                key={category}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-white text-center">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`group flex items-center space-x-4 p-4 rounded-lg bg-gray-700/50 hover:bg-gradient-to-r ${skill.color} hover:text-gray-900 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg ${skill.glow} animate-slide-in`}
                        style={{ animationDelay: `${(categoryIndex * 3 + skillIndex) * 0.1}s` }}
                      >
                        <div className="w-6 h-6 flex-shrink-0">
                          <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="w-full h-full object-contain group-hover:animate-bounce transition-transform duration-300"
                          />
                        </div>
                        <span className="font-medium group-hover:font-bold transition-all duration-300">{skill.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;