import { CommonData } from "../Pages/Common/common.data";
import { CommonMethods } from "../Pages/Common/common.methods";
import { LoginMethods } from "../Pages/Login/login.methods";
import { Logger } from "../Util/Logger";

const user = CommonData.testData.existingUser;
const password = CommonData.testData.existingPassword;
const InvalidUser = CommonMethods.randomString(10);
const InvalidPassword = CommonMethods.randomString(7);

describe(CommonData.testSuites.autenticacion, () => {
    it('Autenticación de usuario válido', () => {

                //Paso 1: Navegar a la página de inicio
        
                Logger.StepNumber(1);
                Logger.Step('Navegar a la página de inicio');
                CommonMethods.NavigateHomePage();
        
                //Paso 2: Hacer clic en el botón de "Login" en la barra de navegación
        
                Logger.StepNumber(2);
                Logger.Step('Hacer clic en el botón de "Login" en la barra de navegación');
                CommonMethods.clickLoginButton();
        
                //Paso 3: Ingresar un nombre de usuario y una contraseña válidos y clickear el botón de " Login"
        
                Logger.StepNumber(3);
                Logger.Step('Ingresar un nombre de usuario y una contraseña válidos');
                LoginMethods.insertUsername(user);
                LoginMethods.insertPassword(password);
        
                //Paso 4: Hacer clic en el botón de "Login" para completar el inicio de sesión
                Logger.StepNumber(4);
                Logger.Step('Hacer clic en el botón de "Login" para completar el inicio de sesión');
                LoginMethods.clickLoginButton();
        
                //Paso 5: Verificar que el registro fue exitoso y que se muestra un mensaje de éxito
        
                Logger.StepNumber(5);
                Logger.Verification('Verificar que el inicio de sesión fue exitoso y que se redirige a la página de inicio de sesión');
                LoginMethods.verifySignedInUser(user);

    });

    it('Autenticación de usuario inválido', () => {

                //Paso 1: Navegar a la página de inicio
        
                Logger.StepNumber(1);
                Logger.Step('Navegar a la página de inicio');
                CommonMethods.NavigateHomePage();
        
                //Paso 2: Hacer clic en el botón de "Login" en la barra de navegación
        
                Logger.StepNumber(2);
                Logger.Step('Hacer clic en el botón de "Login" en la barra de navegación');
                CommonMethods.clickLoginButton();
        
                //Paso 3: Ingresar un nombre de usuario y una contraseña válidos y clickear el botón de " Login"
        
                Logger.StepNumber(3);
                Logger.Step('Ingresar un nombre de usuario y una contraseña válidos');
                LoginMethods.insertUsername(InvalidUser);
                LoginMethods.insertPassword(InvalidPassword);
        
                //Paso 4: Hacer clic en el botón de "Login" para completar el inicio de sesión
                Logger.StepNumber(4);
                Logger.Step('Hacer clic en el botón de "Login" para completar el inicio de sesión');
                LoginMethods.clickLoginButton();
        
                //Paso 5: Verificar que el registro fue exitoso y que se muestra un mensaje de éxito
        
                Logger.StepNumber(5);
                Logger.Verification('Verificar que el inicio de sesión fue fallido y que se no redirige a la página de inicio de sesión');
                LoginMethods.verifiyWrongCredentials();

    });

});