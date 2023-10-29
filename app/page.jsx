"use client";
import { ThemeProvider } from "next-themes";
import {
  Header,
  PanelHero,
  AboutMe,
  Footer,
  ContactMeLayout,
  ProjectsLayout,
  ButtonToTop,
  NuestroGrupodeTrabajo
} from "./components";


export default function HomePage() {
  return (
    <ThemeProvider>
      <Header />
      <PanelHero />
      <AboutMe />
      <NuestroGrupodeTrabajo/>
      <ProjectsLayout />
      <ContactMeLayout />
      <Footer />
      <ButtonToTop />
      <section className="stars_container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
    </ThemeProvider>
  );
}
