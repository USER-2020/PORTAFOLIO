import React from 'react'
import { IconFolder, IconBrandGithub, IconWorld } from "@tabler/icons";
import Image from "next/image";

const teamWork = [

  {
    id: 1,
    person_name: "Alejandro Salazar",
    person_description:
      "Un experto sobresaliente en el universo del desarrollo frontend, con una trayectoria de éxito que habla por sí misma. Su dedicación incansable, creatividad inagotable y compromiso con la excelencia son motores clave detrás de su liderazgo en proyectos digitales de alto nivel.",
    proyecto_url_github:
      "https://github.com/johnses8/To-doapps/tree/main/app-to-do",
    proyecto_url_web: "https://jade-croquembouche-c4a60f.netlify.app/",
    person_tecnologias: [
      {
        id: 1,
        tecnologia: "HTML & CSS",
      },
      {
        id: 2,
        tecnologia: "JavaScript",
      },
      {
        id: 3,
        tecnologia: "ReactJS",
      },
      {
        id: 4,
        tecnologia: "Angular",
      },
    ],
  },

  {
    id: 2,
    person_name: "Sebastian Gallego",
    person_description:
      "Un maestro en el diseño de renders y la creación de material visual, con una carrera sobresaliente que se refleja en su portafolio impresionante. Su destreza para dar vida a la visión, su meticulosidad en cada detalle y su experiencia en diseño UI/UX para mejorar la experiencia del usuario lo sitúan como un líder indiscutible en proyectos visuales de alto calibre.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/react-basics/tree/main/calculadora",
    proyecto_url_web: "https://graceful-taffy-84e9b7.netlify.app/",
    person_tecnologias: [
      {
        id: 1,
        tecnologia: "AutoCad",
      },
      {
        id: 2,
        tecnologia: "SketchUp",
      },
      {
        id: 3,
        tecnologia: "Vray",
      },
      {
        id: 3,
        tecnologia: "Adobe Photoshop",
      },
    ],
  },
  {
    id: 3,
    person_name: "Juan Zuluaga",
    person_description:
      "Un maestro en desarrollo backend de élite, construyendo las bases invisibles pero sólidas del mundo digital. Su experiencia en la gestión de datos, seguridad y escalabilidad, combinada con una trayectoria de éxito en la implementación de sistemas eficientes, lo convierte en un pilar fundamental en el desarrollo de aplicaciones y plataformas web.",
    proyecto_url_github:
      "https://github.com/johnses8/To-doapps/tree/main/contador-de-clicks",
    proyecto_url_web: "https://gleaming-sawine-355a2c.netlify.app/",
    person_tecnologias: [
      {
        id: 1,
        tecnologia: "JAVA",
      },
      {
        id: 2,
        tecnologia: "JavaScript & Node.js",
      },
      {
        id: 3,
        tecnologia: "PHP",
      },
      {
        id: 3,
        tecnologia: "Python",
      },
      
    ],
  },
];

export const NuestroGrupodeTrabajo = () => {
  return (
    <section id="misProyectos" className="u-center">
      <div className="w-full flex flex-col justify-center pt-4 items-center border-t-2 border-[var(--bg-hover)]">
        <h1 className="text-4xl font-bold">Nuestro grupo de trabajo</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg">
          {teamWork.map((project, index) => (
            <div
              key={project.id}
              className="border mt-5 rounded-lg border-[var(--hover-nav)] shadow-2xl shadow-[var(--nav-shadow)] p-5 hover:backdrop-filter backdrop-blur-lg hover:bg-[var(--bg-hover)] hover:bg-opacity-10 transition-all ease-in-out hover:border-[var(--bg-hover)] cursor-pointer"
            >
              <div className="text-center">
                <Image
                  src={`/WOrkGroup/personaje-${project.id}.png`}
                  alt={project.person_name}
                  className="rounded-full w-32 h-32 mx-auto"
                  priority
                  width={128}
                  height={128}
                />
              </div>

              <h1 className="text-3xl font-bold mt-4 text-center">
                {project.person_name}
              </h1>
              <p className="text-lg mt-3">{project.person_description}</p>
              <div className="flex flex-row justify-center items-center mt-4 gap-4 font-bold flex-wrap">
                {project.person_tecnologias.map((tecnologia) => (
                  <div
                    key={tecnologia.id}
                    className="bg-[var(--bg-buttons)] text-white rounded-lg px-3 py-1"
                  >
                    {tecnologia.tecnologia}
                  </div>
                ))}
              </div>

              {/* Otro contenido que puedas querer incluir debajo de la imagen y el título */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
