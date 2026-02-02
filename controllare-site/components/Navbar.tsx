
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Seguros', href: '#services' },
    { name: 'Logística', href: '#about' },
    { name: 'Consultor IA', href: '#ai' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-effect shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-black' : 'text-white'}`}>
              CONTROLLARE<span className="font-light">GESTÃO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-bold transition-colors hover:text-slate-400 ${isScrolled ? 'text-black' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button className={`px-6 py-2 rounded-none text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>
              Solicitar Cotação
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-black' : 'text-white'} p-2`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-slate-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-sm font-black uppercase tracking-widest text-black hover:bg-slate-50 w-full text-center"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-black text-white w-full py-5 mt-4 font-black uppercase tracking-widest text-xs">
              Solicitar Cotação
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
