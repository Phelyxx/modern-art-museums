describe('Test ArteModerno', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('ArteModerno')
    cy.contains('Museos')
    cy.contains('Artistas')
    cy.contains('Imágenes')
    cy.contains('Obras de arte')
  })
})
