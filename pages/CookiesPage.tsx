import React from 'react';
import { Link } from 'react-router-dom';

// NOTE: A real cookie banner would have state management and logic to set cookies.
// This is a visual placeholder.
const CookieConsentBanner: React.FC = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
        <p className="text-sm">Nós usamos cookies para melhorar sua experiência. Ao continuar a navegar, você concorda com nosso uso de cookies.</p>
        <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">Aceitar</button>
            <Link to="/politica-de-cookies" className="px-4 py-2 rounded text-sm hover:bg-neutral-700">Saber mais</Link>
        </div>
    </div>
);

const LegalPageLayout: React.FC<{ title: string; lastUpdated: string; children: React.ReactNode }> = ({ title, lastUpdated, children }) => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-sm text-neutral-500 mb-6">Última atualização: {lastUpdated}</p>
            <div className="prose dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                {children}
            </div>
        </div>
    </div>
);

const CookiesPage: React.FC = () => {
    return (
        <>
            <LegalPageLayout title="Política de Cookies" lastUpdated="20 de Novembro de 2024">
                <h2>1. O que são cookies?</h2>
                <p>
                    Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou smartphone) quando você visita o site da <strong>Academia Lendária</strong>. 
                    Eles servem para reconhecer seu navegador, entender suas preferências de navegação e melhorar a experiência de uso, tornando o site mais rápido e personalizado.
                </p>

                <h2>2. Por que utilizamos cookies?</h2>
                <p>
                    Utilizamos cookies para fornecer a melhor experiência possível em nosso site <strong>academia-lendasv2.valoresdigitais.com</strong>, garantindo o bom funcionamento das páginas, 
                    oferecendo conteúdos personalizados e analisando métricas de desempenho. Alguns cookies permitem lembrar suas preferências de navegação e outras guardam dados estatísticos 
                    anônimos sobre como os visitantes usam o site.
                </p>

                <h2>3. Tipos de cookies utilizados</h2>
                <ul>
                    <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para o funcionamento do site e para permitir o acesso a áreas seguras, como checkout e login.</li>
                    <li><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os usuários interagem com o site, ajudando-nos a melhorar sua usabilidade e desempenho.</li>
                    <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre de suas escolhas (como idioma e preferências de layout) para oferecer uma experiência mais personalizada.</li>
                    <li><strong>Cookies de Marketing:</strong> Usados para exibir anúncios relevantes e personalizados, além de medir a eficácia de nossas campanhas e comunicações.</li>
                </ul>

                <h2>4. Como gerenciar ou desativar cookies?</h2>
                <p>
                    Você pode gerenciar suas preferências de cookies diretamente nas configurações do seu navegador. A maioria dos navegadores permite bloquear ou excluir cookies. 
                    No entanto, o bloqueio de determinados tipos pode afetar a funcionalidade e o desempenho do site. Abaixo estão os links de gerenciamento para os principais navegadores:
                </p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/pt-BR/kb/ativando-e-desativando-cookies" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
                    <li><a href="https://support.microsoft.com/pt-br/topic/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
                </ul>

                <h2>5. Cookies de terceiros</h2>
                <p>
                    Trabalhamos com parceiros de marketing e análise que também podem definir cookies em seu dispositivo quando você usa nosso site. 
                    Esses cookies ajudam a compreender a interação dos usuários com o conteúdo e a apresentar campanhas relevantes. 
                    A <strong>Academia Lendária</strong> não controla o uso desses cookies de terceiros e recomenda verificar as respectivas políticas de privacidade para mais informações.
                </p>

                <h2>6. Atualizações desta política</h2>
                <p>
                    A presente Política de Cookies pode ser atualizada periodicamente para refletir mudanças em nossas práticas de uso e gestão de cookies. 
                    Recomendamos revisar esta página regularmente para manter-se informado sobre como usamos cookies.
                </p>

                <h2>7. Contato</h2>
                <p>
                    Em caso de dúvidas, entre em contato conosco pelo e-mail: <a href="mailto:contato@academialendaria.com">contato@academialendaria.com</a> ou através do nosso site oficial. 
                    Estamos comprometidos em garantir transparência e segurança no uso de seus dados e preferências.
                </p>
            </LegalPageLayout>
            <CookieConsentBanner />
        </>
    );
};

export default CookiesPage;
