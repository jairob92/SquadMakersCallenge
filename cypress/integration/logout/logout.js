import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import AbrirWebPage from "../../PageObjects/AbrirWebPage";
import Login from "../../PageObjects/Login";
import MenuDeProductos from "../../PageObjects/MenuDeProductos";
const login = new Login();
const abrirPagina = new AbrirWebPage();
const menu = new MenuDeProductos();
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
Given("Usuario abre el navegador e ingresa la pagina de inicio", () => {
  abrirPagina.openBrowser();
});
Given("Usuario logueado exitosamente", () => {
  login.IngresarCorreo("standard_user");
  login.IngresarPassword("secret_sauce");
  login.ClickonSubmitButton();
  menu.VisualizarMenuProductos();
});

When ("da click en la opcion de menu",()=>{
    menu.VerMenuOpciones()
})
Then ("visualiza la opcion logout y da click",()=>{
    menu.DarClickEnLogout()
})
And ("el usuario se desloguea exitosamente",()=>{
    login.VisualizaPaginaInicio()
})


