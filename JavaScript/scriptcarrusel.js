/* js carrousel */
let imagenes=[
   { 
    "url": "./imagenes/crasas/aeoniums.jpg",
     "nombre":"Aeonim arboreum sp",
     "descripcion":"Suculenta de crecimiento muy rapido y facil multiplicacion",
   },
   {
    "url": "./imagenes/crasas/mangabe.jpg",
     "nombre":"Mangabe kaleidoscope",
     "descripcion":"Exotica planta tricolor, originaria de mexico",
   },
   {
    "url": "./imagenes/crasas/echeveria gila.jpg",
     "nombre":"Echeveria Gila",
     "descripcion":"roseta glauca y de gran porte",
   },
   {
    "url": "./imagenes/crasas/cotyledon.jpg",
     "nombre":"Kalanchoe thirsiflora",
     "descripcion":"Degran porte y color invernal rojiso",
   },
   {
    "url": "./imagenes/crasas/aloe sp 2.jpg",
     "nombre":"Aloes striata",
     "descripcion":" Aloe desertica y de floracion roja",
   },
   {
    "url": "./imagenes/crasas/crasas varias.jpg",
     "nombre":"Paisaje de suculentas",
     "descripcion":"Realizamos el diseño de tu jardin",
   },
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos')
let texto = document.getElementById('textoimg');
let i = 0;
posicionpuntos()

atras.addEventListener('click', function(){
    i -=1
    if (i == -1){
        i = imagenes.length - 1
    }
    imagen.innerHTML = `<img class="imagi" src="${imagenes[i].url}"></img>`;
    texto.innerHTML = `
    <h4>${imagenes[i].nombre} </h4>;
    <p>${imagenes[i].descripcion} </p>;`
    posicionpuntos()
})
adelante.addEventListener('click', function(){
    i +=1
    if (i == imagenes.length){
        i = 0
    }
    imagen.innerHTML = `<img class="imagi" src="${imagenes[i].url}"></img>`;
    texto.innerHTML = `
    <h4>${imagenes[i].nombre} </h4>
    <p>${imagenes[i].descripcion} </p>;` 
    posicionpuntos()
})

function posicionpuntos(){
 puntos.innerHTML = ``;
for ( let j = 0; j<imagenes.length; j++){
    if (j == i) {
        puntos.innerHTML += `<p class ="bold">.</p>`
    }
    else{
        puntos.innerHTML += `<p>.</p>`
    }
}
}
/* */