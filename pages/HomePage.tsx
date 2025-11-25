import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// --- ASSETS & ICONS (Inline for Standalone Usage) ---

const IconCheck = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const IconZap = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const IconShield = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const IconLock = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);
const IconChevronDown = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

// --- DATA MOCKS ---

const TESTIMONIALS = [
    {
        quote: "O ROI foi imediato. Só o módulo de automação já pagou o acesso vitalício na primeira semana.",
        author: "Carlos Mendes",
        role: "Empreendedor Digital",
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
        quote: "Nunca vi tanto conteúdo denso e prático. Não é 'prompt de chatgpt', é estratégia de negócio real.",
        author: "Ana Souza",
        role: "Copywriter Senior",
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        quote: "A comunidade vale mais que o curso. Networking de alto nível com quem está faturando alto com IA.",
        author: "Felipe Ross",
        role: "Dev Fullstack",
        avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026302d"
    }
];

const FAQS = [
    {
        question: "O acesso é realmente vitalício?",
        answer: "Sim. Você paga uma única vez e tem acesso para sempre a todo o conteúdo atual e a todas as futuras atualizações da Academia Lendár[IA], sem mensalidades."
    },
    {
        question: "Serve para iniciantes em IA?",
        answer: "Absolutamente. Temos trilhas do zero ao avançado. Você vai aprender desde a engenharia de prompt básica até automações complexas com Python e APIs."
    },
    {
        question: "Como funciona a garantia?",
        answer: "Garantia incondicional de 7 dias. Se você entrar, olhar o conteúdo e achar que não é para você, devolvemos 100% do seu dinheiro. Sem letras miúdas."
    },
    {
        question: "Quais cursos estão inclusos?",
        answer: "Você leva o pacote completo: Mestre do ChatGPT, Automação com Make, Midjourney Profissional, Copywriting com IA, e mais 21 cursos bônus."
    }
];

// --- COMPONENTS ---

// Countdown Timer Component
const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                return prev; // Stop at 0
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-yellow-500 text-black py-2 font-bold text-center uppercase tracking-widest text-xs md:text-sm sticky top-0 z-50 shadow-md">
            ⚠️ OFERTA RELÂMPAGO: O PREÇO SOBE EM <span className="bg-black text-yellow-500 px-2 py-0.5 rounded mx-1 font-mono">{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</span> - NÃO DEIXE PARA DEPOIS
        </div>
    );
};

// FAQ Item Component
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-neutral-800">
            <button
                className="w-full py-6 flex justify-between items-center focus:outline-none text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold text-neutral-200">{question}</span>
                <IconChevronDown className={`w-5 h-5 text-yellow-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pb-6 text-neutral-400">{answer}</p>
            </div>
        </div>
    );
};

// CTA Button Component
const CTAButton: React.FC<{ text: string; subtext?: string; fullWidth?: boolean }> = ({ text, subtext, fullWidth }) => (
    <button className={`group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black font-black uppercase tracking-wider py-5 px-10 rounded-lg shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all transform hover:scale-[1.02] active:scale-95 ${fullWidth ? 'w-full' : ''}`}>
        <span className="relative z-10 flex flex-col items-center leading-tight">
            <span className="text-xl md:text-2xl">{text}</span>
            {subtext && <span className="text-xs font-bold opacity-80 mt-1">{subtext}</span>}
        </span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
    </button>
);

// --- SECTIONS ---

const HeroSection: React.FC = () => (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-[128px]"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-yellow-500/30 text-yellow-400 text-sm font-bold uppercase tracking-wide mb-8">
                    <IconZap className="w-4 h-4" />
                    <span>Acesso Vitalício Liberado</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 uppercase leading-none">
                    Academia <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">Lendár[IA]</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 font-light">
                    A última compra de IA da sua vida. Junte-se à elite que domina a Inteligência Artificial e pare de pagar mensalidades hoje mesmo.
                </p>

                <div className="flex flex-col gap-4 w-full max-w-md">
                    <CTAButton text="Quero Acesso Vitalício" subtext="Oferta por tempo limitado" fullWidth />
                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                        <IconShield className="w-4 h-4" />
                        <span>Garantia de 7 dias</span>
                        <span className="mx-2">•</span>
                        <IconLock className="w-4 h-4" />
                        <span>Pagamento Seguro</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const BenefitsSection: React.FC = () => {
    const features = [
        { title: "25+ Cursos Completos", desc: "Do básico ao avançado em ChatGPT, Midjourney, Python e Automação." },
        { title: "Comunidade VIP", desc: "Networking diário com empreendedores que faturam alto usando IA." },
        { title: "Atualizações Eternas", desc: "Saiu uma IA nova? Você recebe o tutorial atualizado sem pagar 1 centavo a mais." },
        { title: "Pack de Prompts", desc: "Mais de 10.000 prompts validados para copiar e colar no seu negócio." },
        { title: "Lives Semanais", desc: "Mentoria ao vivo para tirar dúvidas e analisar seus projetos." },
        { title: "Certificado Oficial", desc: "Certificação reconhecida para turbinar seu currículo ou LinkedIn." },
    ];

    return (
        <section className="py-20 bg-neutral-950 border-y border-neutral-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                        O que você recebe <span className="text-yellow-500">imediatamente</span>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-xl hover:border-yellow-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-black text-yellow-500 transition-colors">
                                <IconCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PricingSection: React.FC = () => (
    <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                
                {/* Competitor / Monthly Model */}
                <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 opacity-60 hover:opacity-100 transition-opacity">
                    <h3 className="text-2xl font-bold text-neutral-400 mb-2">Outros Cursos</h3>
                    <p className="text-sm text-neutral-500 mb-6">Modelo de assinatura tradicional</p>
                    <div className="text-4xl font-bold text-neutral-300 mb-8 line-through decoration-red-500">R$ 97<span className="text-lg font-normal text-neutral-600">/mês</span></div>
                    <ul className="space-y-4 mb-8 text-neutral-500">
                        <li className="flex items-center gap-2"><span className="text-red-500">×</span> Acesso limitado</li>
                        <li className="flex items-center gap-2"><span className="text-red-500">×</span> Mensalidade recorrente</li>
                        <li className="flex items-center gap-2"><span className="text-red-500">×</span> Conteúdo desatualizado</li>
                    </ul>
                </div>

                {/* Offer Card */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-[0_0_40px_rgba(250,204,21,0.2)] transform md:scale-110 z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-500 border border-yellow-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                        Melhor Escolha • Acesso Vitalício
                    </div>
                    <div className="bg-neutral-900 p-8 rounded-xl h-full flex flex-col">
                        <h3 className="text-3xl font-black text-white mb-2 uppercase italic">Academia Lendár[IA]</h3>
                        <p className="text-yellow-400 font-medium mb-6">Pague uma vez, acesse para sempre</p>
                        
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-5xl font-black text-white">R$ 297</span>
                            <span className="text-xl text-neutral-400 mb-2 line-through">R$ 997</span>
                        </div>

                        <ul className="space-y-4 mb-8 text-neutral-300 flex-grow">
                            <li className="flex items-center gap-3">
                                <IconCheck className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <span className="font-bold text-white">Acesso Vitalício</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <IconCheck className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <span>+25 Cursos Inclusos</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <IconCheck className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <span>Comunidade Premium</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <IconCheck className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                <span>Atualizações Garantidas</span>
                            </li>
                        </ul>

                        <CTAButton text="Começar Agora" fullWidth />
                    </div>
                </div>

            </div>
        </div>
    </section>
);

const TestimonialsSection: React.FC = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    return (
        <section className="py-24 bg-neutral-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                        Quem entrou <span className="text-yellow-500">aprovou</span>
                    </h2>
                    <p className="mt-4 text-neutral-400">Junte-se a mais de 5.000 alunos satisfeitos.</p>
                </div>
                
                <div ref={scrollContainer} className="flex flex-wrap md:flex-nowrap justify-center gap-6">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="w-full md:w-96 bg-neutral-900 p-8 rounded-xl border border-neutral-800 hover:border-yellow-500/30 transition-all shadow-lg">
                            <div className="flex items-center gap-1 mb-4 text-yellow-500">
                                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                            </div>
                            <p className="text-neutral-300 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                            <div className="flex items-center border-t border-neutral-800 pt-4">
                                <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-10 w-10 rounded-full object-cover ring-2 ring-yellow-500/50" />
                                <div className="ml-4">
                                    <p className="font-bold text-white text-sm">{testimonial.author}</p>
                                    <p className="text-xs text-yellow-500/80">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQSection: React.FC = () => (
    <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-black text-center text-white mb-12 uppercase">Perguntas Frequentes</h2>
            <div className="space-y-2">
                {FAQS.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-neutral-950 py-12 border-t border-neutral-900 text-center text-neutral-500 text-sm">
        <div className="container mx-auto px-4">
            <p className="mb-4">
                <span className="font-bold text-white">ACADEMIA LENDÁR[IA]</span> © {new Date().getFullYear()} - Todos os direitos reservados.
            </p>
            <div className="flex justify-center gap-6 mb-8">
                <Link to="/termos" className="hover:text-yellow-500 transition-colors">Termos de Uso</Link>
                <Link to="/privacidade" className="hover:text-yellow-500 transition-colors">Política de Privacidade</Link>
            </div>
            <p className="max-w-2xl mx-auto text-xs opacity-60">
                Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
            </p>
        </div>
    </footer>
);

// --- MAIN PAGE ---

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
            <CountdownTimer />
            <HeroSection />
            <BenefitsSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            
            {/* Sticky Mobile CTA */}
            <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-black/90 backdrop-blur-md border-t border-neutral-800 z-50">
                <CTAButton text="Garantir Acesso" fullWidth />
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
