import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ana",
  lastName: "Sofia",
  name: `Ana Sofia`,
  // ?? Não tenho a certeza do role que usar, to do: corrigir se necessario.
  role: "Designer Multimédia e Comunicação Digital",
  avatar: "/images/avatar.jpg",
  // EMail ???
  email: "anasofia.inet@gmail.com",
  location: "Europe/Lisbon", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "Inglês"], // optional: Leave the array empty if you don't want to display languages
  // Informações adicionais
  morada: "Guarda",
};

// To Do: Configurar a Newsletter
const newsletter: Newsletter = {
  display: false,
  title: <>Subscreva a Newsletter de {person.firstName}</>,
  description: <>A minha newsletter semanal sobre criatividade e ilustração e design</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Portefólio da ${person.name}`,
  description: `Website de portefólio a exibir o meu trabalho como ${person.role}`,
  headline: <>Vivamus, moriendum est.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Projetos em Destaque
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Sou a Ana Sofia, estudante de design multimendia no 
      <br/>Instituto Politécnico da Guarda. {" "}
      <Logo
        dark
        icon="/images/ipglogo.png"
        style={{ display: "inline-flex", top: "0.10em", marginLeft: "-0.25em" }}
      />
      <br/> No meu tempo livre, dedico-me aos meus projetos pessoais.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Estudante de Design e Multimédia no IPG, Ana Sofia é movida pela 
        arte e pelo ritmo da música. Especializada em interfaces e 
        experiências digitais intuitivas, transforma ideias em soluções visuais elegantes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        //  
        company: "AINDA NÂO SEI",
        timeframe: "2025 - Presente",
        role: "Estagiaria",
        achievements: [
          <>
            Realizei um estágio onde desenvolvi e aprofundei as minhas 
            competências técnicas e profissionais, aplicando conhecimentos 
            adquiridos em contexto real de trabalho.
          </>,
        ]
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Estudos",
    institutions: [
      {
        name: "Comunicação Multimédia",
        description: <>Estudei Comunicação Multimédia no Instituto Politécnico da Guarda, 
        desenvolvendo competências nas áreas da comunicação digital, design, audiovisual e 
        tecnologias interativas, com foco na criação e gestão de conteúdos multimédia.
        <br/> <br/> 2023 - 2025</>,
        image: [
          {
            src: "/images/trademarks/FotoDoIPG.png",
            alt: "Project image",
            width: 16,
            height: 9,
          }
        ],
      },
      // Adicionar mais se necessario
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Competências técnicas",
    skills: [
      {
        title: "Programação Web (HTML, CSS, JavaScript)",
        description: (
          <>Capaz de desenvolver interfaces web funcionais e responsivas, aplicando boas práticas de estrutura, estilo e interatividade.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        /*images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],*/
      },
      {
        title: "Edição de vídeo e imagem",
        description: (
          <>Experiente na criação e otimização de conteúdos visuais, com atenção ao detalhe, ritmo e coerência estética.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Design de interfaces e experiência do utilizador (UI/UX)",
        description: (
          <>Competente na conceção de interfaces intuitivas e agradáveis, centradas na usabilidade e na experiência do utilizador.</>
        ),
        tags: [],
        images: [],
      }, 
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre design e tecnologia...",
  description: `Leia o que ${person.name} tem feito recentemente`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projectos",
  title: `Projectos – ${person.name}`,
  description: `Projetos de design por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Photo gallery – ${person.name}`,
  description: `Uma coleção de fotos de ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/artWork1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artWork2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artWork3.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artWork4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artWork5.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artWork6.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artWork7.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artWork8.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
