describe('toDo spec', () => {
  it('TC001 - adding new item', () => {
    const name = "Learn Java"
    cy.visit('http://localhost:3000')
    cy.get('.form-control').type(name).type("{enter}")
    cy.get('.checkbox').contains(name).should("be.visible")
  })
})