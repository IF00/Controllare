
import React, { useEffect } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white text-black overflow-y-auto rounded-none shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-4 bg-slate-50 p-12 flex flex-col justify-between min-h-[400px] border-r border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block mb-4">Fundador & Comissário</span>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-8">Lucas<br/>Mattos.</h2>
              <div className="w-12 h-1 bg-black mb-8"></div>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed text-slate-500">
                "A atenção exata técnica e operacional na pista é o que define o sucesso da regulação."
              </p>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" 
                alt="Profissional de Seguros" 
                className="w-full grayscale brightness-90 contrast-125 mb-4"
              />
              <p className="text-[8px] text-slate-400 font-mono uppercase tracking-widest text-center">Gestão de Sinistros & Logística</p>
            </div>
          </div>

          <div className="lg:col-span-8 p-8 md:p-16 lg:p-24 bg-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">Nossa História</h3>
              
              <div className="space-y-8 text-slate-800 leading-relaxed font-medium">
                <section>
                  <p className="text-xl md:text-2xl text-black font-light mb-6 leading-snug">
                    Meu nome é <strong>Lucas Mattos</strong>, sou comissário de avarias. Tenho 35 anos, nasci em São Paulo capital. Entrei no ramo de sinistro em 2012, comecei a trabalhar na parte de Property. Em 2014, comecei a trabalhar no ramo de sinistro de transporte de cargas.
                  </p>
                  <p>
                    Pela oportunidade que tive de trabalhar em uma das grandes reguladoras do Brasil, a SR Company, passei por todas as fases da parte operacional do sinistro, iniciando ali na captação, posterior trabalhando juntamente com a coordenação, fazendo a análise dos atendimentos, a gestão dos atendimentos em pista e também essa parte do controle de vistoriadores e tratativas comerciais.
                  </p>
                </section>

                <blockquote className="border-l-4 border-black pl-6 py-2 my-10 italic text-lg text-black font-serif">
                  "Comecei a enxergar a necessidade técnica operacional que existe dentro do nosso setor. Percebi que muitos profissionais na rua não são valorizados e essa falta de atenção gera problemas críticos na análise técnica de indenização."
                </blockquote>

                <section>
                  <p className="mb-6">
                    Posteriormente, fui trabalhar como vistoriador. Fiz atendimentos em pista e comecei a perceber que a atenção necessária pro prestador que tá na pista faz com que todo o processo de regulação, todo o processo documental e todo o processo de decisão siga de forma natural, mais rápida, mais clara e precisa.
                  </p>
                  <p>
                    Dessa forma que se iniciou a <strong>Controllare</strong>. Somos uma empresa de gestão de sinistro. Atuamos como o elo entre o contratante e o vistoriador, dando a devida atenção ao profissional que tá na pista para que o trabalho seja executado da melhor forma, não hajam falhas e assim a gente consiga entregar o melhor resultado.
                  </p>
                </section>

                <section className="bg-slate-50 p-8 border-l-2 border-black">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-black text-[10px]">A "Janela" da Operação</h4>
                  <p className="text-sm">
                    Essa ideia surgiu por conta da necessidade do trabalho na pista. Quando atendemos um acidente, sabemos que existe uma "janela" que temos que atuar: o período que o caminhão está tombado e a carga está exposta. O profissional não pode perder essa janela para evitar retrabalhos ou penalidades.
                  </p>
                </section>

                <section>
                  <p>
                    Nosso trabalho está nisso e a gente sempre vem ganhando cada vez mais mercado, unindo a técnica de campo com a inteligência estratégica de gestão.
                  </p>
                </section>
              </div>

              <div className="mt-16 flex items-center justify-between border-t border-slate-100 pt-10">
                <button 
                  onClick={onClose}
                  className="bg-black text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl"
                >
                  Voltar ao Início
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
