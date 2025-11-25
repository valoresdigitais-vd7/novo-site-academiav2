import React from 'react';

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

const PrivacyPage: React.FC = () => {
    return (
        <LegalPageLayout title="Política de Privacidade" lastUpdated="1 de Janeiro de 2024">
            <h2>1. Introdução</h2>
            <p>
                Na <strong>Academia Lendár[IA]</strong>, valorizamos a sua privacidade e estamos comprometidos em proteger seus dados pessoais. 
                Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos suas informações ao usar nosso site 
                (<a href="https://academia-lendasv2.valoresdigitais.com" target="_blank" rel="noopener noreferrer">academia-lendasv2.valoresdigitais.com</a>) e serviços relacionados.
            </p>

            <h2>2. Coleta de Dados</h2>
            <p>
                Coletamos informações pessoais apenas quando necessário, e sempre em conformidade com a LGPD (Lei Geral de Proteção de Dados Pessoais - Lei nº 13.709/2018).
                Os tipos de dados coletados podem incluir:
            </p>
            <ul>
                <li>Dados de identificação (nome, e-mail, telefone);</li>
                <li>Dados de pagamento (limitados e armazenados de forma segura por nossos parceiros de checkout);</li>
                <li>Dados de navegação e cookies para aprimorar sua experiência;</li>
                <li>Informações fornecidas voluntariamente em formulários ou áreas de contato.</li>
            </ul>

            <h2>3. Uso das Informações</h2>
            <p>As informações coletadas podem ser utilizadas para os seguintes fins:</p>
            <ul>
                <li>Processar pagamentos e liberar o acesso à <strong>Comunidade Lendár[IA]</strong> e seus conteúdos;</li>
                <li>Melhorar a experiência dos usuários e otimizar o site e campanhas de marketing;</li>
                <li>Enviar informações sobre atualizações, materiais de estudo, ofertas e suporte ao cliente;</li>
                <li>Cumprir obrigações legais ou regulatórias aplicáveis.</li>
            </ul>

            <h2>4. Compartilhamento de Dados</h2>
            <p>
                Seus dados não serão comercializados. Podemos compartilhar informações apenas com:
            </p>
            <ul>
                <li>Prestadores de serviços confiáveis (como gateways de pagamento e plataformas educacionais);</li>
                <li>Autoridades legais, caso seja exigido por força de lei ou ordem judicial.</li>
            </ul>

            <h2>5. Armazenamento e Proteção</h2>
            <p>
                Adotamos medidas técnicas e administrativas para garantir a segurança das informações, incluindo criptografia, controle de acesso e protocolos de prevenção a vazamentos.
                Os dados são mantidos apenas pelo tempo necessário para cumprir os propósitos descritos nesta política.
            </p>

            <h2>6. Direitos do Titular</h2>
            <p>De acordo com a LGPD, você possui os seguintes direitos:</p>
            <ul>
                <li>Acessar seus dados pessoais;</li>
                <li>Corrigir informações incorretas, incompletas ou desatualizadas;</li>
                <li>Solicitar exclusão de dados desnecessários ou excessivos;</li>
                <li>Revogar o consentimento para uso de dados, quando aplicável.</li>
            </ul>
            <p>
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail: 
                <a href="mailto:suporte@academialendar.com"> suporte@academialendar.com</a>.
            </p>

            <h2>7. Cookies e Tecnologias de Rastreamento</h2>
            <p>
                Utilizamos cookies e tecnologias similares para melhorar o desempenho do site, analisar o comportamento dos usuários e personalizar conteúdos e ofertas.
                Você pode optar por desativar os cookies no seu navegador, mas isso pode afetar algumas funcionalidades do site.
            </p>

            <h2>8. Política de Comunicação</h2>
            <p>
                Ao se inscrever na <strong>Academia Lendár[IA]</strong>, você autoriza o envio de e-mails transacionais e informativos.
                Você pode cancelar o recebimento a qualquer momento através do link “descadastrar” presente nas mensagens enviadas.
            </p>

            <h2>9. Alterações nesta Política</h2>
            <p>
                Esta Política de Privacidade poderá ser atualizada periodicamente. Recomendamos a revisão frequente desta página 
                para se manter informado sobre como protegemos suas informações.
            </p>

            <h2>10. Contato</h2>
            <p>
                Caso tenha dúvidas, sugestões ou solicitações relacionadas à privacidade, entre em contato com o nosso 
                canal de suporte via e-mail: <a href="mailto:suporte@academialendar.com">suporte@academialendar.com</a>.
            </p>

            <p className="mt-8 text-sm text-neutral-500">
                © {new Date().getFullYear()} Academia Lendár[IA]. Todos os direitos reservados.
            </p>
        </LegalPageLayout>
    );
};

export default PrivacyPage;
