/// <reference types="cypress" />

context('Not Found View', () => {
  before(() => {
    cy.visit('/page-not-found');
  });

  it('should render the country view', () => {
    cy.get('[data-testid="header"]').should('exist');
    cy.get('[data-testid="notfound-view"]').should('exist');
    cy.get('[data-testid="footer"]').should('exist');
  });

  it('should change from light theme to dark theme and vice versa', () => {
    // @ts-ignore
    cy.changeTheme();
  });

  it('should test viewport', () => {
    // @ts-ignore
    cy.testViewport();
  });

  it('should go to homepage', () => {
    cy.get('[data-testid="error-message-try-again"]').click();
    cy.wait(800);
    cy.get('[data-testid="home-view"]').should('exist');
  });
});
