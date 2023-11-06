import './App.css';
import imagenlogo from './imagenes/img1.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  

  const [numClics, setNumClics] = useState(0) ;

  const manejearClick= () => {
    setNumClics(numClics +1);

  }

  const reiniciarContador= () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div  className='contenedor__logo'>
        <img
        className='logo__img'
        src={imagenlogo}
        />
      </div>
      
      <div className='contenedor__principal'>
        <Contador 
          numClics={numClics} />

        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manjearClic={manejearClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manjearClic={reiniciarContador} />



      </div>
    </div>
  );
}


export default App;
