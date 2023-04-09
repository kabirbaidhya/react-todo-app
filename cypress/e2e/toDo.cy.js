describe('toDo spec', () => {
  Cypress.config("baseUrl", "http://localhost:3000"); //Cypress.config("baseUrl", "https://petstore.swagger.io/v2");
  beforeEach(() => {
    cy.visit('baseUrl')
  })
  it('TC001 - adding new item', () => {
    const name = "Learn Java"
    cy.get('.form-control').type(name).type("{enter}")
    cy.get('.checkbox').contains(name).should("be.visible")
  })

  it("TC002 Check checkbox 'Lern Javascript' as done", () => {
    const name1 = "Learn Javascript"
    cy.get('.checkbox').contains(name1).click()
    cy.get('.completed > .checkbox > label').should('exist')
  })

  it("TC003 Verify complited section is empty", () => {
    cy.get('a').contains("Completed").click()
    cy.get('p.alert').should("have.text", "There are no items.")
  })

  it("TC004 Verify search field has correct placeholder", () => {
    cy.get('a.button.search').click()
    cy.get('input.form-control.search').should('have.attr', 'placeholder', 'Search')
  })

  it("TC005 Verify tip correctness when all checkboxes are checked", () => {
    cy.get('input[type="checkbox"]').check()
    cy.get('div.pull-left').should('have.text', '0 items left')
  })



})