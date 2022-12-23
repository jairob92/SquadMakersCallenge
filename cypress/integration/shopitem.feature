Feature: Realizar la compra de un producto

    Logear un usuario exitosamente y seleccionar item de compra para realizar pago 

    Background: Ingresar a la pagina de inicio
        Given Usuario abre el navegador e ingresa la pagina de inicio

    @correct_user
    Scenario: Login exitoso
        Given Usuario ingresa el usuario y contrasena
            | username      | password  |
            | standard_user | secret_sauce |
        When usuario da clic en la opcion de LOGIN
        Then El usuario ingresa exitosamente y visualiza productos
        And validar que este disponible Labs Backpack
        And seleccionar producto
        And da click en el icono del carrito
        And valida que el producto este en el carrito
        And da click en el boton de checkout
        And ingresa sus datos personales
            | firstname      | lastname  | zipcode |
            | jairo          | daniel    | 68001   |
        And da click en continuar
        And Visualiza informacion del pago
        And click en finalizar
        And Visualiza el mensaje de confirmacion de compra




    