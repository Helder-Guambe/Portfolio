export const NAV_LINKS = [
  { label: 'sobre',    href: '#sobre' },
  { label: 'skills',   href: '#skills' },
  { label: 'projetos', href: '#projetos' },
  { label: 'formação', href: '#formacao' },
  { label: 'idiomas',  href: '#idiomas' },
  { label: 'contacto', href: '#contacto' },
]

export const SOCIAL = {
  linkedin: 'https://linkedin.com/in/hélder-james-guambe',
  github:   'https://github.com/Helder-Guambe',
}

export const CONTACT = {
  email:    'helderguambe.hg3@gmail.com',
  phone1:   '+258 846 978 731',
  phone2:   '+258 876 726 552',
  location: 'Maputo, Moçambique',
}

export const STATS = [
  { num: '3+',  label: 'projectos desenvolvidos' },
  { num: '10+', label: 'tecnologias dominadas'   },
  { num: '2002',label: 'nascido em outubro'       },
  { num: 'MZ',  label: 'baseado em Maputo'        },
]

export const SKILLS = [
  {
    category: 'Linguagens',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frameworks & Runtimes',
    items: ['Spring Boot', 'React', 'Node.js', 'NestJS', 'CodeIgniter'],
  },
  {
    category: 'Bases de dados & Cloud',
    items: ['PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    category: 'Ferramentas',
    items: ['Git', 'REST APIs', 'VS Code', 'Autenticação JWT', 'Controlo de Acesso'],
  },
]

export const PROJECTS = [
  {
    id: 1,
    name: 'EduTrack — Sistema Académico',
    desc: 'Plataforma completa de gestão académica com módulos de autenticação, gestão de utilizadores, controlo de acesso e acompanhamento de desempenho.',
    tags: ['React', 'Spring Boot', 'TypeScript', 'PostgreSQL'],
    status: 'em desenvolvimento',
    active: true,
  },
  {
    id: 2,
    name: 'Gestão de Certificados 12ª Classe',
    desc: 'Sistema para gerir e acompanhar o processo de emissão de certificados escolares, com backend em Node.js e sincronização via Firebase.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Firebase'],
    status: 'em desenvolvimento',
    active: true,
  },
  {
    id: 3,
    name: 'Aplicativo de Bloco de Notas',
    desc: 'Aplicação web para criação e gestão de notas pessoais, desenvolvida com o framework CodeIgniter em PHP.',
    tags: ['CodeIgniter', 'PHP'],
    status: 'concluído',
    active: false,
  },
]

export const EXPERIENCE = [
  {
    role:    'Backend Developer & Apoio à Coordenação Técnica',
    company: 'North Digits',
    type:    'Estágio',
    desc:    'Desenvolvimento de APIs REST, implementação de autenticação e controlo de acesso, integração com PostgreSQL, correcção de bugs e colaboração em equipa com Git.',
    tags:    ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Git'],
  },
]

export const EDUCATION = [
  {
    degree: 'Licenciatura em Sistemas e Redes Computacionais',
    school: 'Universidade Wutivi',
    status: 'Em curso',
  },
  {
    degree: 'C Programming For Beginners - Master the C Language',
    school: 'Udemy',
    status: 'Concluído',
    certificateUrl: 'https://www.udemy.com/certificate/UC-3b5a27b6-aed1-49b1-8b06-d2f8f5ac8424/',
  },
]

export const LANGUAGES = [
  { name: 'Português', level: 'Nativo — C2',       pct: 100 },
  { name: 'Inglês',    level: 'Intermediário — B1', pct: 55  },
]
