describe('Site-su application', () => {
  it('Checks is showing 404 error when bad input', () => {
    cy.visit('/');
    cy.findByText(/Od uczniów dla/i).should('exist');
    const generatedUrl = `cypress${Math.round(Math.random() * 1000)}`;
    cy.visit(generatedUrl);
    cy.findByText(/We so sorry.../i).should('exist');
    cy.findByText('/'.concat(generatedUrl)).should('exist');
    cy.findByText('/not'.concat(generatedUrl)).should('not.exist');
    cy.findByText(generatedUrl).should('not.exist');
  });
});
