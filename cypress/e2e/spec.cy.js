import { HomeMethods } from './Pages/Home/home.methods';
import { LoginMethods } from './Pages/Login/login.methods';

describe('template spec', () => {

    it('passes', () => {

      // const usuario = 'random01'
      // const contrasena = 'random1'
        cy.visit('https://www.demoblaze.com/index.html')
        //maximizar la ventana
        cy.viewport(1920, 1080)
        //esperar 5 segundos
        cy.wait(2000)
        HomeMethods.clickProduct('Iphone 6 32gb')
        cy.wait(5000)
    })
})