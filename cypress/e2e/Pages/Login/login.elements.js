export class LoginElements {
    static get textBoxes() {

        return{
            username(){

                return cy.get('input#loginusername')

            },
            password(){

                return cy.get('input#loginpassword')

            }
        }

    }
    static get buttons() {

        return{
            login(){

                return cy.contains('button', 'Log in')

            },
            close(){

                return cy.get('div[id="logInModal"] button').eq(1)

            }
        }

    }
}