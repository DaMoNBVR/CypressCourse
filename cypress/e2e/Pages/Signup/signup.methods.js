import { CommonMethods } from "../Common/common.methods";
import { SignupElements } from "./signup.elements";

 export class SignupMethods {

    static insertUsername(username) {

        SignupElements.textBoxes.username.clear().invoke("val", username, { force: true }); // Clear the input before typing

    }

    static insertPassword(password) {

        SignupElements.textBoxes.password.clear().invoke("val", password, { force: true }); // Clear the input before typing

    }

    static clickSignupButton() { 

        SignupElements.buttons.signup.click({ force: true }); // Force click to bypass any potential issues with visibility

    }

    static signup(username, password) {
            
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickSignupButton();

    }

    static verifySignupSuccess() {

        CommonMethods.verifyAlertMessage("Sign up successful."); // Verify the alert message for successful registration
    }

    static verifySignupFailed() {

        CommonMethods.verifyAlertMessage("This user already exist."); // Verify the alert message for failed registration
    }

}