import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Kavishka</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-200">
              Mobile & Full Stack Developer
            </p>
            <p className="text-lg mb-12 max-w-2xl text-gray-300 leading-relaxed">
              Passionate about creating innovative mobile applications and robust web solutions
              that deliver exceptional user experiences with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 animate-glow"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-gray-900 text-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-full border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                <div className="absolute top-4 right-4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="m-3 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 p-1">
                  <img
                    src="/src/assets/image/6.jpg"
                    alt="Kavishka Rasara - Mobile & Full Stack Developer"
                    className="w-full h-96 object-cover rounded-full hover:scale-105 transition-transform duration-700 filter brightness-110 contrast-110"
                  />
                </div>
                <div className="absolute -top-2 left-1/4 w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-blue-500/30 animate-float">
                  <span className="text-blue-400 text-xs font-bold">JS</span>
                </div>
                <div className="absolute -bottom-2 right-1/4 w-8 h-8 bg-emerald-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-emerald-500/30 animate-float-delayed">
                  <span className="text-emerald-400 text-xs font-bold">⚛</span>
                </div>
                <div className="absolute top-1/2 -left-2 w-8 h-8 bg-purple-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-500/30 animate-float">
                  <span className="text-purple-400 text-xs font-bold">TS</span>
                </div>
                <div className="absolute top-1/2 -right-2 w-8 h-8 bg-pink-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-pink-500/30 animate-float-delayed">
                  <span className="text-pink-400 text-xs font-bold">📱</span>
                </div>
              </div>
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;