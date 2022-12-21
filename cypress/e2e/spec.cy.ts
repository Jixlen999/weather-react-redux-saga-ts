describe('Tests', () => {
  it('Enter "Minsk" to input and press "Enter". Check place label to be "Minsk"', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('.sc-bcXHqe').clear();
    cy.get('.sc-bcXHqe').type('Minsk');
    cy.get('.sc-dkrFOg').click();
    cy.get('.sc-cwSeag').should('have.text', 'Minsk');
  });
  it('Enter "Oslo" to input and press "Enter". Check place label to be "Oslo"', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('.sc-bcXHqe').clear();
    cy.get('.sc-bcXHqe').type('Oslo');
    cy.get('.sc-dkrFOg').click();
    cy.get('.sc-cwSeag').should('have.text', 'Oslo');
  });
  it('Click "Hourly" and check if there is time displayed', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('.bAtZyg').click();
    cy.get('.ijwWwp').should('contain', ':');
  });
  it('Check time', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('time').should('contain', ':');
  });
  it('Check if the page is not blank', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('.sc-cwSeag').should('not.be.empty');
    cy.get('.ijwWwp').should('not.be.empty');
  });
});
