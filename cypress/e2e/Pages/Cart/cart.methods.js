import { CartElements } from "./cart.elements";

export class CartMethods {

    static clickDelete(productName) {
        CartElements.links.delete(productName).click()
    }

}