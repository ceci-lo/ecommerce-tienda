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

//SEARCH PRODUCT

var carouselWidth = $(".carousel-inner-marcas")[0].scrollWidth;
var cardWidth = $(".carousel-item-marcas").outerWidth(true);
var scrollPosition = 0;

$(".next").on("click", function () {
  if (scrollPosition + $(".carousel-inner-marcas").width() < carouselWidth) {
    
    scrollPosition = scrollPosition + cardWidth;
    $(".carousel-inner-marcas").animate({ scrollLeft: scrollPosition }, cardWidth);
  }
});

$(".prev").on("click", function () {
  if (scrollPosition > 0) {
    
    scrollPosition = scrollPosition - cardWidth;
    $(".carousel-inner-marcas").animate({ scrollLeft: scrollPosition }, cardWidth);
  }
});

/* Carusel de productos relacionado*/


    var carouselWidth = $(".carousel-inner-productoR")[0].scrollWidth;
    var cardWidth = $(".carousel-item-productoR").width();
    var scrollPosition = 0;

    $(".next-productoR").on("click", function () {
      console.log("click")
  if (scrollPosition < (carouselWidth - cardWidth * 3)) { 
    scrollPosition += cardWidth;  
    $(".carousel-inner-productoR").animate({ scrollLeft: scrollPosition },800); 
  }
});

$(".prev-productoR").on("click", function () {

  if (scrollPosition > 0) {

    scrollPosition -= cardWidth;

    if (scrollPosition < 0) scrollPosition = 0; 
    $(".carousel-inner-productoR").animate(
      { scrollLeft: scrollPosition },
      600
    );
  }
});