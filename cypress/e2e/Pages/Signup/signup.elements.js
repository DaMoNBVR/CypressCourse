export class SignupElements {
    static get textBoxes() {

        return{
            username(){

                return cy.get('input#sign-username')

            },
            password(){

                return cy.get('input#sign-password')

            }
        }

    }
    static get buttons() {

        return{
            signup(){

                return cy.contains('button', 'Sign up')

            },
            close(){

                return cy.contains('button', 'Close').eq(1)

            }
        }

    }
}