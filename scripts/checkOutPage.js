/*ir a tras para cambiar codigo postal */
let codigoPostal = document.querySelector(".calcularEnvioContainer");
let botonCambiarCP = document.querySelector(".btn--sin-fondo");
let sacarCard = document.querySelector(".card--formulario--metodoEnvio");
let listadoEnvios = document.querySelector(".listado--MetodoEnvio");
let calcularBtn = document.getElementById("btnCalcular");
let containerCalcularCP = document.querySelector(".calcularEnvioContainer");

botonCambiarCP.addEventListener("click", (e) => {
  e.preventDefault();
  sacarCard.style.display = "none";
  listadoEnvios.style.display = "none";
  codigoPostal.style.display = "flex";
});

calcularBtn.addEventListener("click", () => {

  containerCalcularCP.style.display = "none";
  sacarCard.style.display = "flex";
  listadoEnvios.style.display = "block";
});

let paso_pago = document.querySelector(".pagoContainer");
let botones = document.getElementsByClassName("btnTabs_btn");

/* VAlidacion de formulario */

document.addEventListener("DOMContentLoaded", function (e) {
  document.querySelector(".envio").addEventListener("click", function (e) {
    e.preventDefault();

  //Quitar lo comentado para validar el formulario
    /* const currentStep = document.querySelector(".envioContainer");
    const inputs = currentStep.querySelectorAll("input");
    let isValid = true;

    inputs.forEach(function (input) {
      if (!input.checkValidity()) {
        isValid = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (!isValid) {
      e.stopPropagation();
      return;
    }
*/
    // Pasar al siguiente paso
   siguientePaso();
  });
});


/**
 * Siguiente paso
 */
function siguientePaso() {
    document.querySelector(".envioContainer").style.display = "none";
    botones[0].classList.remove("active");
    botones[1].classList.remove("disabled");
    botones[1].classList.add("active");
    paso_pago.style.display = "block";
}


document.addEventListener("DOMContentLoaded", function (e) {
  let facturacionMark = document.getElementById("checkDefault4");
  let mostrarFormulario = document.querySelector(".cambiar--datos--formulario");

  facturacionMark.addEventListener("change", function () {
    if (!facturacionMark.checked) {
      mostrarFormulario.style.display = "block";
    } else {
      mostrarFormulario.style.display = "none";
    }
  });
});

/**Volver atras */
let btnVolverEnvio = document.querySelector(".btnVolverPasoAnterior");
let paso_enviar = document.querySelector(".envioContainer");

btnVolverEnvio.addEventListener("click", (event) => {
  event.preventDefault();
  paso_pago.style.display = "none";
  botones[1].classList.remove("active");
  botones[0].classList.remove("disabled");
  botones[0].classList.add("active");
  paso_enviar.style.display = "block";
});

/**Pago exitoso */

let pagoExitoso = document.querySelector(".finalizar");
let mensajeExito = document.querySelector(".mensaje-PagoRealizado");
pagoExitoso.addEventListener("click", (event) => {
  event.preventDefault();
  paso_pago.style.display = "none";
  mensajeExito.style.display = "block";
});

/**colapsar metodos de pago cuando selecciono uno RADIO BUTTON MANAGMENT */

let radioBtns = document.querySelectorAll("input[name='metodoPago']");
let radioSelected = false;
let btnMostrar = document.getElementById("mostrarTodos");

radioBtns.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    radioBtns.forEach((r) => {
      r.closest(".card").style.display = "none";
    });
    event.target.closest(".card").style.display = "block";

    btnMostrar.style.display = "block";
  });
});

btnMostrar.addEventListener("click", () => {
  console.log("hice click");
  radioBtns.forEach((radio) => {
    radio.closest(".card").style.display = "block";
  });
});

/*EMAIL OTP */

const emailInput = document.getElementById("exampleInputEmail1");
const otpContainer = document.getElementById("formulario-otp");
const otpLastInput = document.getElementById("otp4");
/* Para quitar el input email*/
const emailContainer = document.querySelector(".emailContainer");
const novedades = document.querySelector(".checkboxNovedades");
emailInput.addEventListener("blur", () => {
  
  const email = emailInput.value;
  if (email.includes("@") && email.includes(".")) {
    otpContainer.style.display = "block";
    emailInput.style.display = "none";
    emailContainer.style.display = "none";
    novedades.style.display = "none";
  }
});
document.addEventListener('DOMContentLoaded', function() {
otpLastInput.addEventListener("blur", () => {

    otpContainer.style.display = "none";
    emailInput.style.display = "block";
    emailContainer.style.display = "block";
    novedades.style.display = "block";
  
})});