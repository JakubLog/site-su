import { auth } from 'firebase';

describe('Site-su application', () => {
  before(() => {
    auth.signOut();
  });

  it('Dropping error when bad input', () => {
    cy.visit('/signin');
    cy.findByLabelText('email').click({ force: true }).type('admin@');
    cy.findByLabelText('password').click({ force: true }).type('32nde');
    cy.findAllByText(/Zaloguj się/i)
      .last()
      .click();

    cy.findByText('Podaj prawidłowy email!').should('exist');
    cy.findByText('Hasło powinno zawierać conajmniej 6 znaków!').should('exist');
  });

  it('Can login in', () => {
    cy.findByLabelText('email').clear().click({ force: true }).type('admin@admin.pl');
    cy.findByLabelText('password').clear().click({ force: true }).type('Kuba2007');
    cy.findAllByText(/Zaloguj się/i)
      .last()
      .click();

    cy.findByText(/twój kod awaryjny/i).should('exist');
  });

  it('Can sign out', () => {
    cy.findByText(/wyloguj/i).click();
    cy.findByText(/od uczniów/i).should('exist');
  });
});
