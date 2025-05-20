import { CartElements } from "./cart.elements";

export class CartMethods {

    static clickDelete(productName) {
        CartElements.links.delete(productName).click()
    }

    //verificar que se muestra la página del carrito
    static verifyCartPage() {
        cy.url().should('include', 'cart.html')
    }

    //hacer click en el botón "Place Order"
    static clickPlaceOrder() {
        CartElements.buttons.placeOrderButton.click()
    }

}