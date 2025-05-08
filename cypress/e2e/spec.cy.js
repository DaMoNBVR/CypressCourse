import { LoginMethods } from './Pages/Login/login.methods';

describe('template spec', () => {

    it('passes', () => {

      const usuario = 'random01'
      const contrasena = 'random1'
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('a[data-target="#logInModal"]').click()
        LoginMethods.login(usuario, contrasena)
        cy.get('a#nameofuser').should('contain', usuario)
        cy.wait(10000)
    })

})