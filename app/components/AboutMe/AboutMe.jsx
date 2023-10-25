import { IconClick, IconSchool, IconBriefcase } from "@tabler/icons";
import { useState } from "react";
import { TimeLine } from "./TimeLine";

export const AboutMe = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [activeEducation, setActiveEducation] = useState(false);
  const [activeWork, setActiveWork] = useState(true);
  return (
    <section className="u-center w-full" id="sobreMi">
      <div className="w-full flex flex-col justify-center items-center border-t-2 border-[var(--bg-hover)]">
        <h1 className="text-4xl font-bold pt-4">Sobre nosotros</h1>
        <span className="text-base text-[var(--text-secondary)]">
          Quienes somos
        </span>
      </div>
      <div>
        <p className="mt-5 text-xl text-start">
          <span className="font-bold">Software Developer, Design UX/UI, Render</span>Somos un equipo profundamente apasionado por el desarrollo full-stack, abarcando todas las dimensiones del ciclo de vida de un proyecto digital. Nos dedicamos al diseño UI/UX y a la implementación de soluciones tecnológicas de principio a fin. Nos encanta crear sitios web y aplicaciones que ofrezcan experiencias excepcionales y gratificantes para los usuarios. Te invitamos a explorar algunos de nuestros proyectos en la sección{" "}
          <a className="font-bold inline-flex" href="#misProyectos">
            proyectos.
            <IconClick />
          </a>
          <p>
            Somos un equipo de profesionales altamente estudiosos, autodidactas, responsables y comprometidos con nuestro trabajo. Nuestra dedicación a la excelencia y la mejora continua es un pilar fundamental en nuestro enfoque.
          </p>
          <p>
            Cada miembro de nuestro equipo se esfuerza constantemente por aprender nuevas tecnologías y herramientas, con el objetivo de perfeccionar nuestras habilidades y brindar una calidad excepcional en todos nuestros proyectos.
          </p>
          <p>
            Con una amplia experiencia en el desarrollo full-stack y el diseño UI/UX, hemos participado en diversos proyectos que abarcan desde soluciones empresariales hasta experiencias de usuario excepcionales en el ámbito del diseño. Nuestro enfoque integral nos permite abordar los desafíos desde múltiples perspectivas y entregar soluciones eficientes y atractivas.
          </p>
          <p>
            Si tienes alguna pregunta o comentario, no dudes en{" "}
            <a className="font-bold inline-flex" href="#contactame">
              contactarnos.
              <IconClick />
            </a> Estamos aquí para colaborar en la realización de tus proyectos.
          </p>
          </p>
          <div className="mt-10">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold">Nuestra trayectoria.</h1>
              <span className="text-base text-[var(--text-secondary)]">
                Educación y trabajo
              </span>
            </div>
            <div className="flex flex-wrap  items-center justify-center mt-10 mb-10 gap-5">
              <button
                onClick={() => {
                  setShowEducation(false);
                  setActiveEducation(false);
                  setActiveWork(true);
                }}
                className={`flex gap-2 font-bold text-lg md:text-2xl items-center hover:text-[var(--bg-buttons)] w-fit justify-center ${activeWork ? "border-b-2 border-[var(--bg-buttons)]" : ""
                  }`}
              >
                <IconBriefcase className="h-10 w-10" />
                Trabajo
                <IconClick />
              </button>
              <button
                onClick={() => {
                  setShowEducation(true);
                  setActiveEducation(true);
                  setActiveWork(false);
                }}
                className={`flex gap-2 font-bold text-lg md:text-2xl items-center hover:text-[var(--bg-buttons)] w-fit justify-center ${activeEducation ? "border-b-2 border-[var(--bg-buttons)]" : ""
                  }`}
              >
                <IconSchool className="h-10 w-10" />
                Educación <IconClick />
              </button>

            </div>
            <TimeLine showEducation={showEducation} />
          </div>
      </div>
    </section>
  );
};
