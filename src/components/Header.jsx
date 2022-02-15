import React from 'react'
import Foto from '../image/foto.png'
import Pdf from '../image/cv-actualizado.pdf'

const Header = () => {
  return (
    < div class="header">
      <img src={Foto} alt="picture"/>
        <div class="nombre_rol">
          <div class="nombre">HULMAR ZAMI TULANDE ANTE</div>          
          <div class="rol">DESARROLLADOR FRONT-END</div>
          <div class="descarga"> <a class="a_link" download={Pdf} href={Pdf}>descargar pdf</a></div>
        </div>
    </div>
  )
}

export default Header