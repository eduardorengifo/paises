/// <reference types="cypress" />

context('Home View', () => {
  before(() => {
    cy.visit('/');
  });

  it('should render the home view', () => {
    cy.get('[data-testid="header"]').should('exist');
    cy.get('[data-testid="home-view"]').should('exist');
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

  it('should load more countries', () => {
    cy.get('[data-testid="country-card-list"]')
      .find('[data-testid="country-card"]')
      .should('have.length', 10);

    cy.wait(800);

    cy.get('[data-testid="country-list-load-more"]').scrollIntoView().click();
    cy.wait(100);

    cy.get('[data-testid="country-card-list"]')
      .find('[data-testid="country-card"]')
      .should('have.length', 20);
  });

  it('should show search with search form', () => {
    cy.get('[data-testid="search-form-input-name"]')
      .type('Perú')
      .should('have.value', 'Perú');

    cy.wait(800);

    cy.get('[data-testid="search-form-select-language"]')
      .select('es')
      .should('have.value', 'es');

    cy.wait(800);

    cy.get('[data-testid="search-form-select-currency"]')
      .select('PEN')
      .should('have.value', 'PEN');

    cy.wait(800);

    cy.get('[data-testid="search-form-select-region"]')
      .select('Americas')
      .should('have.value', 'Americas');

    cy.wait(800);

    cy.get('[data-testid="search-form"]').submit();

    cy.wait(800);
  });

  it('should validate the result of the above query and click on the Perú card', () => {
    cy.get('[data-testid="country-card"]').should('exist').click();

    cy.wait(800);

    cy.get('[data-testid="country-view"]').should('exist');
  });
});
