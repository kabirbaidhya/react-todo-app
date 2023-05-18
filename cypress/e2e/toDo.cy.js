describe('toDo spec', () => {
  Cypress.config("baseUrl", "http://localhost:3000"); 
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

  it("TC006 Verify number of sections when new section is added", () => {
    cy.get('.form-control').type("Learn Java").type("{enter}")
    cy.get('.checkbox').should("have.length", 4)
  })

  it("TC007 Verify canceling of adding section", () => {
    cy.get('.form-control').type("Learn Java").type('{esc}')
    cy.get('p.info').should('have.text', 'Press `/` to search and `N` to create a new item.')
  })

})