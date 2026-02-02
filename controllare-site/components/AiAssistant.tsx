
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou o consultor virtual da Controllare. Como posso ajudar com suas dúvidas sobre seguros de carga ou regulação de sinistros hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "Você é o consultor virtual sênior da Controllare Gestão, especialista em Seguros de Transporte (RCTR-C, RCF-DC, Seguro de Carga Internacional) e Logística no Brasil. Responda de forma técnica, porém direta e profissional. Use terminologia do setor (PGR, Averbação, DDR, Sinistro). Seja sempre em Português do Brasil e mantenha um tom de autoridade no assunto.",
          temperature: 0.7,
        },
      });

      const modelResponse = response.text || 'Ocorreu um erro na conexão. Por favor, tente novamente.';
      setMessages(prev => [...prev, { role: 'model', text: modelResponse }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Tivemos um problema técnico. Entre em contato com nosso suporte humano.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
         <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" alt="Truck Grid" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-none bg-white text-black text-[10px] font-black tracking-widest uppercase mb-4">
            Consultoria Instantânea
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">Inteligência de Risco</h2>
          <p className="text-slate-400 font-medium text-sm max-w-lg mx-auto">
            Dúvidas sobre averbação, PGR ou coberturas específicas? Nossa IA está pronta para orientar sua operação agora mesmo.
          </p>
        </div>

        <div className="bg-white rounded-none overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)]">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
             <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span className="text-[10px] text-black font-black uppercase tracking-[0.2em]">Controllare AI Advisor</span>
             </div>
          </div>

          <div 
            ref={scrollRef}
            className="h-[450px] overflow-y-auto p-8 space-y-6 scrollbar-thin scrollbar-thumb-slate-200"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-black text-white font-medium' 
                    : 'bg-slate-50 text-slate-800 border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 p-5 border border-slate-100">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua dúvida técnica..."
              className="flex-grow bg-slate-50 border-none text-black px-6 py-4 focus:outline-none focus:ring-1 focus:ring-black transition-all text-sm font-medium"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-black hover:bg-slate-800 disabled:opacity-30 text-white w-14 h-14 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
