import React from "react";
import Habilidad from "./Habilidad";

const Header = () => {
  return (
    <div class="header">
      <div class="name_role">
        <div class="name">HULMAR ZAMI TULANDE </div>
        <div class="role">DESARROLLADOR FRONT-END</div>
        <div class="git">   
        <a class="enlace" href="/src/image/cv-actualizado.pdf" download>Descargar 
        <i class="fas fa-file-pdf" aria-hidden="true"></i>
        </a>     
        <a class="enlace" href="https://github.com/zamitulande?tab=repositories">Ir a GitHub 
        <i class="fab fa-github"  aria-hidden="true"></i>
        </a>
        </div>
        
      </div>
      <div class="about">
        Tecnólogo en Análisis y desarrollo de Sistemas de Información del
        servicio Nacional de Aprendizaje SENA, me caracterizan cualidades como
        responsabilidad, iniciativa y puntualidad, capaz de asumir retos y metas
        que se me plantee respecto a mi profesión, capacidad de trabajo en
        equipo, así como también dedicación y esfuerzo para cumplir con los
        objetivos trazados.
      </div>
      <Habilidad />
    </div>
  );
};

export default Header;
