describe('My First Testcase', () => {
  it('opens the card creation form when the button is clicked', () => {
    cy.visit('http://localhost:3000')

    cy.get('section > div.Card__CreateCardContainer-sc-1pi37lf-8').should(
      'not.exist'
    )

    cy.get('footer div').click({ multiple: true })

    cy.get('section > div.Card__CreateCardContainer-sc-1pi37lf-8').should(
      'exist'
    )

    cy.get('input[name="title"]').type('Ein Klavier')
    cy.wait(500)

    cy.get('input[name="borrower"]').type('Hans')
    cy.wait(500)

    cy.get('input[name="contact"]').type('hans@aol.com')
    cy.wait(500)

    cy.get('input[name="borrowdate"]').type('2020-02-10')
    cy.wait(500)

    cy.get('input[name="duedate"]').type('2020-03-18')
    cy.wait(1000)

    cy.get('button[name="save"]').click()
    cy.wait(1000)

    cy.visit('http://localhost:3000')
  })
})
