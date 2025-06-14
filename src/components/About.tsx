import React from 'react';
import { User, Rocket, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Creating Digital Solutions That Matter
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate mobile and full stack developer with expertise in modern technologies.
                I specialize in building scalable web applications and intuitive mobile experiences
                that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in both frontend and backend development, I enjoy working
                across the entire technology stack to deliver comprehensive solutions. I'm constantly
                learning new technologies and staying up-to-date with industry best practices.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center animate-count-up">
                  <div className="text-3xl font-bold text-blue-400">3</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center animate-count-up">
                  <div className="text-3xl font-bold text-emerald-400">9</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div className="text-center animate-count-up">
                  <div className="text-3xl font-bold text-purple-400">1+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="w-full h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl border border-gray-600 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-6 h-full">
                    <div className="flex flex-col items-center justify-center space-y-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group">
                      <User size={32} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 text-sm font-medium text-center">User-Focused Design</span>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-300 group">
                      <Rocket size={32} className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 text-sm font-medium text-center">Fast Development</span>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                      <Target size={32} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 text-sm font-medium text-center">Goal-Oriented</span>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 group">
                      <Zap size={32} className="text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-300 text-sm font-medium text-center">Performance</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;