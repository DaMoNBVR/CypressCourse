import { CartMethods } from './Pages/Cart/cart.methods';
import { HomeMethods } from './Pages/Home/home.methods';
import { LoginMethods } from './Pages/Login/login.methods';

describe('template spec', () => {

    it('passes', () => {

      // const usuario = 'random01'
      // const contrasena = 'random1'
        cy.visit('https://www.demoblaze.com/index.html')
        cy.wait(30000)
        CartMethods.clickDelete('Samsung galaxy s6')
        cy.wait(10000)
    })
})