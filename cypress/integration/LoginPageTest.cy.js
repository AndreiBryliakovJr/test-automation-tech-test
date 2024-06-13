describe('LoginPageTest', () => {
    it('LoginTestEmptyFields', () => {
    cy.visit('http://localhost:3000')
   
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(' ')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(' ')
    cy.get('.MuiButton-label').click()
    cy.get('.login_errorMsg__3t609').should('contain.text','Connection error')
    })
    it('LoginTestRightIdEmptyPassword', () => {
    cy.visit('http://localhost:3000')
   
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(' ')
    cy.get('.MuiButton-label').click()
    cy.get('.login_errorMsg__3t609').should('contain.text','Connection error')
    })
    it('LoginTestRightIdWrongPassword', () => {
    cy.visit('http://localhost:3000')
   
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Test1234')
    cy.get('.MuiButton-label').click()
    cy.get('.login_errorMsg__3t609').should('contain.text','Connection error')
    cy.get('.MuiButton-label').should('be.disabled')
    })
    it('LoginTestRightId&Password', () => {
    cy.visit('http://localhost:3000')
   
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('liveTest')
    cy.get('.MuiButton-label').click()
    //cy.get('.MuiTypography-root').should('be.visible')
    cy.url().should('be.equal','http://localhost:3000/home')
    })
    it('LogoutTest', () => {
    cy.visit('http://localhost:3000')
   
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('liveTest')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiTypography-root')
    cy.get('.MuiIconButton-root').click()
    cy.get('.login_form__3ipPU').should('be.visible')
    })
    it.only('ForgotPasswordTest', () => {
    cy.visit('http://localhost:3000')
   
    cy.get('a').click()
    cy.url().should('be.equal','http://localhost:3000/forgot-password')
    })
   })