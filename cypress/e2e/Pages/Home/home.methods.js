import { HomeElements } from "./home.elements";

 export class HomeMethods {

    static clickPhonesOption() {

        HomeElements.categoriesMenu.phones.click({ force: true }); // Force click to bypass any potential issues with visibility

    }

    static clickLaptopsOption() {

        HomeElements.categoriesMenu.laptops.click({ force: true }); // Force click to bypass any potential issues with visibility

    }

    static clickMonitorsOption() {

        HomeElements.categoriesMenu.monitors.click({ force: true }); // Force click to bypass any potential issues with visibility

    }

    static clickProduct(productName) {

        HomeElements.product(productName).click({ force: true }); // Force click to bypass any potential issues with visibility

    }

    static verifyProductPage(productName) {

        HomeElements.product(productName).should('be.visible'); // Verify that the product page is visible

    }

    static verifyHomePageisShown() {
        
        cy.url().should('include', 'index.html'); // Verify that the URL includes 'demoblaze.com/index.html'

    }

}