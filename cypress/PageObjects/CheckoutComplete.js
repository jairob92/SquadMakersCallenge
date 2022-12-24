class CheckoutComplete {

    getCheckoutCompleteLocators() {
        return require("../Locators/CheckoutComplete");
      }
  VerMensajeConfirmacion() {
    cy.get(this.getCheckoutCompleteLocators().MESSAGE_CONFIRMATION).should("be.visible")
    cy.wait(1000)
  }
}
module.exports = CheckoutComplete;
