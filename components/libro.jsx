

function RandomLibro({ libros }) {
  let azar = Math.round( Math.random() * (libros.length - 1));
  return (
    <div>
      {libros[azar].titulo}
      <br />
      {libros[azar].imagen}
      <br />
      {libros[azar].nota}
    </div>
  );
}

export default function Libro({ libros }) {
  return (
    <div className="ls">
      <RandomLibro libros={libros} />
    </div>
  );
}