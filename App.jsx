import './App.css';
import Frase from './components/frase';
import Libro from './components/libro';

// -------------------------------------------------------
// "BASES DE DATOS"
const frases = [
  'Primera frase',
  'Segunda frase',
  'Tercera frase',
  'Cuarta frase',
  'Quinta frase',
  'Sexta frase',
];

const libros = [
  {
    titulo: 'Libro 1',
    imagen: './img/imagen1.jpg',
    nota: 'nota 1'
  },
  {
    titulo: 'Libro 2',
    imagen: './img/imagen2.jpg',
    nota: 'nota 2'
  },
  {
    titulo: 'Libro 3',
    imagen: './img/imagen3.jpg',
    nota: 'nota 3'
  },
  {
    titulo: 'Libro 4',
    imagen: './img/imagen4.jpg',
    nota: 'nota 4'
  },
  {
    titulo: 'Libro 5',
    imagen: './img/imagen5.jpg',
    nota: 'nota 5'
  },
  {
    titulo: 'Libro 6',
    imagen: './img/imagen6.jpg',
    nota: 'nota 6'
  }
];

const cuentos = [
  {
    imagen: './ruta/imagen.jpg',
    liga: 'https://.....'
  },
  {
    imagen: './ruta/imagen.jpg',
    liga: 'https://.....'
  },
  {
    imagen: './ruta/imagen.jpg',
    liga: 'https://.....'
  }
];

// -------------------------------------------------------

function App() {

  return (
    <div id='master-wrap' className="master-wrap">
      <div className="grid-encabezado">
        <div className="yo">
          Yo {'[foto]'}
        </div>
        <div className="encabezado">
          Encabezado
        </div>
      </div>

      <div className="grid-4columnas">
        <div className="grid-ls">
          <Libro libros={libros} />
          <Libro libros={libros} />
          <Libro libros={libros} />
        </div>

        <div className="grid-cs">
          <div className="cs">
            C1
          </div>
          <div className="cs">
            C2
          </div>
        </div>

        <div className="grid-fc">
          <Frase frases={frases}/>
          <div className="cs">
            C3        
          </div>
          <div className="cs">
            C4        
          </div>
          <Frase frases={frases}/>
        </div>

        <div className="grid-vs">
          <div className="vs">
            V1
          </div>
          <div className="vs">
            V2
          </div>
          <div className="vs">
            V3
          </div>
        </div>
      </div>

      <div className="cintillo">
        Cintillo
      </div>

    </div>
  );
}

export default App;
