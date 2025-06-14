import React from 'react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  scrollToSection
}) => {
  const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/30 ${activeSection === href ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-gray-300 hover:text-white'
        }`}
    >
      {children}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
            Kavishka Rasara
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="home" onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink href="about" onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink href="skills" onClick={() => scrollToSection('skills')}>Skills</NavLink>
            <NavLink href="projects" onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink href="contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;