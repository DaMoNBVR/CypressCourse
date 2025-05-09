import { Logger } from "../../Util/Logger";
import { LoginElements } from "./login.elements";

 export class LoginMethods {

    static insertUsername(username) {

        LoginElements.textBoxes.username().clear().type(username, { force: true }); // Clear the input before typing

    }

    static insertPassword(password) {

        LoginElements.textBoxes.password().clear().type(password, { force: true }); // Clear the input before typing

    }

    static clickLoginButton() { 

        LoginElements.buttons.login().click({ force: true }); // Force click to bypass any potential issues with visibility

    }

    static login(username, password) {
        Logger.Substeps('Insert username')    
        this.insertUsername(username);
        Logger.Substeps('Insert password')
        this.insertPassword(password);
        Logger.Substeps('Click "Login" button')
        this.clickLoginButton();

    }

}