import { IconBrandGithub, IconWorld } from "@tabler/icons";
import Image from "next/image";

const projectsInfo = [
  {
    id: 1,
    proyecto_title: "E-COMMERCE ATTIENDA",
    proyecto_description:
      "Permite hacer compras en el comercio electrónico ATTIENDA con su respectiva pasarela de pagos y su admin panel para el manejo amigable de tus productos y clientes, actualmente es un comercio 100% Colombiano.",
    proyecto_url_web: "https://attienda.com.co",
    proyecto_url_github:"https://github.com/USER-2020",
    proyecto_tecnologias: [
      "Laravel",
      "PHP",
      "Wompi",
      "FullStack",
      "Diseño UX",
      "Diseño UI",
      "MySQL"
    ],
  },
  {
    id: 2,
    proyecto_title: "Atraverssiamo Glamping",
    proyecto_description:
      "Atraverssiamo es más que un simple destino; es un desarrollo web cuidadosamente diseñado para ofrecerte una experiencia única en medio de la naturaleza colombiana. Captura la identidad digital del glamping en el Eje Cafetero.",
    proyecto_url_github:
      "https://github.com/USER-2020",
    proyecto_url_web: "https://attraversiamoglamping.netlify.app",
    proyecto_tecnologias: [
      "React",
      "Redux",
      "Html",
      "CSS",
      "TypeScript"
    ],
  },
  {
    id: 3,
    proyecto_title: "METALFORM",
    proyecto_description:
      "Desarrollamos una Landing Page que conecta a los pioneros en el manejo del metal en la ciudad de Manizales, ampliando su identidad digital, atrayendo a más clientes y destacando sus servicios.",
    proyecto_url_github:
      "https://github.com/USER-2020",
    proyecto_url_web: "https://metalform.netlify.app",
    proyecto_tecnologias: ["Html", "JavaScript", "CSS"],
  },
  {
    
    id: 4,
    proyecto_title: "TRABAJO PERSONAL",
    proyecto_description:
      "Un álbum descriptivo en el que los nombres, las fechas de cumpleaños y las canciones favoritas de un grupo de amigos se entrelazan en una crónica emocional. Esta obra captura los momentos inolvidables, revela las conexiones especiales y celebra la singularidad de cada individuo en este círculo de amistad.",
    proyecto_url_github:
      "https://github.com/USER-2020",
    proyecto_url_web: "https://friendssforever.netlify.app",
    proyecto_tecnologias: ["Html", "TypeScript", "JavaScript", "Swiper"],
  },
  // {
  //   id: 5,
  //   proyecto_title: "PORTAFOLIO",
  //   proyecto_description:"Portafolio de renderismo y diseño arquitectónico",
  //   proyecto_url_github:"#",
  //   proyecto_url_web:"https://www.behance.net/gallery/184604497/Portafolio-de-Arquitectura-Renderista",
  //   proyecto_tecnologias:["Photoshop","Ilustrator"],
  // }
];

export const ProjectCard = () => {
  return (
    <section id="projects">
      {projectsInfo.map((project, index) => (
        <div
          key={project.id}
          className="flex flex-col items-center mt-10 justify-center border-2 border-[var(--bg-hover)]
          rounded-lg shadow-lg md:flex-row md:border-none md:shadow-none md:relative md:h-96"
        >
          
          <Image
            src={`/images/project-${project.id}.png`}
            alt={project.proyecto_title}
            className={`rounded-t md:w-3/5 w-auto object-cover md:absolute ${
              index % 2 === 0 ? "md:right-0" : "md:left-0"
            }  md:rounded`}
            priority
            width={1000}
            height={1000}
          />
          <div
            className={`flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full ${
              index % 2 === 0
                ? "md:items-start md:text-start"
                : "md:items-end md:text-end"
            } last:border-red-500`}
          >
            <h1
              className={`text-3xl font-bold text-start md:w-2/5 md:text-4xl ${
                index % 2 === 0 ? "md:text-start" : "md:text-end"
              } 
            `}
            >
              {project.proyecto_title}
            </h1>
            <p
              className={`p-4 md:bg-[var(--bg-buttons)] md:rounded-lg md:text-lg md:w-1/2 md:mt-3 font-bold md:text-white md:shadow-xl md:shadow-[var(--nav-shadow)] 
             ${index % 2 === 0 ? "md:text-start" : "md:text-end"} 
            
            `}
            >
              {project.proyecto_description}
            </p>
            <ul
              className={`flex flex-wrap gap-2 mt-3 md:w-2/5 md:mt-3 justify-center p-2
            ${index % 2 === 0 ? "md:justify-start md:pl-0" : "md:justify-end md:pr-0"}
            `}
            >
              {project.proyecto_tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="bg-gray-500 p-1 rounded font-bold text-white text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div
              className={`flex justify-center gap-5 pt-4  md:w-2/5  mb-5 md:mb-0
            ${
              index % 2 === 0
                ? "md:justify-start md:pr-5"
                : "md:justify-end md:pl-5"
            }
            `}
            >
              <a
                href={project.proyecto_url_github}
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <IconBrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
              <a
                href={project.proyecto_url_web}
                target="_blank"
                rel="noreferrer"
                aria-label="web"
              >
                <IconWorld className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectCard;
