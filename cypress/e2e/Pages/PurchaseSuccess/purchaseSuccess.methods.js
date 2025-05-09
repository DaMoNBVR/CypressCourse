import { PurchaseSuccessElements } from "./purchaseSuccess.elements"

export class PurchaseSuccessMethods {
    
    static clickOkButton() {
        PurchaseSuccessElements.buttons.ok.click()
    }

    static verifyPurchaseSuccessIcon() {
        PurchaseSuccessElements.icons.PurchaseSuccessIcon.should('be.visible')
    }

}