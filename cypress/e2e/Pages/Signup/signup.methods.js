import { SignupElements } from "./signup.elements";

 export class SignupMethods {

    static insertUsername(username) {

        SignupElements.textBoxes.username().clear().type(username, { force: true }); // Clear the input before typing

    }

    static insertPassword(password) {

        SignupElements.textBoxes.password().clear().type(password, { force: true }); // Clear the input before typing

    }

    static clickSignupButton() { 

        SignupElements.buttons.signup().click({ force: true }); // Force click to bypass any potential issues with visibility

    }

    static signup(username, password) {
            
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickSignupButton();

    }

}