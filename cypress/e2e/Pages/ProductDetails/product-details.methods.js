import { CommonMethods } from "../Common/common.methods";
import { ProductDetailsElements } from "./product-details.elements";

export class ProductDetailsMethods {

    static clickAddToCart() {

        ProductDetailsElements.buttons.addToCart.click();

    }

    static verifyProductDetailsPage() {

        ProductDetailsElements.buttons.addToCart.should('be.visible');

    }

    static verifyProductAddedMessage() {

        CommonMethods.verifyAlertMessage('Product added');
        
    }

}