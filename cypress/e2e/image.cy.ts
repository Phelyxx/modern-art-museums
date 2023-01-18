describe('Test Image', () => {
  it('Visits the images/create', () => {
    cy.visit('/images/create')
    cy.contains('Crear una nueva imagen')
    cy.contains('Fuente')
    cy.contains('Texto alternativo')
    cy.contains('Altura')
    cy.contains('Ancho')
    cy.contains('Crear')
    cy.contains('Cancelar')
  })
})
