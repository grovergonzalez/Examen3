import {CalculaCambio, verificarDatos} from "./Totalizador";

describe("Cambio", () => {
    it("deberia Restar el monto venta con el efectivo", () => {
      expect(CalculaCambio(4, 5)).toEqual(1);
    });
  });