import {CalculaCambio, verificarDatos, desfragmentarCambio} from "./Totalizador";

describe("Cambio", () => {
    it("deberia Restar el monto venta con el efectivo", () => {
      expect(CalculaCambio(4, 5)).toEqual(1);
    });
});

describe("Cambio en monedas", () => {
    it("deberia Restar el monto venta con el efectivo", () => {
      expect(desfragmentarCambio(4, 5)).toEqual(1);
    });
});