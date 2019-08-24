// https://docs.cypress.io/api/introduction/api.html

describe("Animals test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains(".title", "Animais que desistiram da Amazônia");
  });
});
