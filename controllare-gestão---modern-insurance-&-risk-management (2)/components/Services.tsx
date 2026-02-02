
import React from 'react';

const services = [
  {
    title: 'Seguro de Carga (RCTR-C)',
    description: 'Proteção obrigatória contra acidentes, colisões, tombamentos e incêndios durante o transporte rodoviário.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: 'Roubo e Desvio (RCF-DC)',
    description: 'Cobertura facultativa contra o desaparecimento de carga concomitante com o veículo, incluindo furto e roubo.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Transporte Internacional',
    description: 'Seguros para importação e exportação em todos os modais: aéreo, marítimo e terrestre com cobertura global.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Gerenciamento de Risco',
    description: 'Consultoria completa para implementação de tecnologias de rastreamento, escolta e auditoria de frotas.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Auditoria de Processos',
    description: 'Análise rigorosa de PGR (Plano de Gerenciamento de Risco) para garantir conformidade com as seguradoras.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Consultoria em Sinistros',
    description: 'Suporte especializado no processo de regulação de sinistros, buscando a indenização correta no menor tempo.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-black font-black tracking-widest uppercase text-[10px] mb-4">Portfólio Especializado</h2>
            <p className="text-5xl font-black text-black leading-tight uppercase tracking-tighter">Soluções para o Setor Logístico</p>
          </div>
          <div className="h-px flex-grow bg-slate-200 mb-4 hidden md:block"></div>
          <p className="text-slate-500 font-medium max-w-xs text-sm">Proteção técnica e jurídica para transportadoras e embarcadores em todo o território nacional.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-12 bg-white border-r border-b border-slate-100 transition-all duration-300 hover:bg-black hover:text-white group"
            >
              <div className="w-12 h-12 text-black mb-10 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">{service.title}</h3>
              <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
              <div className="mt-12 flex items-center font-black uppercase tracking-widest text-[10px] cursor-pointer group-hover:translate-x-2 transition-transform">
                Detalhes do Serviço
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
