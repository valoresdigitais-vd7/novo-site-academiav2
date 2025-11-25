import React, { useState, useEffect, useRef } from 'react';

// --- ICONS (Inline for portability based on the brief's visual style) ---
const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
const ZapIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const ShieldIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);
const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);
const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const TargetIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);
const BrainIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
);

// --- SHARED COMPONENTS ---

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-4 justify-center py-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <div className="bg-neutral-800 border border-yellow-500/30 rounded-md p-3 min-w-[70px]">
                        <span className="text-3xl font-mono font-bold text-yellow-500">
                            {value.toString().padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-xs uppercase text-neutral-500 mt-1">{unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Min' : 'Seg'}</span>
                </div>
            ))}
        </div>
    );
};

// --- BLOCK 1: CAPTURA E PROPOSTA DE VALOR (ATENÇÃO) ---

const HeroSection: React.FC = () => (
    <section id="hero" className="relative py-20 md:py-32 bg-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 items-center text-center">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    <span className="text-sm font-bold text-yellow-500 tracking-wider uppercase">Black Friday Lendária</span>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                        Acesso <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Eterno</span> à Maior Comunidade de IA do Brasil
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Transforme sua carreira e seus negócios dominando a Inteligência Artificial. Junte-se à Academia Lendár[IA] com uma oferta que nunca mais se repetirá.
                    </p>
                </div>

                <div className="w-full max-w-lg mx-auto mt-4">
                    <p className="text-sm text-neutral-500 mb-2 font-semibold uppercase tracking-widest">Oferta encerra em breve</p>
                    <CountdownTimer />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
                    <a href="#pricing" className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-lg py-4 px-10 rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        QUERO ACESSO ETERNO
                    </a>
                </div>
                
                <p className="text-sm text-neutral-500 flex items-center gap-2">
                    <ShieldIcon className="w-4 h-4 text-yellow-500" /> Garantia de 7 dias incondicional
                </p>

                {/* Video Placeholder */}
                <div className="w-full max-w-4xl mt-12 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-video rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                            <p className="text-neutral-400 font-medium">Assista ao vídeo oficial da Black Friday</p>
                        </div>
                        {/* 
                           To activate video, replace the div above with:
                           <iframe className="w-full h-full" src="https://www.youtube.com/embed/YOUR_ID?autoplay=0" ... ></iframe> 
                        */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 2: AUTORIDADE E PROBLEMATIZAÇÃO (INTERESSE) ---

const AuthorityBar: React.FC = () => (
    <div className="bg-neutral-900 border-y border-neutral-800 py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-80">
                <div className="text-center md:text-left">
                    <p className="text-3xl font-bold text-white">+10.000</p>
                    <p className="text-xs uppercase tracking-widest text-neutral-500">Alunos Satisfeitos</p>
                </div>
                <div className="h-8 w-px bg-neutral-800 hidden md:block"></div>
                <div className="text-center md:text-left">
                    <p className="text-3xl font-bold text-white">R$ 127 Mi</p>
                    <p className="text-xs uppercase tracking-widest text-neutral-500">Gerados em Negócios</p>
                </div>
                <div className="h-8 w-px bg-neutral-800 hidden md:block"></div>
                <div className="text-center md:text-left">
                    <p className="text-3xl font-bold text-white">40+</p>
                    <p className="text-xs uppercase tracking-widest text-neutral-500">Países Alcançados</p>
                </div>
                <div className="h-8 w-px bg-neutral-800 hidden md:block"></div>
                <div className="text-center md:text-left">
                    <p className="text-3xl font-bold text-white">Top 1%</p>
                    <p className="text-xs uppercase tracking-widest text-neutral-500">Hotmart Creator</p>
                </div>
            </div>
        </div>
    </div>
);

const ProblemSolutionSection: React.FC = () => (
    <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Você está sentindo que está <span className="text-red-500">ficando para trás?</span>
                    </h2>
                    <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                        O mundo dos negócios mudou. Quem ignora a Inteligência Artificial hoje está operando em câmera lenta enquanto a concorrência acelera. A sensação de sobrecarga e a incerteza sobre o futuro da sua profissão não são por acaso.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                            <span className="text-red-500 mr-4 text-xl">❌</span>
                            <p className="text-neutral-300">Perdendo horas em tarefas operacionais que a IA faria em segundos.</p>
                        </div>
                        <div className="flex items-start bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                            <span className="text-red-500 mr-4 text-xl">❌</span>
                            <p className="text-neutral-300">Vendo concorrentes menos experientes ganhando destaque por serem mais rápidos.</p>
                        </div>
                        <div className="flex items-start bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                            <span className="text-red-500 mr-4 text-xl">❌</span>
                            <p className="text-neutral-300">Consumindo conteúdo fragmentado na internet que não gera resultado prático.</p>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-yellow-500/20 shadow-[0_0_40px_rgba(234,179,8,0.1)]">
                    <div className="flex items-center gap-4 mb-6">
                        <BrainIcon className="w-10 h-10 text-yellow-500" />
                        <h3 className="text-2xl font-bold text-white">A Nova Realidade Lendár[IA]</h3>
                    </div>
                    <p className="text-neutral-400 mb-6">
                        Na Academia Lendár[IA], você não aprende apenas "prompts". Você domina a estratégia por trás da tecnologia.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-white">
                            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                            <span>Automatize processos complexos</span>
                        </li>
                        <li className="flex items-center text-white">
                            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                            <span>Crie conteúdo de alto nível em escala</span>
                        </li>
                        <li className="flex items-center text-white">
                            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                            <span>Tome decisões baseadas em dados</span>
                        </li>
                        <li className="flex items-center text-white">
                            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                            <span>Networking com a elite do mercado</span>
                        </li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-neutral-800">
                        <p className="text-yellow-500 font-bold text-center">Tudo isso com Acesso Vitalício (Lifetime)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- BLOCK 3: DESEJO E DETALHES DA OFERTA ---

const FeaturesGrid: React.FC = () => {
    const features = [
        { title: "25+ Cursos Completos", desc: "Do básico ao avançado em ChatGPT, Midjourney, Automação e Estratégia." },
        { title: "Comunidade Ativa", desc: "Networking diário com empresários e profissionais que respiram inovação." },
        { title: "Atualizações Semanais", desc: "O mercado muda rápido. Nós mudamos mais rápido. Você sempre atualizado." },
        { title: "Mentalidade de Elite", desc: "Módulos focados em destravar sua produtividade e visão de negócios." }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Ecossistema Completo</h2>
                    <p className="text-neutral-400">Tudo o que você precisa para liderar seu mercado em um só lugar.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 hover:border-yellow-500/50 transition-colors group">
                            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                                <ZapIcon className="w-6 h-6 text-yellow-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                            <p className="text-neutral-400 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FounderSection: React.FC = () => (
    <section className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="w-full md:w-1/3">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-500 rounded-2xl rotate-3 opacity-20"></div>
                        <img 
                            src="https://picsum.photos/id/1005/400/400" 
                            alt="Alan Nicolas" 
                            className="relative rounded-2xl shadow-2xl w-full grayscale hover:grayscale-0 transition duration-500" 
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <h4 className="text-yellow-500 font-bold uppercase tracking-widest mb-2">Seu Mentor</h4>
                    <h2 className="text-4xl font-bold text-white mb-6">Alan Nicolas</h2>
                    <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                        <p>
                            De endividado a fundador de um ecossistema que gerou mais de R$ 127 milhões. Alan Nicolas não é apenas um teórico; é um executor.
                        </p>
                        <p>
                            Pioneiro no uso de IA para negócios no Brasil, ele decodificou os padrões que separam empresas comuns das lendárias.
                        </p>
                        <p>
                            "Minha missão é garantir que você não seja apenas um espectador da revolução tecnológica, mas o protagonista dela."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const TestimonialsCarousel: React.FC = () => {
    // Mock data based on the persona
    const testimonials = [
        { name: "Carlos M.", role: "CEO Agência Digital", text: "A Academia Lendár[IA] salvou minha agência. Reduzimos custos em 40% e dobramos a entrega." },
        { name: "Fernanda S.", role: "Advogada", text: "Achava que IA era só para programadores. Hoje automatizo contratos e pesquisas. Surreal." },
        { name: "João P.", role: "E-commerce", text: "O suporte da comunidade vale mais que o curso. Networking de altíssimo nível." }
    ];

    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold text-white">Quem entra, não sai (e agora você fica para sempre)</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 max-w-md w-full relative">
                        <div className="text-yellow-500 text-4xl font-serif absolute top-4 left-4 opacity-30">"</div>
                        <p className="text-neutral-300 mb-6 relative z-10 italic">{t.text}</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-neutral-700 rounded-full"></div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm">{t.name}</p>
                                <p className="text-neutral-500 text-xs">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- BLOCK 4: AÇÃO (PRICING & FECHAMENTO) ---

const PricingCard: React.FC<{ 
    title: string; 
    price: string; 
    installments: string; 
    features: string[]; 
    isHighlight?: boolean; 
    ctaText: string 
}> = ({ title, price, installments, features, isHighlight, ctaText }) => (
    <div className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${isHighlight ? 'bg-neutral-900 border-2 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] scale-105 z-10' : 'bg-black border border-neutral-800 hover:border-neutral-700 opacity-90'}`}>
        {isHighlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black font-extrabold text-xs px-4 py-1 rounded-full tracking-widest uppercase">
                Mais Popular
            </div>
        )}
        <h3 className={`text-xl font-bold mb-2 ${isHighlight ? 'text-yellow-500' : 'text-white'}`}>{title}</h3>
        <div className="mb-6">
            <span className="text-neutral-500 text-sm line-through block">De R$ 2.997 por</span>
            <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold text-white">{installments}</span>
            </div>
            <p className="text-neutral-400 text-sm mt-1">ou {price} à vista</p>
        </div>
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start text-sm text-neutral-300">
                    <CheckCircleIcon className="w-5 h-5 text-yellow-500 mr-2 shrink-0" />
                    {feat}
                </li>
            ))}
        </ul>
        <button className={`w-full py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-all ${isHighlight ? 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg' : 'bg-neutral-800 hover:bg-neutral-700 text-white'}`}>
            {ctaText}
        </button>
        <p className="text-center text-xs text-neutral-600 mt-4">Acesso imediato e vitalício.</p>
    </div>
);

const PricingSection: React.FC = () => (
    <section id="pricing" className="py-24 bg-neutral-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Escolha seu Plano Vitalício</h2>
                <p className="text-xl text-neutral-400">Pague uma vez, tenha acesso para sempre. A melhor oferta da história.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
                <PricingCard 
                    title="Público Geral"
                    installments="12x R$ 138,80"
                    price="R$ 1.388"
                    features={[
                        "Acesso Vitalício à Academia",
                        "Mais de 25 cursos inclusos",
                        "Todas as futuras atualizações",
                        "Acesso à Comunidade Lendár[IA]",
                        "Bônus: Imersão Black",
                        "Certificado de Conclusão"
                    ]}
                    ctaText="Quero Acesso Eterno"
                    isHighlight={true}
                />
                <PricingCard 
                    title="Alunos e Ex-Alunos"
                    installments="12x R$ 98,80"
                    price="R$ 988"
                    features={[
                        "Upgrade para Plano Vitalício",
                        "Migração de conta imediata",
                        "Acesso a novos cursos liberados",
                        "Comunidade VIP",
                        "Suporte Prioritário",
                        "Condição Exclusiva de Luno"
                    ]}
                    ctaText="Fazer Upgrade Agora"
                    isHighlight={false}
                />
            </div>
            
            <div className="mt-12 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-6 mx-2 opacity-70 grayscale hover:grayscale-0 transition"/>
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-6 mx-2 opacity-70 grayscale hover:grayscale-0 transition"/>
                    <img src="https://img.icons8.com/color/48/000000/pix.png" alt="Pix" className="h-6 mx-2 opacity-70 grayscale hover:grayscale-0 transition"/>
                    <span className="text-neutral-500 text-sm ml-4 border-l border-neutral-700 pl-4">Pagamento 100% Seguro</span>
                </div>
            </div>
        </div>
    </section>
);

const GuaranteeSection: React.FC = () => (
    <section className="py-20 bg-black border-t border-neutral-900">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-neutral-900/50 border border-yellow-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
                
                <ShieldIcon className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Risco Zero: 7 Dias de Garantia</h2>
                <p className="text-neutral-400 mb-8">
                    Entre, assista às aulas, participe da comunidade. Se você achar que a Academia Lendár[IA] não é para você, devolvemos 100% do seu investimento. Sem letras miúdas. O risco é todo nosso.
                </p>
                <a href="#pricing" className="text-yellow-500 font-bold hover:text-yellow-400 underline underline-offset-4">
                    Aproveitar garantia e garantir vaga
                </a>
            </div>
        </div>
    </section>
);

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        { q: "O acesso é realmente vitalício?", a: "Sim! Nesta oferta de Black Friday, você paga uma única vez (ou parcela em 12x) e nunca mais perde o acesso. Inclusive às atualizações futuras." },
        { q: "Serve para quem não sabe nada de programação?", a: "Com certeza. 90% dos nossos alunos não são programadores. Ensinamos IA aplicada a negócios, marketing e produtividade, não código." },
        { q: "Como funciona o suporte?", a: "Você terá acesso à nossa comunidade exclusiva onde monitores e outros membros experientes tiram dúvidas diariamente." },
        { q: "Quais são as formas de pagamento?", a: "Aceitamos cartão de crédito em até 12x (podendo usar 2 cartões), PIX à vista e boleto." }
    ];

    return (
        <section className="py-20 bg-neutral-950">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div key={index} className="bg-neutral-900 rounded-lg border border-neutral-800 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="font-semibold text-white">{item.q}</span>
                                <ChevronDownIcon className={`w-5 h-5 text-neutral-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 pt-0 text-neutral-400 border-t border-neutral-800 mt-2">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- FINAL COMPOSITION ---

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-yellow-500 selection:text-black">
            {/* AIDA STRUCTURE IMPLEMENTATION */}
            
            {/* 1. ATTENTION */}
            <HeroSection />
            <AuthorityBar />

            {/* 2. INTEREST */}
            <ProblemSolutionSection />
            <FounderSection />

            {/* 3. DESIRE */}
            <FeaturesGrid />
            <TestimonialsCarousel />

            {/* 4. ACTION */}
            <PricingSection />
            <GuaranteeSection />
            <FAQSection />

            <footer className="py-8 bg-black border-t border-neutral-900 text-center text-neutral-600 text-sm">
                <div className="container mx-auto px-4">
                    <p>© {new Date().getFullYear()} Academia Lendár[IA]. Todos os direitos reservados.</p>
                    <p className="mt-2">CNPJ: 00.000.000/0001-00 | Termos de Uso | Política de Privacidade</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;