import React from "react";

const Contacto = () => {
  return (
    <div class="contact_wrap pb">
      <div class="title">Contacto</div>
      <div class="contact">
        <ul>
          <li>
            <div class="li_wrap">
              <div class="icon">
                <i class="fas fa-mobile-alt" aria-hidden="true"></i>
              </div>
              <div class="text">+57 3177250502</div>
            </div>
          </li>
          <li>
            <div class="li_wrap">
              <div class="icon">
                <i class="fas fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="text">hulmartulande@gmail.com</div>
            </div>
          </li>
          <li>
            <div class="li_wrap">
              <div class="icon">
                <i class="fab fa-github" aria-hidden="true"></i>
              </div>
              <div class="text">
              <a class="text" href="https://github.com/zamitulande?tab=repositories"> Enlace Repositorio GitHub </a>
               </div>
            </div>
          </li>
          <li>
            <div class="li_wrap">
              <div class="icon">
                <i class="fas fa-map-signs" aria-hidden="true"></i>
              </div>
              <div class="text">Cll 72 N #5EE-22</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacto;
