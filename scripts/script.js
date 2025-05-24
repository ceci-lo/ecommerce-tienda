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

/* Carusel*/

var carouselWidth = $(".carousel-contenedor")[0].scrollWidth;
var cardWidth = $(".carusel-destacado-item").outerWidth(true);
var scrollPosition = 0;

$(".next").on("click", function () {
  if (scrollPosition + $(".carousel-contenedor").width() < carouselWidth) {
    
    scrollPosition = scrollPosition + cardWidth;
    $(".carousel-contenedor").animate({ scrollLeft: scrollPosition }, 600);
  }
});

$(".prev").on("click", function () {
  if (scrollPosition > 0) {
    
    scrollPosition = scrollPosition - cardWidth;
    $(".carousel-contenedor").animate({ scrollLeft: scrollPosition }, 600);
  }
});

/* Inicio codigo de logica de busqueda */

let productos = [
  {
    titulo: "Cartera  mediana cuero",
    precio: 200,
    descuento: 20,
    img: "./assets/cosmetics/pexels-karolina-grabowska-8361426.jpg",
    pagos: "3 y 6 cuotas sin interes",
  },
  {
    titulo: "Bolso de viaje",
    precio: 400,
    descuento: 10,
    img: "./assets/cosmetics/pexels-daria-liudnaya-8166972.jpg",
    pagos: " 6 cuotas sin interes",
  },
  {
    titulo: "Bolso de mano chica",
    precio: 300,
    descuento: 0,
    img: "./assets/cosmetics/pexels-jessbaileydesign-755992.jpg",
    pagos: " 6 cuotas sin interes",
  },
  {
    titulo: "Bandolera",
    precio: 400,
    descuento: 0,
    img: "./assets/cosmetics/brittney-weng-CSquI0aw_Rg-unsplash.jpg",
    pagos: " 3 y 6 cuotas sin interes",
  },
  {
    titulo: "Billetera",
    precio: 150,
    descuento: 15,
    img: "./assets/cosmetics/eve-maier-bM5y2PXl1_Q-unsplash.jpg",
    pagos: " 3 y 6 cuotas sin interes",
  },
  {
    titulo: "Bolso grande inflado",
    precio: 600,
    descuento: 0,
    img: "./assets/cosmetics/nataliya-melnychuk-51sGDpm5S78-unsplash.jpg",
    pagos: " 3 y 6 cuotas sin interes",
  },
];

const shopContent = document.getElementById("shopContent");
const linkTitulo = document.getElementById("link-titulo");
const noResults = document.getElementById("noResults");

const displayProducts = (productList) => { 

  shopContent.innerHTML = "";

  if (productList.length === 0) { // si no tiene productos que muestre mensaje de sin resultados. 

    noResults.style.display = "block";
    noResults.style.visibility = "visible";
  } else {

    noResults.style.display = "none";

    productList.forEach((producto) => {// recorre el array con los productos


/** se le añaden estilos y clases para crear las cards */
      //crea el contenedor y le agrega las clases boostrap
      let productContenedor = document.createElement("div");
      productContenedor.classList.add("col-lg-4", "col-md-6", "col-sm-12");

      //crea la card que va dentro del contenedor 
      let productCard = document.createElement("div");
      productCard.classList.add("card", "mb-5", "tarjeta");

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      let titulo = document.createElement("h5");
      titulo.className = "card-title";

      //se crea el div para mostrar mensaje de sin resultados
      let contenedorBadge = document.createElement("div");
      contenedorBadge.className = "cuadroProducto";

      let aImg = document.createElement("a");
      let img = document.createElement("img");
      img.className = "card-img-top";

      aImg.append(img);
      aImg.href = "/productDetailPage.html";
      contenedorBadge.append(aImg);

      if (producto.descuento > 0) {
        let etiquetaDescuento = document.createElement("span");
        etiquetaDescuento.classList.add("badge", "bg-dark", "level", "top"); //aqui es donde se debe cambiar la clase por middle, left o right en el ultimo parametro para customisalo

        etiquetaDescuento.style.display = "block";
        etiquetaDescuento.innerText = `${producto.descuento}% OFF`;

        contenedorBadge.append(etiquetaDescuento);
      }

      let precio = document.createElement("p");
      precio.className = "precio";

      let formaDePago = document.createElement("p");
      formaDePago.className = "card-text";

      titulo.innerText = producto.titulo;
      precio.innerText = `$ ${producto.precio}`;
      formaDePago.innerText = producto.pagos;
      img.src = producto.img;

      //se agregan a los contenedores
      cardBody.append(titulo, precio, formaDePago);
      productCard.append(contenedorBadge);
      productCard.appendChild(cardBody);
      productContenedor.appendChild(productCard);
      shopContent.appendChild(productContenedor);
    });
  }
};

const caruselPrincipal = document.getElementById("carouselPrincipal");
const categorias = document.getElementById("categoria");
const breadcrumb = document.getElementById("breadcrumb");
const breadcrumbHome = document.getElementById("breadcrumb-home");

//buscador de productos
const handleSearch = () => {
  const searchTerm = inputSearch.value.toLowerCase();
  const filterProducts = productos.filter((producto) =>
    producto.titulo.toLocaleLowerCase().match(searchTerm)
  );

  caruselPrincipal.innerHTML = "";
  categorias.innerHTML = "";
  const titulo_resultado_busqueda = document.createElement("h2");
 
    breadcrumb.style.display ="flex";
 
   
    titulo_resultado_busqueda.className = "title";
    titulo_resultado_busqueda.innerText = "Resultados de la búsqueda";

   
  
   categorias.appendChild(titulo_resultado_busqueda);
  displayProducts(filterProducts);
};

displayProducts(productos);

inputSearch.addEventListener("input", handleSearch);


//SEARCH PRODUCT
document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.querySelector(".cards-container");
  const prevButton = document.querySelector(".carousel-control-prev");
  const nextButton = document.querySelector(".carousel-control-next");

  let index = 0;
  const totalCards = document.querySelectorAll(".card-productoRelacionado").length;
  const visibleCards = 3; // Número de cards visibles al mismo tiempo
  const cardWidth = document.querySelector(".card-productoRelacionado").offsetWidth;

  function updateCarousel() {
      cardsContainer.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextButton.addEventListener("click", function () {
      if (index < totalCards - visibleCards) {
          index += 1; // Avanza de a una card
      } else {
          index = 0; // Vuelve al inicio cuando llega al final
      }
      updateCarousel();
  });

  prevButton.addEventListener("click", function () {
      if (index > 0) {
          index -= 1; // Retrocede de a una card
      } else {
          index = totalCards - visibleCards; // Vuelve al final cuando llega al inicio
      }
      updateCarousel();
  });
});