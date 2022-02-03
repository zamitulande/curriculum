import Contacto from "./components/Contacto";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import Habilidad from "./components/Habilidad";
import Header from "./components/Header";
import Imagen from "./components/Imagen";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <div class="wrapper">
      <div class="resume">
        <div class="left">
          <Imagen/>
          <Contacto />
          <Habilidad />
          <Proyectos />
        </div>
        <div class="right">
          <Header />
          <div class="right_inner">
            <Experiencia />
            <Educacion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
