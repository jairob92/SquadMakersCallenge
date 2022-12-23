class AbrirWebPage{
    openBrowser(){
        cy.visit('https://www.saucedemo.com/',)
        cy.title('eq','Swag Labs')
        cy.wait(1000)
    }
}
module.exports =AbrirWebPage