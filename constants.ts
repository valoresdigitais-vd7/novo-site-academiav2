import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Planos', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Acesso Vitalício - Público Geral',
    price: '12x de R$138,80 ou R$1388 à vista',
    features: [
      'Acesso vitalício à Comunidade Lendár[IA]',
      'Mais de 25 cursos completos sobre IA, negócios e mentalidade',
      'E-books estratégicos de IA incluídos',
      'Bônus físicos para os primeiros compradores',
      '7 dias de garantia incondicional'
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Acesso Vitalício - Desconto para Alunos',
    price: '12x de R$98,80 ou R$988 à vista',
    features: [
      'Todas as vantagens do plano geral',
      '25% de desconto exclusivo para alunos',
      'Acesso permanente e atualizações constantes',
      'Suporte prioritário dentro da Comunidade Lendár[IA]'
    ],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'A Comunidade Lendár[IA] mudou completamente minha visão sobre negócios e inteligência artificial. Hoje aplico IA em todos os meus processos.',
    author: 'Felipe Andrade',
    role: 'Empreendedor e Aluno Lendár[IA]',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote: 'Com as aulas e a comunidade, consegui automatizar minha operação e escalar meu faturamento. A energia dentro da comunidade é surreal!',
    author: 'Mariana Ribeiro',
    role: 'Profissional de Marketing Digital',
    avatarUrl: 'https://picsum.photos/id/1006/100/100',
  },
  {
    quote: 'Nunca vi um conteúdo tão completo sobre IA aplicada a negócios. Vale cada centavo do investimento.',
    author: 'Lucas Fernandes',
    role: 'Consultor em Transformação Digital',
    avatarUrl: 'https://picsum.photos/id/1008/100/100',
  }
];

export const FAQ_DATA = [
  {
    question: 'Já comprei outros cursos e não assisti. Por que aqui seria diferente?',
    answer: 'A Comunidade Lendár[IA] não é apenas um curso. É um ecossistema com mentorias, desafios e uma comunidade ativa que garante acompanhamento e resultados.'
  },
  {
    question: 'É muito conteúdo. Vou ficar perdido?',
    answer: 'O conteúdo é estruturado com trilhas de aprendizado e suporte, permitindo que você siga no seu ritmo sem se perder.'
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Você pode pagar via cartão de crédito em até 12x ou à vista via Pix ou boleto bancário.'
  },
  {
    question: 'Funciona no celular?',
    answer: 'Sim! Todo o conteúdo pode ser acessado via celular, tablet ou computador.'
  },
  {
    question: 'Tenho garantia?',
    answer: 'Sim. Você tem 7 dias de garantia incondicional. Caso não se sinta satisfeito, reembolsamos 100% do valor.'
  },
  {
    question: 'Por onde chega o acesso?',
    answer: 'Assim que o pagamento for confirmado, você receberá um e-mail com o acesso imediato à plataforma.'
  },
  {
    question: 'Já sou aluno, tenho benefício?',
    answer: 'Sim! Alunos têm desconto especial de 25% na oferta vitalícia.'
  }
];

export const FOOTER_LINKS = {
  company: {
    name: 'Academia Lendár[IA]',
    description: 'Transformando carreiras e negócios com Inteligência Artificial aplicada desde 2019.',
  },
  support: [
    { name: 'suporte@academialendaria.com', href: 'mailto:suporte@academialendaria.com' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-uso' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
  ],
  enterprise: [
    { name: 'Sobre o Fundador', href: '#founder' },
    { name: 'Contato', href: '/contato' },
  ],
};
