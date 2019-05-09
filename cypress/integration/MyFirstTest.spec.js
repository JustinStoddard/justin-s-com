describe('My First Test', () => {
  it('Finds the content "type"', () => {

    cy.visit('https://www.thisjustin.tech/') //I can go to any site and test UI but you shouldn't becauase that UI can cahnge at any time, so you should only test sites you control.

    cy.contains('Demos').click()

    cy.contains('View Demo').click()

    cy.contains('OPEN').click()
  })
})

