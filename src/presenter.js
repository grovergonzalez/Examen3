import {CalculaCambio, verificarDatos, desfragmentarCambio, cortes} from "./Totalizador";

const montoventa = document.querySelector("#monto-venta");
const montoefectivo = document.querySelector("#monto-efectivo");
const form = document.querySelector("#CalcularCambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numVenta = Number.parseInt(montoventa.value);
  const numEfectivo = Number.parseInt(montoefectivo.value);

  if(verificarDatos(numVenta,numEfectivo)){
    window.alert("Ingrese los datos nuevamente!");
  }
  div.innerHTML = "<p>" + CalculaCambio(numVenta, numEfectivo) + "</p>";
});
