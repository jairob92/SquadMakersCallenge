# SquadMakersCallenge
Desarrollo del reto de automatizacion usando Cypress y Cucumber

<h3>Instalacion y configuración del proyecto.</h3>

<li>Iniciar servicio npm : <b>npm init -y.</b> </li>
<li>Instalar cypress: <b> npm install cypress --save-dev </b> </li>
<li>Instalar plugin de cucumber : <b> npm install --save-dev cypress-cucumber-preprocessor </b> </li>
<li> Configurar cucumber :  <i>configurar en cypress/plugins/index.js </i>
<ul> const cucumber = require('cypress-cucumber-preprocessor').default
o	module.exports = (on, config) => {
 on('file:preprocessor', cucumber())
}
</ul>
<li>Diseño de los casos de prueba</li>
</br>
El diseño de los casos de prueba fueron diseñados el patron Page Object Model, esto nos permite crear scripts scalables y separar en clases : Localizadores, métodos y test.

<H3>Para ejecutar los casos de prueba </H3>
<li>se debe usar el comando <b> npx cypress open </b> </li>
<li> Seleccionar el feature ( Login, shopItem, logout)</li>
