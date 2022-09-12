/* eslint-disable max-len */
describe('e2e test', () => {
  it('sets up and plays a game', () => {
    //visits website
    cy.visit('https://chaingame.netlify.app/');
    //transition to rule page
    cy.get('.ZjnLwIMQkIc5RoOaxtio > button').click();
    cy.url().should('include', '/rules');
    //select category and begin game
    cy.get('fieldset > :nth-child(3)').click();
    cy.get('.rvANpMptEsraq3bXzctR').click();
    //navigate to game page
    cy.url().should('include', '/game');
    //enter an appropriate word, page updates
    cy.get('input').type('frank{enter}');
    cy.get('.UG_V6eUnfDjvpvvO5E2Q > span').should('contain', 'frank');
    cy.get('ul').should('be.visible');
    //enter incorrect word, error modal appears
    cy.get('input').type('arthur{enter}');
    cy.get('.MuiPaper-root').should('be.visible');
    //enter correct word, wordbank span updates properly
    cy.get('input').type('kyle{enter}');
    cy.get('.UG_V6eUnfDjvpvvO5E2Q > span').should('contain', 'kyle');
  });
});
