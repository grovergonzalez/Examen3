import {CalculaCambio, verificarDatos, desfragmentarCambio, cortes} from "./Totalizador";

describe("Cambio", () => {
    it("deberia Restar el monto venta con el efectivo", () => {
      expect(CalculaCambio(4, 5)).toEqual(1);
    });
});

describe("Cambio en monedas", () => {
    it("deberia Restar el monto venta con el efectivo", () => {
      expect(CalculaCambio(4, 5)).toEqual(1);
    });
    it("deberia ver el array que se usa para el cambio en monedas", () => {
        expect(cortes).toEqual([0.2, 0.5, 1, 2, 5]);
    });
    it("deberia ver el cambio en monedas", () => {
        expect(desfragmentarCambio(11,8)).toEqual([2]);
    });
});