Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Marcos')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('Marcos@exemplo.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})
