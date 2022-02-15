import React from 'react'
import Foto from '../image/foto.png'

const Header = () => {
  return (
    < div class="header">
      <img src={Foto} alt="picture"/>
        <div class="nombre_rol">
          <div class="nombre">HULMAR ZAMI TULANDE ANTE</div>          
          <div class="rol">DESARROLLADOR FRONT-END</div>
        </div>
    </div>
  )
}

export default Header