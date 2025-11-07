const form = document.getElementById("form")
const user = document.getElementById("user")

 const password= document.getElementById("password")
const email =document.getElementById ("email")
const telefono = document.getElementById ("telefono")


form.addEventListener("submit", function(event){
  event.preventDefault(); 
let valido = true; 
  for (const e of document.querySelectorAll(".error")) e.remove();


  const mensajev = document.getElementById("mensajen");
  if (mensajev) mensajev.remove();

    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === "" || !emailRegex.test(email.value.trim())) {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = "Correo inválido";
    error.style.color = "red";
    email.parentNode.appendChild(error);
    valido = false;
  }
if (user.value.trim() === "" || user.value.length < 4 || !/^[A-Za-z0-9_]+$/.test(user.value)) {
  const error = document.createElement("p");
  error.textContent = "Nombre de usuario inválido (mínimo 4 caracteres, sin símbolos raros)";
  error.className = "error";
  error.style.color = "red";
  user.parentNode.appendChild(error);
  valido = false;
}



if (password.value === "" || password.value.length <= 8) {
        const error = document.createElement("div");
        error.className = "error";
        error.textContent = "contraseña debe ser mayor a 8 caracteres";
        error.style.color = "red";
        password.parentNode.appendChild(error);
        valido = false;
      }

 
if (telefono.value.trim().length < 8) {
  const error = document.createElement("div");
  error.className = "error";
  error.textContent = "Número de teléfono inválido";
  error.style.color = "red";
  telefono.parentNode.appendChild(error);
  valido = false;
}
if (valido) {
  const exito = document.createElement("p");
  exito.textContent = "Formulario enviado correctamente";
  exito.id = "mensajen";
  exito.style.color = "green";
  form.appendChild(exito);
}
} );
/* js carrousel */
let imagenes=[
   { 
    "url": "../imagenes/crasas/aeoniums.jpg",
     "nombre":"Aeonim arboreum sp",
     "descripcion":"Suculenta de crecimiento muy rapido y facil multiplicacion",
   },
   {
    "url": "../imagenes/crasas/mangabe.jpg",
     "nombre":"Mangabe kaleidoscope",
     "descripcion":"Exotica planta tricolor, originaria de mexico",
   },
   {
    "url": "../imagenes/crasas/echeveria gila.jpg",
     "nombre":"Echeveria Gila",
     "descripcion":"roseta glauca y de gran porte",
   },
   {
    "url": "../imagenes/crasas/cotyledon.jpg",
     "nombre":"Kalanchoe thirsiflora",
     "descripcion":"Degran porte y color invernal rojiso",
   },
   {
    "url": "../imagenes/crasas/aloe sp 2.jpg",
     "nombre":"Aloes striata",
     "descripcion":" Aloe desertica y de floracion roja",
   },
   {
    "url": "../imagenes/crasas/crasas varias.jpg",
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