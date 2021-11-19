// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require('cypress-xpath')

// Import commands.js using ES2015 syntax:
import './commands'
import './customCommands/webdriver-uni/Homepage_CC'
import './customCommands/webdriver-uni/MouseActions_CC'
import './customCommands/webdriver-uni/Alerts_CC'
import './customCommands/webdriver-uni/Radiobuttons_CC'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Cypress.Server.defaults({
//     whitelist: (xhr) => {
//         return true;
//     }
// })
