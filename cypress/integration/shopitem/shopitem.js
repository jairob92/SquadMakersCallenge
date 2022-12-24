import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
import AbrirWebPage from "../../PageObjects/AbrirWebPage";
import Login from "../../PageObjects/Login";
import MenuDeProductos from "../../PageObjects/MenuDeProductos";
import CheckoutPage from "../../PageObjects/CheckoutPage";
import CheckoutInformation from "../../PageObjects/CheckoutInformation";
import CheckoutOverview from "../../PageObjects/CheckoutOverview";
import CheckoutComplete from "../../PageObjects/CheckoutComplete";
const login = new Login();
const abrirPagina = new AbrirWebPage();
const menu = new MenuDeProductos();
const checkoutpage = new CheckoutPage();
const checkoutinformation = new CheckoutInformation();
const checkoutoverview = new CheckoutOverview();
const checkoutcomplete = new CheckoutComplete();
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
Given("Usuario abre el navegador e ingresa la pagina de inicio", () => {
  abrirPagina.openBrowser();
});
When("Usuario ingresa el usuario y contrasena", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    login.IngresarCorreo(row.username);
    login.IngresarPassword(row.password);
  });
});
When("usuario da clic en la opcion de LOGIN", () => {
  login.ClickonSubmitButton();
});
Then("El usuario ingresa exitosamente y visualiza productos", () => {
  menu.VisualizarMenuProductos();
});
And("validar que este disponible Labs Backpack", () => {
  menu.ValidarProducto();
});
And("seleccionar producto", () => {
  menu.AgregarProducto();
});
And("da click en el icono del carrito", () => {
  menu.DarClickEnCarrito();
});
And("valida que el producto este en el carrito", () => {
  checkoutpage.VerProductoEnCarrito();
});
And("da click en el boton de checkout", () => {
  checkoutpage.DarClickenButtonCheckout();
});
And("ingresa sus datos personales", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    checkoutinformation.IngresarNombre(row.firstname)
    checkoutinformation.IngresarApellido(row.lastname)
    checkoutinformation.IngresarCodigoPostal(row.zipcode)
  });

And("da click en continuar", () => {
  checkoutinformation.ContinuarConPago()
  });

And ("Visualiza informacion del pago",()=>{
  checkoutoverview.VerInformaciondeEnvio()
  checkoutoverview.VerInformaciondePago()

})

And ("click en finalizar",()=>{
  checkoutoverview.ContinuarConPago()

})
And ("Visualiza el mensaje de confirmacion de compra",()=>{
  checkoutcomplete.VerMensajeConfirmacion()

})
});




