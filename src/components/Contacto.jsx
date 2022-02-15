import Habilidad from './Habilidad'
import React from 'react'

const Contacto = () => {
  return (
  <div className="contenedor_contacto">
    <div class="contacto">
      
        <div class="titulo">Contacto</div>
        <div class="info">
        <ul>
         <li>        
            <div class="li_info">
            <div class="icono">
            <i class="fa-brands fa-whatsapp"></i>
              </div>
              <div class="texto">+ 57 3177250502<button> <a href="https://wa.link/fiezyc">Hablar</a></button></div>
            </div>
          </li>
          <li>
            <div class="li_info">
              <div class="icono">
              <i class="fa-brands fa-github"></i>
              </div>
              <div class="texto"> Repositorio GitHub<button> <a href="https://github.com/zamitulande">Ir</a></button></div>
               
            </div>
          </li>
          <li>
            <div class="li_info">
              <div class="icono">
              <i class="fa-solid fa-at"></i> 
              </div>
              <div class="texto">hulmartulande@gmail.com</div>
               
            </div>
          </li>
          <li>
            <div class="li_info">
              <div class="icono">
              
              <i class="fa-solid fa-earth-americas"></i>  
              </div>
              <div class="texto">Popayán - Colombia</div>
            </div>
          </li>
          <li>
            <div class="li_info">
              <div class="icono">
              <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="texto">Cll 72 N #5EE-22</div>
            </div>
          </li>
          </ul>
        </div>
        
    </div>
    <Habilidad/>
    </div>
    
    
  )
}

export default Contacto