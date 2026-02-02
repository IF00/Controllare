
import React, { useState } from 'react';
import AboutModal from './AboutModal';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="bg-black aspect-[4/5] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605705658744-46944066986e?auto=format&fit=crop&q=80&w=800" 
                  alt="Inspeção de Sinistro" 
                  className="w-full h-full object-cover grayscale opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                   <p className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Autoridade em <span className="text-slate-400 underline decoration-1">SINISTROS</span>.</p>
                   <div className="flex space-x-6">
                      <div>
                         <span className="block text-2xl font-black text-white">15+</span>
                         <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Anos Atuando</span>
                      </div>
                      <div className="w-px h-8 bg-slate-700"></div>
                      <div>
                         <span className="block text-2xl font-black text-white">10k+</span>
                         <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Sinistros Regulados</span>
                      </div>
                   </div>
                </div>
             </div>
             {/* Elemento decorativo */}
             <div className="absolute -top-6 -right-6 w-32 h-32 border border-black/10 z-[-1] hidden md:block"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-black font-black tracking-widest uppercase text-[10px] mb-6">Expertise Técnica</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight uppercase tracking-tighter">
              Defendemos sua operação no momento crítico.
            </h3>
            <div className="space-y-6 text-slate-600 text-base font-medium leading-relaxed">
              <p>
                A Controllare Gestão se diferencia pelo seu núcleo técnico especializado em sinistros de transporte. Não somos apenas uma corretora; somos o seu braço direito na investigação e regulação de perdas.
              </p>
              <p>
                Nossa atuação começa no instante do acidente. Com uma rede de pronta resposta, garantimos que todas as evidências sejam preservadas e que o processo de regulação junto à seguradora seja o mais ágil e justo possível.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-black pl-6">
                <h4 className="font-black uppercase tracking-widest text-xs mb-2">Perícia In-Loco</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Analistas técnicos enviados ao local do sinistro para acompanhamento imediato.</p>
              </div>
              <div className="border-l-2 border-black pl-6">
                <h4 className="font-black uppercase tracking-widest text-xs mb-2">Recuperação de Carga</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Estratégias para mitigação de prejuízos e salvamento de mercadorias.</p>
              </div>
            </div>

            <div className="mt-16">
               <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest text-xs transition-all hover:bg-slate-800"
               >
                  Nossa História
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Sobre Nós */}
      <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default About;
