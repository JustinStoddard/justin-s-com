describe('My First Test', () => {
  it('Finds the content "type"', () => {

    cy.visit('https://www.thisjustin.tech/Resume') //I can go to any site and test UI but you shouldn't becauase that UI can cahnge at any time, so you should only test sites you control.

    cy.get('.godfather-container', { timeout: 5000 }).contains('Experience').click()
    cy.wait(3000)
    cy.get('.godfather-container', { timeout: 5000 }).contains('Education').click()
    cy.wait(3000)
    cy.get('.godfather-container', { timeout: 5000 }).contains('Projects').click()

    cy.wait(3000)

    cy.get('.godfather-container', { timeout: 5000 }).contains('Experience').click()
    cy.wait(3000)
    cy.get('.godfather-container', { timeout: 5000 }).contains('Education').click()
    cy.wait(3000)
    cy.get('.godfather-container', { timeout: 5000 }).contains('Projects').click()
  })
})

