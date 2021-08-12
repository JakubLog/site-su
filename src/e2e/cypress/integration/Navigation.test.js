import { auth } from 'firebase';

describe('Site-su application', () => {
  before(() => {
    auth.signOut();
  });
  it('Checks navigation of site', () => {
    cy.visit('/');

    cy.findByText(/members/i).click();
    cy.findByText(/członkowie/i).should('exist');

    cy.go('back');
    cy.findByText(/od uczniów dla/i).should('exist');

    cy.findByText(/sign in/i).click();
    cy.findAllByText(/Zaloguj się/i).should('exist');
  });
});
