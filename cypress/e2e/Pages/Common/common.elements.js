export class CommonElements {
    
    static get topNav() {

        return {
            
            get home() {
            return cy.get('li.active a');
            },

            get contact() {
            return cy.get('a[data-target="#exampleModal"]');
            },
            
            get aboutUs() {
            return cy.get('a[data-target="#videoModal"]');
            },

            get cart() {
            return cy.get('a#cartur');
            },

            get login() {
            return cy.get('a[data-target="#logInModal"]');
            },

            get signUp() {
            return cy.get('a[data-target="#signInModal"]');
            },

            get logout() {
            return cy.get('a#logout2');
            }

        }
    }
}