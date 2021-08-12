import { auth } from 'firebase';

describe('Site-su application', () => {
  before(() => {
    auth.signOut();
    cy.visit('/signin');
    cy.findByLabelText('email').click({ force: true }).type('admin@admin.pl');
    cy.findByLabelText('password').click({ force: true }).type('Kuba2007');
    cy.findAllByText(/Zaloguj się/i)
      .last()
      .click();

    cy.findByText(/twój kod awaryjny/i).should('exist');
  });
  it('Checks dashboard navigation', () => {
    cy.findByText('Ankiety').click();
    cy.findByText(/skorzystaj z generatora ankiet/i).should('exist');

    cy.go('back');
    cy.findByText(/twój kod/i).should('exist');

    cy.findByText('Posty').click();
    cy.findByText(/Zaloguj się do zewnętrzego serwisu powiązanego z naszą stroną za pomocą podanych danych - GraphCMS/i).should('exist');
  });
  it('Checks changing description mechanics', () => {
    const description = `Cypress test description - ${Math.round(Math.random() * 10000)}`;

    cy.visit('/dashboard/');
    cy.findByLabelText('description').click().type(description);
    cy.findByText('Zapisz zmiany').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.findByLabelText('description').clear().should('have.attr', 'placeholder', description);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);

    cy.visit('/members');
    cy.findByText(/Jakub Michał Fedoszczak/i).click();
    cy.findByText(description).should('exist');
  });
});
