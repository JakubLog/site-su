describe('Site-su application', () => {
  it('Checks input visibility', () => {
    cy.visit('/');
    cy.findByLabelText('theme changer').should('exist');
  });
  it('Checks theme toggling mechanics', () => {
    cy.findByLabelText('theme changer').parent().click();
    cy.findByLabelText('theme changer').should('be.checked');
    cy.findByLabelText('theme changer').parent().click();
    cy.findByLabelText('theme changer').should('not.be.checked');
  });
});
