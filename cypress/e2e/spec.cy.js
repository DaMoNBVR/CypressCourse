import { CartMethods } from './Pages/Cart/cart.methods';
import { CommonData } from './Pages/Common/common.data';
import { CommonElements } from './Pages/Common/common.elements';
import { HomeMethods } from './Pages/Home/home.methods';
import { LoginMethods } from './Pages/Login/login.methods';
import { Logger } from './Util/Logger';

describe('template spec', () => {

    it('passes', () => {

      const usuario = 'random01'
      const contrasena = 'random01'

      Logger.StepNumber(1)
      Logger.Step('Navigate to Demoblaze page')
      cy.visit(CommonData.url)

      Logger.StepNumber(2)
      Logger.Step('Click "Login" Link')
      CommonElements.topNav.login.click()

      Logger.StepNumber(3)
      Logger.Step(`Login with this credentials ${usuario} / ${contrasena}`)
      LoginMethods.login(usuario,contrasena)
      cy.wait(2000)
      Logger.Verification(`The homepage should show 'Welcome' ${usuario}`)
      cy.get('a#nameofuser').should('contain.text', usuario)

    })
})