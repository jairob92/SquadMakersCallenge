class CheckoutOverview {
    getCheckoutOverviewLocators() {
      return require("../Locators/CheckoutOverview");
    }
  
    VerInformaciondePago() {
      cy.get(this.getCheckoutOverviewLocators().PAYMENT_INFORMATION).should("be.visible")
      cy.wait(1000);
    }
  
    VerInformaciondeEnvio() {
        cy.get(this.getCheckoutOverviewLocators().SHIPPING_INFORMATION).should("be.visible")
        cy.wait(1000);
      }
    ContinuarConPago() {
      cy.get(this.getCheckoutOverviewLocators().FINISH_BUTTON)
        .should("be.visible")
        .click();
      cy.wait(1000);
    }
  }
  module.exports = CheckoutOverview;