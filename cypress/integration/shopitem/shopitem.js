import { Given,And,When,Then} from 'cypress-cucumber-preprocessor/steps';
import AbrirWebPage from "../../PageObjects/AbrirWebPage"
import Login from "../../PageObjects/Login"
import MenuDeProductos from "../../PageObjects/MenuDeProductos"
const login=new Login();
const abrirPagina=new AbrirWebPage()
const menu=new MenuDeProductos()
Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
Given('Usuario abre el navegador e ingresa la pagina de inicio',()=>{
    abrirPagina.openBrowser();
})
When('Usuario ingresa el usuario y contrasena',(dataTable)=>{
  dataTable.hashes().forEach(row=>{
      login.IngresarCorreo(row.username)
      login.IngresarPassword(row.password)
  })
})
When('usuario da clic en la opcion de LOGIN',()=>{
  login.ClickonSubmitButton()
})
Then ('El usuario ingresa exitosamente y visualiza productos',()=>{
  menu.VisualizarMenuProductos()
})
And ('validar que este disponible Labs Backpack',()=>{
 menu.ValidarProducto()
})
And ('seleccionar producto',()=>{
    menu.ValidarProducto()
   })
   

