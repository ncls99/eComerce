const backButton = document.querySelector("#backButton")
const nextButton = document.querySelector("#nextButton")
const productos = document.querySelector("#cards")

const scndBackButton = document.querySelector("#scndBackButtongg")
const scndNextButton = document.querySelector("#scndNextButtongg")
const scndProducts = document.querySelector("#scndCards")


function scrollin (direction, id, distance){
  const productos = document.querySelector(id)
  productos.scrollLeft += (distance * direction)
}

ciclismoProductos = [
  {
    nombre: "la mamalona",
    precio: 2000,
    descripcion: "mi descripcion",
    imagen: "bicimela1.png"
  },
  {
    nombre: "cicla 2",
    precio: 3000,
    descripcion: "mi descripcion",
    imagen: "bicimelaGravel.png"
  },
]

for(let i in ciclismoProductos)
{
  let prueba = `<div class="card">
                  <div class="boxImg">
                      <img src="./img/${ciclismoProductos[i].imagen}" alt="">
                  </div>
                  <div class="datosCard">
                      <h3>${ciclismoProductos[i].nombre}</h3>
                      <h4>precio ${ciclismoProductos[i].precio}</h4>
                      <p>${ciclismoProductos[i].descripcion}</p>
                  </div>
                </div>`
  scndProducts.innerHTML += prueba
}