import { CommonData } from "./common.data";
import { CommonElements } from "./common.elements";

export class CommonMethods {
    
    static NavigateHomePage() {
        cy.clearCookies()
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

    static clickLogoutButton() {
        
        cy.get('body').then(($body) => {
            
            if ($body.find("a#logout2").length > 0) {
                CommonElements.topNav.logout.click()
            }
        })
    }

    static clickSignUpButton() {
        
        CommonElements.topNav.signUp.click()
    }

    static verifyAlertMessage(expectedMessage) {
        cy.on("window:alert", (str) => {
            expect(str).to.equal(expectedMessage);
        });
    }


    static randomString(length =10) {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
}