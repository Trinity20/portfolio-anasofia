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
    link: "https://github.com/Trinity20",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nana-sofia/",
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
      Sou a Ana Sofia, estudante de comunicação multimédia no 
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
        Ana Sofia, estudante de Comunicação Multimédia no Ipg, é 
        movida pela arte, tem especial interesse em experiencias 
        digitais intuitivas e transforma ideias em projetos digitais.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Académica",
    experiences: [
      {
        //  
        company: "Ensino secundário na área de ciências e tecnologias",
        timeframe: "Set.20 - Junho.23",
        role: "Escola básica e secundária de Macedo de Cavaleiros",
        achievements: [
    
        ]
      },
            {
        //  
        company: "Licenciatura em Comunicação Multimédia",
        timeframe: "Set.23 - Presente",
        role: "Instituto Politécnico da Guarda",
        achievements: [
          <>
           Desenvolvi competências nas áreas de Design Gráfico, Desenvolvimento Web,
            Captura, Edição e pós-produção de fotografia/video, animação 2D e 3D 
            e escrita criativa.
          </>,
        ]
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
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
        title: "Fundamentos de:",
        description: (
          <>Web Design: Html, CSS. <br />
Animação: Adobe animate. <br />
Captura e edição de video: DaVinci Resolve. <br />
Captura e edição de audio: Audacity, Adobe Audition. <br />
Captura e edição de imagem: Adobe Photoshoop.</> 
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
        title: "Design Gráfico:",
        description: (
          <>Procreate <br />
Canva <br />
Criação de manuais de identidade e de identidade visual</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "",
        description: (
          <></>
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
