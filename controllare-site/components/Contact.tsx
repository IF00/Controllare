
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'Seguro de Carga (RCTR-C/RCF-DC)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso. Nossa equipe técnica entrará em contato.');
    setFormData({ name: '', email: '', phone: '', message: '', interest: 'Seguro de Carga (RCTR-C/RCF-DC)' });
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-0 border border-slate-200">
          <div className="lg:col-span-4 bg-black p-12 text-white">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Vamos proteger sua operação.</h2>
            <p className="text-slate-400 mb-16 text-sm font-medium leading-relaxed">
              Solicite uma análise técnica da sua frota ou operação de transporte. Nossa equipe especializada retornará em até 2 horas comerciais.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-5">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Cotações</p>
                  <p className="text-white font-medium text-sm">cotacao@controllaregestao.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-white/20">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Plantão 24h Sinistros</p>
                  <p className="text-white font-medium text-sm">+55 (11) 98765-4321</p>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-white/10 flex space-x-6 grayscale opacity-60">
               <span className="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">LinkedIn</span>
               <span className="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Instagram</span>
            </div>
          </div>

          <div className="lg:col-span-8 p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest">Nome do Responsável</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ex: João Silva"
                    className="w-full bg-slate-50 border-none px-6 py-5 focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest">E-mail Corporativo</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="joao@transportadora.com.br"
                    className="w-full bg-slate-50 border-none px-6 py-5 focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm font-medium"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest">CNPJ da Empresa</label>
                  <input
                    type="text"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="00.000.000/0001-00"
                    className="w-full bg-slate-50 border-none px-6 py-5 focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest">Tipo de Ramo</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-slate-50 border-none px-6 py-5 focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm font-medium appearance-none"
                  >
                    <option>Seguro de Carga (RCTR-C/RCF-DC)</option>
                    <option>Transporte Internacional</option>
                    <option>Seguro Frota</option>
                    <option>Gerenciamento de Risco (PGR)</option>
                    <option>Outros Serviços</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-black uppercase tracking-widest">Briefing da Operação</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Descreva brevemente sua rota e tipo de mercadoria..."
                  className="w-full bg-slate-50 border-none px-6 py-5 focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-slate-800 text-white font-black py-6 text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-4 group"
              >
                <span>Enviar Solicitação de Análise</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
