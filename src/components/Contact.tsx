import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects.
                Whether you need a mobile app, web application, or have a unique idea
                to bring to life, I'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group">
                  <Mail className="text-emerald-400 group-hover:animate-bounce" size={24} />
                  <span className="group-hover:text-emerald-400 transition-colors duration-200">kavishkarasara3@email.com</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group">
                  <Phone className="text-emerald-400 group-hover:animate-bounce" size={24} />
                  <span className="group-hover:text-emerald-400 transition-colors duration-200">+94 71 469 3131</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group">
                  <MapPin className="text-emerald-400 group-hover:animate-bounce" size={24} />
                  <span className="group-hover:text-emerald-400 transition-colors duration-200">Rathnapura, Sri Lanka</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/kavishkarasara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-purple-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/25"
                >
                  <Github size={24} className="hover:animate-bounce" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kavishka-rasara-8a9baa304/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:to-blue-600 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  <Linkedin size={24} className="hover:animate-bounce" />
                </a>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white transition-all duration-300 hover:border-blue-500/50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white transition-all duration-300 hover:border-blue-500/50"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white resize-none transition-all duration-300 hover:border-blue-500/50"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;