/** Busqueda */
const searchButton = document.getElementById("searchButton");
const inputSearch = document.getElementById("searchInput");
const closeBtn = document.getElementById("closeBtn");
const searchBox = document.getElementById("searchBox");
const nav = document.getElementById("colapsar");
const flex = document.getElementsByClassName("d-flex")[0];

searchButton.addEventListener("click", () => {
  searchBox.className = "activo";
  inputSearch.ariaHidden = "true";
  if (inputSearch.ariaHidden == "true") {
    inputSearch.style.display = "block";
    closeBtn.style.display = "block";
    closeBtn.style.marginRight = "28px";
    closeBtn.style.marginTop = "10px";
  }
});

closeBtn.addEventListener("click", () => {
  inputSearch.ariaHidden = "false";
  inputSearch.style.display = "none";
  closeBtn.style.display = "none";
  searchBox.className = "searchBox";
});

/*Carusel de productos relacionado*/


var carouselWidth = $("#wrapperRelacionados .carousel-inner-productoR")[0].scrollWidth;
var cardWidth = $("#wrapperRelacionados .carousel-item-productoR").width();
var scrollPosition = 0;
let visibleCards = window.innerWidth >= 768 ? 3 : 1;

$("#wrapperRelacionados .next-productoR").on("click", function () {
  let scrollPosition = $(".carousel-inner-productoR").scrollLeft();

  if (scrollPosition < (carouselWidth - cardWidth * visibleCards)) { 
    scrollPosition += cardWidth;  
    $(".carousel-inner-productoR").animate({ scrollLeft: scrollPosition }, 600); 
  }
});

$("#wrapperRelacionados .prev-productoR").on("click", function () {
  let scrollPosition = $(".carousel-inner-productoR").scrollLeft();
  console.log("click izq", scrollPosition)
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    
    if (scrollPosition < 0) scrollPosition = 0;

    $(".carousel-inner-productoR").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});
$(window).on('resize', function() {
  visibleCards = window.innerWidth >= 768 ? 3 : 1;
  cardWidth = $("#wrapperRelacionados .carousel-item-productoR").width();
  carouselWidth = $("#wrapperRelacionados .carousel-inner-productoR")[0].scrollWidth;
});

/**Funcion para crear un contador de productos */
let contador = 0;

let menos = document.querySelector(".btnMinusCantidad");
let valor = document.getElementById("valueCantidad");
let mas = document.querySelector(".btnMoreCantidad");
let inputContador = document.createElement("input");
let padre = document.getElementById("botonera-cantidad-productDetail");
inputContador.setAttribute('type', 'number');

/** restricciones 
 * no puede ser negativo
 * al llegar a 6 debe permitir poner manualmente el numero requerido
 * 
 */
//**Agregar mas cantidad de producto  */

mas.addEventListener("click", () => {
  if (contador < 6) {
    contador++;
    valor.innerHTML = contador;
  } else {
    valor.style.display = "none";
    inputContador.className = "form-control";
    padre.insertBefore(inputContador, mas);
  }
})

//**Decrementar cantidad de producto  */
menos.addEventListener("click", () => {
  if (contador > 0) {

    contador--
    valor.innerHTML = contador;
  }

})

/** 
 * Carusel vertical clickeo de imagenes
 * * */
let imgGrande = document.getElementsByClassName("carusel-item-productDetail")[0];
let imgChica = document.getElementsByClassName("card-carousel-vertical");



for (let ele of imgChica) {
  ele.addEventListener("click", () => {

    const imagenClickeada = ele.querySelector("img").src;
    // Buscar el elemento grande actualmente activo
    const imgGrandeActiva = document.querySelector(".carusel-item-productDetail.active");
    if (imgGrandeActiva) {
      imgGrandeActiva.querySelector("img").src = imagenClickeada;
    }

  })
}

/**carusel de imagenes */
var carouselWidth = $(".carousel-inner-caruselProductos")[0].scrollWidth;
var cardWidth = $(".carousel-item-caruselProductos").width();
var scrollPosition = 0;

$(".carousel-control-next-productR").on("click", function () {
  let scrollPosition = $(".carousel-inner-caruselProductos").scrollLeft();

  if (scrollPosition < (carouselWidth - cardWidth * 3)) { 
    scrollPosition += cardWidth;  
    $(".carousel-inner-caruselProductos").animate({ scrollLeft: scrollPosition }, 600); 
  }
});

$(".carousel-control-prev-productR").on("click", function () {
  let scrollPosition = $(".carousel-inner-caruselProductos").scrollLeft();

  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner-caruselProductos").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});

var multipleCardCarousel = document.querySelector(
  "#carouselExampleControlsProductoR"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


/* Carusel de productos relacionado*/


var carouselWidth = $(".carousel-inner-productoR")[0].scrollWidth;
var cardWidth = $(".carousel-item-productoR").width();
var scrollPosition = 0;

$(".next-productoR").on("click", function () {

  if (scrollPosition < (carouselWidth - cardWidth * 3)) {
    scrollPosition += cardWidth;  
    $("#carouselExampleControlsProductoRelacionado.carousel-inner-productoR").animate({ scrollLeft: scrollPosition }, 1000); 
  }
});

$(".prev-productoR").on("click", function () {
  
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    if (scrollPosition < 0) scrollPosition = 0;
    $("#carouselExampleControlsProductoRelacionado.carousel-inner-productoR").animate(
      { scrollLeft: scrollPosition },
      1000
    );
  }
});

var multipleCardCarousel = document.querySelector(
  "#carouselExampleControlsProductoRelacionado"
);

if (window.matchMedia("(min-width: 768px)").matches) {
 
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


/** badge */
let btnBadge = document.getElementsByClassName("badgeTalle");

for (let index = 0; index < btnBadge.length; index++) {
  let boton = btnBadge[index]; // cada boton
  boton.addEventListener("click", ()=>{
    for (let i = 0; i < btnBadge.length; i++) {
      btnBadge[i].classList.remove("text-bg-dark");
    }
    boton.className = "badge badgeTalle text-bg-dark";
  })
  

}

/**off canvas */
const offcanvas1 = new bootstrap.Offcanvas('#offcanvasUno', { backdrop: false });

let btnCalcularEnvio = document.getElementById('button-addon2calculoEnvio');
let containerInput = document.getElementById("containerinputcalculoenvio");
let detalleEnvio = document.getElementById("offcanvasDos-envio-domicilio");
let linkVolverCodigoPostal = document.getElementById("metodo-envio-cambiar-link");

btnCalcularEnvio.addEventListener("click",()=>{
  let precioEnvio = document.querySelector(".precioEnvio");
  precioEnvio.innerText = "$ 500";
  containerInput.style.display = "none";
  detalleEnvio.style.display ="block";

 
})

linkVolverCodigoPostal.addEventListener("click",()=>{
  containerInput.style.display = "block";
  detalleEnvio.style.display ="none";
})

 let btn_add_to_cart = document.getElementById("btn-addToCart-productDetail");

//boton añadir al carrito
btn_add_to_cart.addEventListener("click",()=>{
  //declaracion de variables
  let carrito = document.getElementById("offcanvasDos-product-list");
  let divVacio = document.querySelector(".offcanvasDos-noProducts");
  let mostrarCarrito = document.querySelector(".offcanvasDos-conproductos")
  let iconoCarrito = document.querySelector('#contadorCarritoIcono');


    mostrarCarrito.style.display = "block";
    //Datos del producto
    let titulo = document.getElementById("productTitle").innerText;
    let precio = document.getElementById("precioP").innerText;
    let cantidad =document.getElementById("valueCantidad").innerText.trim();
    let imagen =  document.querySelector('.carusel-item-productDetail.active img').src;

    agregarAlCarrito(imagen, precio, cantidad, titulo);
  
    //actualiza el icono del producto
    let cantidadActual = parseInt(iconoCarrito.textContent.trim()) || 0;
    let cantidadNueva = cantidadActual + parseInt(cantidad); 
     iconoCarrito.textContent = cantidadNueva;

     let items = carrito.querySelectorAll(".item-carrito");

     if (items.length > 0) {
      divVacio.style.display = "none";
      divConProductos.style.display = "block";
    } else {
      divVacio.style.display = "block";
      divConProductos.style.display = "none";
    } 
})


function agregarAlCarrito(imagen, precio, cantidad, titulo){
 let carrito = document.getElementById("offcanvasDos-product-list"); 
  const item = document.createElement('div');
  item.classList.add('item-carrito');
 
  item.innerHTML = `
    <img src="${imagen}" class="imagenProductoCarrito" alt="${titulo}" width="50" />
    <div class="carritoTituloCantidadAgregado">
    <p>${titulo}</p>
    <div id="botonera-cantidad-productDetail" class="botonera-cantidad-productDetail botonera-cantidad-producto-agregado">
                            <button class="btn btnMinusCantidad">-</button>
                            <span class="valueCantidadProductoCarrito" value="0">${cantidad} </span>
                            <button class="btn btnMoreCantidad">+</button>
                        </div>
    </div>
    <div class="carritoPrecioBotonAgregado">
    <span>${precio}</span>
    <button class="eliminar"><i class="bi bi-trash3"></i></button>
    </div>
  `;

/**Eliminar producto */
  item.querySelector('.eliminar').addEventListener('click', function () {
    item.remove();

     // Decrementar el contador del ícono del carrito
  let iconoCarrito = document.querySelector('#contadorCarritoIcono');
  let cantidadRestar = parseInt(valor.innerText.trim()) || 0;
  let cantidadActual = parseInt(iconoCarrito.textContent.trim()) || 0;
  let nuevaCantidad = Math.max(cantidadActual - cantidadRestar, 0); 
  iconoCarrito.textContent = nuevaCantidad;

  // Verificar si no quedan productos
  let carrito = document.getElementById("offcanvasDos-product-list");
  let subtotal = document.querySelector(".offcanvasDos-subtotal");
  let calculoEnvio =  document.querySelector(".offcanvasDos-calcular-envio");
  let descod =  document.querySelector(".offcanvasDos-codigo-descuento");
  let total = document.getElementsByClassName("offcanvasDos-total")[1];
  let btnIniciarCompra = document.querySelector(".offcanvasDos-iniciarCompraBtn");
  let items = carrito.querySelectorAll(".item-carrito");
  let divVacio = document.querySelector(".offcanvasDos-noProducts");

  if (items.length === 0) {
    carrito.style.display = "none";
    subtotal.style.display = "none";
    calculoEnvio.style.display = "none";
    descod.style.display = "none";
    total.style.display = "none";
    btnIniciarCompra.style.display = "none";
    divVacio.style.display = "block"; 
  }
  });

/*Agregar o restar cantidad en producto  */
let contador = parseInt(cantidad);
const botonera = item.querySelector('.botonera-cantidad-productDetail');
let menos = botonera.querySelector(".btnMinusCantidad");
let valor = botonera.querySelector(".valueCantidadProductoCarrito");
let mas = botonera.querySelector(".btnMoreCantidad");
let inputContador = document.createElement("input");
inputContador.setAttribute('type', 'number');

//**Agregar mas cantidad de producto  */

mas.addEventListener("click", () => {
  if (contador < 6) {
    contador++;
    valor.innerHTML = contador;
  } else {
    valor.style.display = "none";
    inputContador.value = contador;
    inputContador.className = "form-control offcanvasDosInputContador";
    botonera.insertBefore(inputContador, mas);
  }
})

//**Decrementar cantidad de producto  */
menos.addEventListener("click", () => {
  if (contador > 0) {

    contador--
    valor.innerHTML = contador;
  }

})
let precioEnvio = document.querySelector(".precioEnvio").innerText;
let precioEnvioLimpio = precioEnvio.replace(/[$\s]/g, "").replace(",", "."); 
let envio = parseInt(precioEnvioLimpio);

let totalHTML = document.querySelector(".total").innerText;
let totalHTMLLimpio = totalHTML.replace(/[$\s]/g, "").replace(",", "."); 
let total = parseInt(totalHTMLLimpio);

let subtotalhtml = document.querySelector(".Subtotal");



let precioLimpio = precio.replace(/[$\s]/g, "").replace(",", "."); 
let costo = parseInt(precioLimpio);



let subtotal = contador * costo;



subtotalhtml.innerHTML = `<strong>$<strong/> ${subtotal}`;

document.querySelector(".total").innerHTML = `<strong>$</strong> ${subtotal + envio}`;

  carrito.appendChild(item);
}

/**Ir comprar ahora */

let comprarAhora = document.getElementById("btn-buyNow-productDetail");
let btnIniciarCompra = document.querySelector(".btn-iniciarCompra");

asignarPage(comprarAhora,"./checkOutPage.html");
asignarPage(btnIniciarCompra,"./checkOutPage.html");


function asignarPage(btn, url){
  if(btn){
  btn.addEventListener("click", ()=>{
    window.location.assign(`${url}`);
  })}
}