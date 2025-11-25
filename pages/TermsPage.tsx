
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


const TermsPage: React.FC = () => {
    return (
        <LegalPageLayout title="Termos de Uso — Academia Lendár[IA]" lastUpdated="15 de Novembro de 2024">
            <h2>1. Aceitação dos Termos</h2>
            <p>
                Ao acessar este site (<strong>academia-lendasv2.valoresdigitais.com</strong>) e adquirir o acesso vitalício à Comunidade Lendár[IA],
                você concorda plenamente com os presentes Termos de Uso. Caso não concorde com alguma das condições, recomendamos que não prossiga
                com a navegação ou contratação.
            </p>

            <h2>2. Objeto</h2>
            <p>
                Estes Termos regulam o uso da plataforma da Academia Lendár[IA], que disponibiliza acesso a cursos, comunidade, mentorias e conteúdos
                relacionados à aplicação de Inteligência Artificial em negócios, conforme descrito na página oficial da oferta.
            </p>

            <h2>3. Cadastro e Acesso</h2>
            <p>
                Para usufruir dos conteúdos, o usuário deve efetuar o cadastro na plataforma utilizando informações verídicas e manter seus dados
                sempre atualizados. É de responsabilidade do usuário a guarda segura de seu login e senha.
            </p>

            <h2>4. Acesso Vitalício e Disponibilidade</h2>
            <p>
                “Acesso vitalício” refere-se ao período de existência e operação da plataforma mantida pela Academia Lendár[IA]. A empresa garante,
                no mínimo, acesso por 5 (cinco) anos a partir da data da compra, com a prerrogativa de aprimorar e atualizar conteúdos conforme
                evolução tecnológica e acadêmica do tema.
            </p>

            <h2>5. Direitos Autorais e Propriedade Intelectual</h2>
            <p>
                Todos os conteúdos, vídeos, textos, gráficos e materiais disponibilizados são de propriedade da Academia Lendár[IA] e não podem ser
                copiados, reproduzidos, distribuídos ou revendidos sem autorização expressa do titular dos direitos.
            </p>

            <h2>6. Política de Pagamento e Garantia</h2>
            <p>
                O pagamento dos planos segue os valores e condições descritas no site, podendo ocorrer ajustes durante campanhas promocionais,
                como a Black Friday Lendária. A Academia Lendár[IA] garante o reembolso integral no prazo de 7 dias após a compra, de acordo com o
                Código de Defesa do Consumidor.
            </p>

            <h2>7. Conduta do Usuário</h2>
            <p>
                É proibido o compartilhamento indevido de acesso, a divulgação de conteúdo interno para pessoas não inscritas, ou a prática de
                comportamentos que violem a ética e o respeito na comunidade. A equipe se reserva o direito de suspender ou encerrar o acesso em
                casos de infração.
            </p>

            <h2>8. Modificações e Atualizações dos Termos</h2>
            <p>
                A Academia Lendár[IA] poderá modificar os presentes Termos de Uso a qualquer momento, publicando a nova versão neste mesmo endereço.
                Recomenda-se a revisão periódica destes Termos.
            </p>

            <h2>9. Limitação de Responsabilidade</h2>
            <p>
                A Academia Lendár[IA] não se responsabiliza por prejuízos indiretos ou perda de lucros decorrentes do uso da plataforma. O conteúdo
                oferecido é de natureza educacional, cabendo ao aluno aplicar as estratégias e conhecimentos adquiridos de forma responsável.
            </p>

            <h2>10. Comunicações e Suporte</h2>
            <p>
                Para dúvidas, solicitações de suporte ou esclarecimentos, o usuário pode entrar em contato através dos canais oficiais informados no
                site ou no e-mail de atendimento enviado após a compra.
            </p>

            <h2>11. Foro e Legislação Aplicável</h2>
            <p>
                Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de Porto Alegre/RS como competente para dirimir
                quaisquer controvérsias decorrentes deste documento.
            </p>

            <p className="mt-8">
                Ao prosseguir com a compra, o usuário declara que leu, compreendeu e aceita integralmente os Termos de Uso e a Política de Privacidade
                da <strong>Academia Lendár[IA]</strong>.
            </p>
        </LegalPageLayout>
    );
};

export default TermsPage;
