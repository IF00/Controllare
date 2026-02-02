
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <span className="text-2xl font-black tracking-tighter text-white mb-8 block">
              CONTROLLARE<span className="font-light">GESTÃO</span>
            </span>
            <p className="text-slate-500 font-medium text-xs leading-relaxed mb-8 max-w-xs uppercase tracking-wider">
              Estratégia e Proteção em Logística de Transportes. Referência técnica no mercado brasileiro de seguros.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Soluções</h4>
            <ul className="space-y-4">
              {['RCTR-C / RCF-DC', 'Carga Internacional', 'Aeronáutico / Cascos', 'Seguro de Frota', 'PGR & Risco'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Empresa</h4>
            <ul className="space-y-4">
              {['Quem Somos', 'Manifesto Técnico', 'Trabalhe Conosco', 'Área do Cliente', 'Fale Conosco'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-8">Inteligência</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6 leading-relaxed">Assine nossa newsletter técnica para gestores de logística.</p>
            <div className="flex border border-white/10">
              <input 
                type="email" 
                placeholder="E-MAIL CORPORATIVO" 
                className="bg-transparent border-none px-4 py-3 w-full text-white text-[10px] font-bold focus:ring-0 placeholder-slate-700"
              />
              <button className="bg-white px-5 py-3 hover:bg-slate-200 transition-colors">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[8px] font-black uppercase tracking-[0.3em] text-center md:text-left">
            © 2024 Controllare Gestão de Riscos. SUSEP: 000.000-0. Todos os direitos reservados.
          </p>
          <div className="flex space-x-10">
            <a href="#" className="text-slate-600 text-[8px] font-black uppercase tracking-widest hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="text-slate-600 text-[8px] font-black uppercase tracking-widest hover:text-white transition-colors">Compliance</a>
            <a href="#" className="text-slate-600 text-[8px] font-black uppercase tracking-widest hover:text-white transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
