Feature: Desloguear un usuario en el sistema

    Validar la funcionalidad de logout

    Background: Ingresar a la pagina de inicio
        Given Usuario abre el navegador e ingresa la pagina de inicio

    @desloguear_usuario
    Scenario: logout
        Given Usuario logueado exitosamente
        When da click en la opcion de menu
        Then visualiza la opcion logout y da click
        And el usuario se desloguea exitosamente