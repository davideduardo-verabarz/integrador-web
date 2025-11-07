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
