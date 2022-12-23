Feature: Logear en el sistema usuarios registrados

    Validar la funcionalidad de login para los usuarios registrados en la pagina de automation practice

    Background: Ingresar a la pagina de inicio
        Given Usuario abre el navegador e ingresa la pagina de inicio

    @correct_user
    Scenario: Login exitoso
        Given Usuario ingresa el usuario y contrasena
            | username      | password  |
            | standard_user | secret_sauce |
        When usuario da clic en la opcion de LOGIN
        Then El usuario ingresa exitosamente y visualiza productos