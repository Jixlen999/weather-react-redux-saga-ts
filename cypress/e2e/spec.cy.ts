describe('Tests', () => {
  it('Enter "Minsk" to input and press "Enter". Check place label to be "Minsk"', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('[data-cy="cityInput"]').clear();
    cy.get('[data-cy="cityInput"]').type('Minsk');
    cy.get('[data-cy="searchBtn"]').click();
    cy.get('[data-cy="currentCity"]').should('have.text', 'Minsk');
  });
  it('Enter "Oslo" to input and press "Enter". Check place label to be "Oslo"', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('[data-cy="cityInput"]').clear();
    cy.get('[data-cy="cityInput"]').type('Oslo');
    cy.get('[data-cy="searchBtn"]').click();
    cy.get('[data-cy="currentCity"]').should('have.text', 'Oslo');
  });
  it('Click "Hourly" and check if there is time displayed', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('[data-cy="hourlyBtn"]').click();
    cy.get('[data-cy="weekDayOrTime"]').should('contain', ':');
  });
  it('Check time', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('time').should('contain', ':');
  });
  it('Check if the page is not blank', () => {
    cy.visit('https://jixlen999.github.io/weather-react-redux-saga-ts/');
    cy.get('[data-cy="currentCity"]').should('not.be.empty');
    cy.get('time').should('not.be.empty');
  });
});
