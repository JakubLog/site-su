/* eslint-disable cypress/no-unnecessary-waiting */
import { auth } from 'firebase';

describe('Site-su application', () => {
  it('Checks dashboard navigation & mechanics', () => {
    cy.visit('/members');
    cy.wait(2000);
    cy.findByText(/przewodniczący/i).click();
    cy.findByText('Klasa:').should('exist');

    cy.findByText(/zamknij/i).click();

    cy.findByText(/wysocka/i).click();
    cy.findByText('Klasa:').should('exist');
  });
});
