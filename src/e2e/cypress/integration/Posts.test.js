describe('Site-su application', () => {
  it('Checks post visibility', () => {
    cy.visit('/');
    cy.findAllByLabelText('post').should('exist');
  });
  it('Checks post mechanics', () => {
    cy.findAllByLabelText('post').first().click();
    cy.findByText(/Samorząd Uczniowski - /i).should('exist');
    cy.go('back');
    cy.findByText(/Samorząd Uczniowski - /i).should('not.exist');
  });
});
