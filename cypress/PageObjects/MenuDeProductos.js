class MenuDeProductos{
    getMenuLocators() {
        return require("../Locators/MenuDeProductos");
      }
    
    VisualizarMenuProductos(){
        cy.get(this.getMenuLocators().TITLE_MENU).should('be.visible')
        cy.wait(1000)
    }
    ValidarProducto(){
        cy.get(this.getMenuLocators().PRODUCTO_NAME).should('be.visible')
        cy.wait(1000)
    }
    AgregarProducto(){
        cy.get(this.getMenuLocators().ADD_PRODUCTO).should('be.visible').click()
        cy.wait(1000)
    }
    DarClickEnCarrito(){
        cy.get(this.getMenuLocators().SHOPPING_CAR).should('be.visible').click()
        cy.wait(1000)
    }
    VerMenuOpciones(){
        cy.get(this.getMenuLocators().BURGUER_MENU).should('be.visible').click()
        cy.wait(1000)
    }
    DarClickEnLogout(){
        cy.get(this.getMenuLocators().LOGOUT_OPTION).should('be.visible').click()
        cy.wait(1000)
    }
    visualizarOpcionLogout(){
        cy.get(this.getMenuLocators().BURGUER_MENU).should('be.visible')
        cy.wait(1000)
    }



}
module.exports= MenuDeProductos