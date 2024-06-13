describe('VideoPageTest', () => {
     it('NavigateToVideosPageTest', () => {
     cy.visit('http://localhost:3000')
    
     cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test')
     cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('liveTest')
     cy.get('.MuiButton-label').click()
     cy.get('.MuiTypography-root').should('be.visible')
     cy.get(':nth-child(2) > .MuiTab-wrapper').click()
     cy.get('section > .MuiTypography-root').should('be.visible')
     })
     it('VideosPageIs/videosTest', () => {
     cy.visit('http://localhost:3000')
    
     cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test')
     cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('liveTest')
     cy.get('.MuiButton-label').click()
     cy.get('.MuiTypography-root').should('be.visible')
     cy.get(':nth-child(2) > .MuiTab-wrapper').click()
     cy.get('section > .MuiTypography-root').should('be.visible')
     cy.url().should('be.equal','http://localhost:3000/videos')
     })
     it.only('ClickNameVideosTest', () => {
     cy.visit('http://localhost:3000')
    
     cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('test')
     cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('liveTest')
     cy.get('.MuiButton-label').click()
     cy.get('.MuiTypography-root').should('be.visible')
     cy.get(':nth-child(2) > .MuiTab-wrapper').click()
     cy.get('section > .MuiTypography-root').should('be.visible')
     cy.get('[data-index="0"] > :nth-child(1)').click()
     cy.get('[data-index="0"] > :nth-child(1)').should('not.be.disabled')
    
     })
    })