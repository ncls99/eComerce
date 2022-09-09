const productos = document.querySelector("#cards")
const scndProducts = document.querySelector("#scndCards")


function scrollin(direction, id, distance) {
  const productos = document.querySelector(id)
  productos.scrollLeft += (distance * direction)
}

const inventario = [

  {
    nombre: "Diverge Sport Carbon",
    id: 1,
    precio: 14700000,
    categoria: "ciclismo",
    stock: 15,
    descripcion: "Whether your goal is to escape on gravel back roads, far from cars and crowds, or drop the hammer at the front of your favorite gravel race, no bike does it better than the new Diverge.",
    imagen: "bicimela1.png"
  },
  {
    nombre: "Tarmac SL6",
    precio: 12075000,
    categoria: "ciclismo",
    stock: 14,
    id: 2,
    descripcion: "When we developed the Tarmac, we didn't just want it to be fast. We wanted it to be fast everywhere.",
    imagen: "bicimelaGravel.png"
  },
  {
    nombre: "Align II",
    precio: 209000,
    categoria: "ciclismo",
    stock: 19,
    id: 3,
    descripcion: "Clean aesthetic, comfortable fit, and a budget-friendly price—that’s what makes up the Align II.",
    imagen: "casco1.png"
  },
  {
    nombre: "Propero III",
    precio: 640000,
    categoria: "ciclismo",
    stock: 18,
    id: 4,
    descripcion: "This race-inspired design is known for its incredible fit and tremendous value.",
    imagen: "casco2.png"
  },
  {
    nombre: "Supacaz Supa G Long Glove",
    precio: 180000,
    categoria: "ciclismo",
    stock: 17,
    id: 5,
    descripcion: "TThe SupaG is the pinnacle of glove design. The seamless fit and Japanese Clarino™ palm make the SupaG the perfect glove.",
    imagen: "glove.png"
  },
  {
    nombre: "Men's SL Solid Short Sleeve Jersey",
    precio: 255000,
    categoria: "ciclismo",
    stock: 16,
    id: 6,
    descripcion: "Long hours in the saddle put a ton of stress on your jerseys.",
    imagen: "jersey.png"
  },
  {
    nombre: "Supacaz ePedal. CNC Alloy",
    precio: 660000,
    categoria: "ciclismo",
    stock: 15,
    id: 7,
    descripcion: "Time to take your eBike to the next level.",
    imagen: "pedal.png"
  },
  {
    nombre: "S-Works Vent EVO Gravel Shoesy",
    precio: 1.810000,
    categoria: "ciclismo",
    stock: 14,
    id: 8,
    descripcion: "The S-Works Vent EVO brings the outstanding breathability of our Vent technology industry-leading Body Geometry design off-road.",
    imagen: "zapatillas1.png"
  },
  {
    nombre: "S-Works Romin EVO with Mirror",
    precio: 2126000,
    categoria: "ciclismo",
    stock: 13,
    id: 9,
    descripcion: "Our pro-favorite S-Works Romin EVO with Mirror saddle is designed to deliver exceptional comfort and ensure blood flow to soft tissue when riding in a low, aero position.",
    imagen: "asiento.png"
  },

  {
    nombre: "Camiseta Selección Colombia Hombre",
    precio: 80000,
    categoria: "Voleibol",
    stock: 19,
    id: 10,
    descripcion: "Camiseta oficial masculina talla unica de la selección colombia",
    imagen: "camisetaHombre.png"
  },
  {
    nombre: "Esqueleto Selección Colombia mujer",
    precio: 80000,
    categoria: "Voleibol",
    stock: 18,
    id: 11,
    descripcion: "Esqueleto oficial femenina talla unica de la selección colombia",
    imagen: "camisetaMujer.png"
  },
  {
    nombre: "malla mikasa profesional",
    precio: 360000,
    categoria: "Voleibol",
    stock: 17,
    id: 12,
    descripcion: "Red de Volleyball recreacional \nCuerda en polipropileno \nCon materiales contra la humedad Tamaño: 32' x 3'.",
    imagen: "mallaMikasa.png"
  },
  {
    nombre: "Balón Mikasa Voleibol V330w",
    precio: 180000,
    categoria: "Voleibol",
    stock: 16,
    id: 13,
    descripcion: "- Balón oficial de la FIVB. \n- Tamaño y Peso oficiales. \n- Circunferencia: 65-67 cm. \n- Peso: 260-280 g.",
    imagen: "mikasaV300W.png"
  },
  {
    nombre: "Balón Voleibol Molten V5m 5000",
    precio: 340000,
    categoria: "Voleibol",
    stock: 15,
    id: 13,
    descripcion: "- Elaborado en cuero composite laminado. \n- Peso (260 -280 g) y color (verde, blanco, rojo) oficiales.",
    imagen: "molten500.png"
  },
  {
    nombre: "Rodillera Miyagi Elastica",
    precio: 74000,
    categoria: "Voleibol",
    stock: 14,
    id: 14,
    descripcion: "- PAR DE RODILLERAS NYLON TERMOFORMADAS M6764 \n- Estan fabricadas en material 40% nylon, 30% polyester y 30 % latex, que proveen una presión uniforme",
    imagen: "rodillerasVoleibol.png"
  },
  {
    nombre: "Zapatillas Asics Upcourt 4",
    precio: 564000,
    categoria: "Voleibol",
    stock: 12,
    id: 15,
    descripcion: "Diseñado para atletas de cancha cubierta que son más nuevos en el juego",
    imagen: "tenisAsics.png"
  },
  {
    nombre: "mizuno Wave Lightning Z4",
    precio: 1000000,
    categoria: "Voleibol",
    stock: 13,
    id: 16,
    descripcion: "malla de aire superior: malla de aire superior para un tacto superior, transpirabilidad y comodidad.",
    imagen: "tenisMizuno.png"
  }
]

function obtenerProducto(id) {
  const producto = inventario.find(cosiorolo => cosiorolo.id == id)
  return producto;
}

function getCart() {
  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
  return cart;
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
  renderCart()
}

function checkOut(){
  const emptyCart = []
  saveCart(emptyCart)
}

function addToCart(button) {
  const cart = getCart()
  const buttonId = button.getAttribute("data-id")
  let producto = obtenerProducto(buttonId);
  let existingElement = cart.find(element => element.prod.id == buttonId)
  if (existingElement) {
    existingElement.cantidad += 1
    existingElement.subtotal = producto.precio * existingElement.cantidad
    if (existingElement.cantidad > producto.stock) {
      alert("No te pases de verga krnal.")
      return;
    }
  }
  else {
    let nuevoProducto = {
      cantidad: 1,
      subtotal: producto.precio,
      prod: producto
    }
    cart.push(nuevoProducto)
  }
  saveCart(cart)
}

function deleteProduct(button, isDeleteOne) {
  const cart = getCart()
  const buttonId = button.getAttribute("data-id")
  let existingElement = cart.find(element => element.prod.id == buttonId)
  if (isDeleteOne) {
    existingElement.cantidad -= 1
    existingElement.subtotal = existingElement.prod.precio * existingElement.cantidad
    if (existingElement.cantidad < 1) {
      cart.splice(cart.indexOf(existingElement), 1)
    }
  }
  else {
    cart.splice(cart.indexOf(existingElement), 1)
  }
  saveCart(cart)

}

function calcularTotal() {
  const cart = getCart()
  let cantidad = 0
  total = 0
  for (let i in cart) {
    total += cart[i].subtotal
    cantidad += cart[i].cantidad
  }

  const labelTotal = document.querySelector("#totalLabel")
  const itemsTotales = document.querySelector("#itemsLabel")

  labelTotal.innerHTML = `$ ${total}`
  itemsTotales.innerHTML = `${cantidad} items totales`
}

const ciclismoProductos = inventario.filter(product => product.categoria == "ciclismo")

for (let i in ciclismoProductos) {
  let card = `<div class="card">
                  <div class="boxImg">
                      <img src="./img/${ciclismoProductos[i].imagen}" alt="">
                  </div>
                  <div class="cardDescription">
                      <div class="datosCard">
                          <h3>${ciclismoProductos[i].nombre}</h3>
                          <h4>precio ${ciclismoProductos[i].precio}</h4>
                          <p>${ciclismoProductos[i].descripcion}</p>
                      </div>
                      <div class="addToCart">
                          <input type="button" value="add to cart" class="addToCartButton" onclick="addToCart(this)" data-id= "${ciclismoProductos[i].id}" data-categoria= "${ciclismoProductos[i].categoria}">
                      </div>
                  </div>
                </div>`
  scndProducts.innerHTML += card
}

const voleibolProductos = inventario.filter(product => product.categoria == "Voleibol")

for (let i in voleibolProductos) {
  let card = `<div class="card">
                  <div class="boxImg">
                      <img src="./img/${voleibolProductos[i].imagen}" alt="">
                  </div>
                  <div class="cardDescription">
                      <div class="datosCard">
                          <h3>${voleibolProductos[i].nombre}</h3>
                          <h4>precio ${voleibolProductos[i].precio}</h4>
                          <p>${voleibolProductos[i].descripcion}</p>
                      </div>
                      <div class="addToCart">
                          <input type="button" value="add to cart" onclick="addToCart(this)" class="addToCartButton" data-id= "${voleibolProductos[i].id}" data-categoria= "${voleibolProductos[i].categoria}">>
                      </div>
                  </div>
                </div>`
  productos.innerHTML += card
}



function renderCart() {
  const listaCards = document.querySelector("#itemsCarrito")
  const carrito = getCart()
  listaCards.innerHTML = '';
  for (let i in carrito) {
    listaCards.innerHTML += `<div class="cardCart">
    <div class="imgCard">
        <img src="./img/${carrito[i].prod.imagen}" alt="${carrito[i].prod.nombre}">
    </div>
    <div class="dataCard">
        <h3>${carrito[i].prod.nombre}</h3>
        <p>$ ${carrito[i].prod.precio}</p>
        <p>subtotal $ ${carrito[i].subtotal}</p>
        <div class="toolsCard">
            <button data-id = "${carrito[i].prod.id}" onclick = "deleteProduct(this,true)">-</button>
            <label for="">${carrito[i].cantidad} units</label>
            <button onclick="addToCart(this)" data-id = "${carrito[i].prod.id}">+</button>
            <button class="deleteButton" data-id = "${carrito[i].prod.id}" onclick = "deleteProduct(this,false)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg></button>
        </div>
    </div>
</div>`
  }
  calcularTotal()
}

renderCart()

function showCart() {
  const carritoSection = document.querySelector("#carrito")

  carritoSection.classList.toggle("cartHide")
}

