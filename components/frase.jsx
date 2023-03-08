

function RandomFrase({ frases }) {
  let azar = Math.round( Math.random() * (frases.length - 1));
  return (
    <div>{frases[azar]} </div>
  );
}

export default function Frase({ frases }) {
  return (
    <div className="fs">
      <div className="titulo" >
        Frase
      </div>
      <RandomFrase frases={frases} />
    </div>
  );
}