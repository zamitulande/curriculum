import React from 'react'

const Cuerpo = () => {
  return (
    <div class="cuerpo">
        
        <div class="resumen">
            <p>Tecnólogo en Análisis y desarrollo de Sistemas de Información del
        servicio Nacional de Aprendizaje SENA, me caracterizan cualidades como
        responsabilidad, iniciativa y puntualidad, capaz de asumir retos y metas
        que se me plantee respecto a mi profesión, capacidad de trabajo en
        equipo, así como también dedicación y esfuerzo para cumplir con los
        objetivos trazados.</p>
        </div>
        <div class="contenedor_proyectos">
           <div class="titulo">P r o y e c t o s</div> 
            <div class="proyectos">
            <ul class="list_p">
    
          <li>
            <div class="icono_p">
              <a class='a_p' href="https://amazing-kilby-ac0e3e.netlify.app/">
              <i class="fa-solid fa-hotel"></i>
              </a>
            
            </div>
          </li>
          <li>
            <div class="icono_p">
              <a class='a_p' href="https://app.netlify.com/sites/awesome-almeida-e5cefd/overview">
              <i class="fa-solid fa-car-crash"></i>
              </a>
            
            </div>
          </li>
          <li>
            <div class="icono_p">
              <a class='a_p' href="https://app.netlify.com/sites/elegant-dubinsky-ce2793/overview">
              <i class="fa-solid fa-cloud-moon-rain"></i>
              </a>
            
            </div>
          </li>
        </ul>
      </div>
            </div>
        </div>
  
  )
}

export default Cuerpo