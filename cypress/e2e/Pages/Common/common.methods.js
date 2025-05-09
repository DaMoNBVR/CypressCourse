import { CommonData } from "./common.data";
import { CommonElements } from "./common.elements";

export class CommonMethods {
    
    static NavigateHomePage() {
        cy.visit(CommonData.url)
    }

    static clickHomeButton() {
        CommonElements.topNav.home.click()
    }

    static clickContactButton() {
        CommonElements.topNav.contact.click()
    }

    static clickAboutUsButton() {
        CommonElements.topNav.aboutUs.click()
    }

    static clickCartButton() {
        CommonElements.topNav.cart.click()
    }

    static clickLoginButton() {
        CommonElements.topNav.login.click()
    }

    static clickSignUpButton() {
        CommonElements.topNav.signUp.click()
    }
    
}