describe('Website Routes', () => {
  it('Renders All Routes Without Errors', () => {
    cy.visit('https://www.thisjustin.tech/Resume')
    cy.get('.ui.container').contains('Home').click()
    cy.wait(2000)
    cy.get('.ui.container').contains('About').click()
    cy.wait(2000)
    cy.get('.ui.container').contains('Contact').click()
    cy.wait(2000)
    cy.get('.ui.container').contains('Demos').click()
    cy.wait(2000)
    cy.get('.ui.container').contains('Services').click()
    cy.wait(2000)
    cy.get('.ui.container').contains('Projects').click()
  })
})
// describe('Resume', () => {
//   it('Renders and Tests Resume', () => {
//     cy.visit('https://www.thisjustin.tech/Resume') //I can go to any site and test UI but you shouldn't becauase that UI can cahnge at any time, so you should only test sites you control.
//     cy.get('.godfather-container').contains('Experience').click()
//     cy.wait(2000)
//     cy.get('.godfather-container').contains('Education').click()
//     cy.wait(2000)
//     cy.get('.godfather-container').contains('Projects').click()

//     cy.wait(2000)

//     cy.get('.godfather-container').contains('Bio').click()
//     cy.wait(2000)
//     cy.get('.godfather-container').contains('Experience').click()
//     cy.wait(2000)
//     cy.get('.godfather-container').contains('Education').click()
//     cy.wait(2000)
//     cy.get('.godfather-container').contains('Projects').click()
//   })
// })


