export class PurchaseSuccessElements {

    static get buttons() {

        return{

            get ok() {

                return cy.contains('button', 'OK')
                
            }
        }
    }

    static get icons() {

        return{

            get PurchaseSuccessIcon() {

                return cy.get('.sa-success')
                
            }
        }
    }

}