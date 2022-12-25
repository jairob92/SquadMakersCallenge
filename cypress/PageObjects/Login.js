class Login{
getHomePageLocators() {
    return require("../Locators/HomePage");
  }

IngresarCorreo(username) {
    cy.get(this.getHomePageLocators().LOGIN_USERNAME).should("be.visible").type(username);
    cy.wait(1000);
  }
  IngresarPassword(password) {
    cy.get(this.getHomePageLocators().LOGIN_PASSWORD).should("be.visible").type(password);
    cy.wait(1000);
  }

  ClickonSubmitButton() {
    cy.get(this.getHomePageLocators().LOGIN_BUTTON).should("be.visible").click();
    cy.wait(1000);
  }
  VisualizaPaginaInicio(){
    cy.get(this.getHomePageLocators().TITLE_PAGE).should("be.visible").click();
    cy.wait(1000);
  }
}
module.exports =Login

