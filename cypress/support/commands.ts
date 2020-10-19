/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('changeTheme', () => {
  const appNode = '[data-testid="app"]';
  const headerSwitchNode = '[data-testid="header-switch"]';

  cy.get(appNode).should('have.attr', 'data-theme', 'light');
  cy.wait(800);

  cy.get(headerSwitchNode).click();

  cy.wait(800);

  cy.get(appNode).should('have.attr', 'data-theme', 'dark');

  cy.get(headerSwitchNode).click();

  cy.wait(800);

  cy.get(appNode).should('have.attr', 'data-theme', 'light');

  cy.wait(800);
});

Cypress.Commands.add('testViewport', () => {
  cy.viewport('macbook-15');
  cy.wait(800);
  cy.viewport('macbook-13');
  cy.wait(800);
  cy.viewport('macbook-11');
  cy.wait(800);
  cy.viewport('ipad-2');
  cy.wait(800);
  cy.viewport('ipad-mini');
  cy.wait(800);
  cy.viewport('iphone-6+');
  cy.wait(800);
  cy.viewport('iphone-6');
  cy.wait(800);
  cy.viewport('iphone-5');
  cy.wait(800);
  cy.viewport('iphone-4');
  cy.wait(800);
  cy.viewport('iphone-3');
  cy.wait(800);
  cy.viewport('ipad-2', 'portrait');
  cy.wait(800);
  cy.viewport('iphone-4', 'landscape');
  cy.wait(800);
});
