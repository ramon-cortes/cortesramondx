import * as db from './db.js';

function rand(datos) {
  return Math.floor(Math.random() * datos.length);
}

const elementos = [];
for (let i = 0; i < 6; i++) {
  elementos.push({
    a: document.getElementById(`a-${i}`),
    img: document.getElementById(`img-${i}`)
  });  
}

//console.log(db.novelas[1].banner);
//console.log(JSON.stringify(elementos));

let azar = rand(db.novelas);
elementos[1].img.src = db.novelas[azar].banner;
elementos[1].a.href = db.novelas[azar].url;

let id1 = setInterval(() => {
  let azarInterval = rand(db.cuentos);
  elementos[2].img.src = db.cuentos[azarInterval].banner;
  elementos[2].a.href = db.cuentos[azarInterval].url;
}, 2000);

let id2 = setInterval(() => {
  let azarInterval = rand(db.cuentos);
  elementos[0].img.src = db.cuentos[azarInterval].banner;
  elementos[0].a.href = db.cuentos[azarInterval].url;
}, 8000);