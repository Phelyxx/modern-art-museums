describe('Test Artists', () => {
  it('Visits the artists/list', () => {
    cy.visit('/artists')
    cy.contains('Brett Whiteley')
    cy.contains('Lugar de nacimiento: Sydney, New South Wales, Australia')
    cy.contains('Fecha de nacimiento: 6 de abril de 1939')
    cy.contains('Ver detalle')
  })
  it('Visits the artists/detail', () => {
    cy.visit('/artists/100')
    cy.contains('Brett Whiteley')
    cy.contains('Lugar de nacimiento: Sydney, New South Wales, Australia')
    cy.contains('Fecha de nacimiento: 6 de abril de 1939')
    cy.contains('Obras del artista')
  })
  it('Visits the artists/create', () => {
    cy.visit('/artists/create')
    cy.contains('Crear un nuevo artista')
    cy.contains('Nombre')
    cy.contains('Lugar de nacimiento')
    cy.contains('Fecha de nacimiento')
    cy.contains('Imagen')
    cy.contains('Crear')
    cy.contains('Cancelar')
  })

})
