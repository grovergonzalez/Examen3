describe("Ventas", () => {
    it("Se debería poder ver el input de monto venta en pantalla", () => {
      cy.visit("/");
      cy.get("#monto-venta").type(4);
    });
    it("Se debería poder ver los inputs de monto venta y efectivo en pantalla", () => {
        cy.visit("/");
        cy.get("#monto-efectivo").type(5);
    });
    it("Se debería poder ver el boton de Cambio en pantalla", () => {
        cy.visit("/");
        cy.get("#Cambio-button").click();
    });
  });
  