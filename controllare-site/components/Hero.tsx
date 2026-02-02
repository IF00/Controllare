
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-gradient pt-20 overflow-hidden">
      {/* Overlay escuro para profundidade */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Imagem de Fundo - Sinistro de Transporte (Estilizada B&W) */}
      <div className="absolute inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1594833202970-f965706df834?auto=format&fit=crop&q=80&w=2000" 
          alt="Sinistro de Transporte" 
          className="w-full h-full object-cover grayscale brightness-75 opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-none text-white text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-white/20">
            <span>Especialistas em Gestão de Sinistros</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
            O RISCO <br />
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>
              REGULADO.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-md leading-relaxed font-light">
            Quando o imprevisto acontece, nossa técnica entra em ação. Especialistas em regulação de sinistros e gestão de riscos para o setor de transportes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#services" className="bg-white hover:bg-slate-200 text-black px-10 py-5 rounded-none font-black text-xs uppercase tracking-widest text-center transition-all shadow-2xl hover:-translate-y-1">
              Ver Soluções
            </a>
            <a href="#contact" className="border border-white/30 hover:bg-white/10 text-white px-10 py-5 rounded-none font-black text-xs uppercase tracking-widest text-center transition-all">
              Acionar Sinistro
            </a>
          </div>

          <div className="mt-20 flex items-center space-x-12 opacity-80">
             <div className="flex flex-col">
                <span className="text-3xl font-black text-white">RCTR-C</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Acidentes Rodoviários</span>
             </div>
             <div className="w-px h-10 bg-white/20"></div>
             <div className="flex flex-col">
                <span className="text-3xl font-black text-white">RCF-DC</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Roubo e Desvio</span>
             </div>
          </div>
        </div>

        <div className="relative hidden md:flex justify-end">
           <div className="relative z-10 w-full max-w-md aspect-square bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1623131718816-f2834d882583?auto=format&fit=crop&q=80&w=800" 
                alt="Perícia Técnica" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-2xl">
                 <p className="text-black font-black text-xs uppercase tracking-widest mb-1">Regulação 24h</p>
                 <p className="text-slate-500 text-[10px] font-medium uppercase">Pronta Resposta em Sinistros</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
