class CheckoutInformation {
  getCheckoutInformationLocators() {
    return require("../Locators/CheckoutInformation");
  }

  IngresarNombre(firstname) {
    cy.get(this.getCheckoutInformationLocators().FIRSTNAME)
      .should("be.visible")
      .type(firstname);
    cy.wait(1000);
  }

  IngresarApellido(lastname) {
    cy.get(this.getCheckoutInformationLocators().LASTNAME)
      .should("be.visible")
      .type(lastname);
    cy.wait(1000);
  }
  IngresarCodigoPostal(postalcode) {
    cy.get(this.getCheckoutInformationLocators().ZIPCODE)
      .should("be.visible")
      .type(postalcode);
    cy.wait(1000);
  }
  ContinuarConPago() {
    cy.get(this.getCheckoutInformationLocators().CONTINUE_BUTTON)
      .should("be.visible")
      .click();
    cy.wait(1000);
  }
}
module.exports = CheckoutInformation;
