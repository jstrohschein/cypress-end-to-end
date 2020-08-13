describe('Testing form inputs', () => {

  //this will be run before each test
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  //first param is a description, second is a func
  it('Adds text to inputs and submits the form', () => {

    //test for name input
    cy
    .get("[data-cy=name]")//get the element from the component
    .type('Jared Strohschein')//fills in the input
    .should('have.value', 'Jared Strohschein')//assertion


    //test for email input
    cy
    .get('[data-cy=email]')
    .type('test@gmail.com')
    .should('have.value', 'test@gmail.com')


    //test for motivation textArea
    cy
    .get('[data-cy=motivation]')
    .type('I want to help')
    .should('have.value', 'I want to help')


    //test for dropdown
    cy
    .get('[data-cy=positions]')
    .select('Tabling')
    .should('have.value', 'Tabling')


    //test for c&s check
    cy
    .get('[data-cy=terms]')
    .check()
    .should('be.checked')

    
    //test for click on submit
    cy
    .get('[data-cy=submit]')
    .click()



  })

  
  
})