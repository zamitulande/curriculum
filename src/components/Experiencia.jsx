import React from "react";

const Experiencia = () => {
  return (
    <div class="exp">
      <div class="title">experiencia</div>
      <div class="exp_wrap">
        <ul>
          <li>
            <div class="li_wrap">
              <div class="date">2017 - 2019</div>
              <div class="info">
                <p class="info_title">Desarrolador - Etapa Porductiva</p>
                <p class="info_com">Servicio Nacional de Aprendizaje SENA</p>
                <p class="info_cont">
                  Implementación de página web para Egresados SENA, lenguaje de programación utilizado Java, otras herramientas:
                  Base de Datos MySQL, página en la que el SENA puede gestionar todos los aprendices que se registren en la BD 
                  para hacer seguimiento una vez estos terminen su etapa teórica y productiva.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="li_wrap">
              <div class="date">Julio - 2018</div>
              <div class="info">
                <p class="info_title">Diplomado Competencias TIC</p>
                <p class="info_com">Corporación Unificada Nacional de Educación Superior y Colnodo</p>
                <p class="info_cont">
                 Diseño web usable y accesible, implementación de sitio web utilizando las tecnologías HTML y CSS,
                 basado en un proyecto de venta de artículos de cocina.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="li_wrap">
              <div class="date">Enero - 2022</div>
              <div class="info">
                <p class="info_title">DISEÑO CURRICULUM VITAE</p>
                <p class="info_com">Autodidacta</p>
                <p class="info_cont">
                 Diseño de sitio web con información personal para poner en practica mis conociemintos,
                 utilizando las herramientas tecnologías de HTML, CSS y la herramienta de compilación de frontend REACT VITE.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiencia;
