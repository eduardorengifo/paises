/// <reference types="cypress" />

context('Country View', () => {
  before(() => {
    cy.visit('/countries/PE');
  });

  it('should render the country view', () => {
    cy.get('[data-testid="header"]').should('exist');
    cy.get('[data-testid="country-view"]').should('exist');
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
    cy.get('[data-testid="back-to-homepage"]').click();
    cy.wait(800);
    cy.get('[data-testid="home-view"]').should('exist');
  });
});
