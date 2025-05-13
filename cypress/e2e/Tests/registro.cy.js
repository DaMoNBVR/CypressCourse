import { CommonData } from '../Pages/Common/common.data';
import { CommonMethods } from '../Pages/Common/common.methods';
import { Logger } from '../Util/Logger';
import { SignupMethods } from '../Pages/Signup/signup.methods';

const user = CommonMethods.randomString(10);
const password = CommonMethods.randomString(7);
const existingPassword = CommonData.testData.existingPassword;
const existingUser = CommonData.testData.existingUser;

describe ( CommonData.testSuites.registro , () => {
    it('Registro de usuario válido', () => {

        //Paso 1: Navegar a la página de inicio

        Logger.StepNumber(1);
        Logger.Step('Navegar a la página de inicio');
        CommonMethods.NavigateHomePage();

        //Paso 2: Hacer clic en el botón de "Sign up" en la barra de navegación

        Logger.StepNumber(2);
        Logger.Step('Hacer clic en el botón de "Sign up" en la barra de navegación');
        CommonMethods.clickSignUpButton();

        //Paso 3: Ingresar un nombre de usuario y una contraseña válidos y clickear el botón de "Sign up"

        Logger.StepNumber(3);
        Logger.Step('Ingresar un nombre de usuario y una contraseña válidos');
        SignupMethods.insertUsername(user);
        SignupMethods.insertPassword(password);

        //Paso 4: Hacer clic en el botón de "Sign up" para completar el registro
        Logger.StepNumber(4);
        Logger.Step('Hacer clic en el botón de "Sign up" para completar el registro');
        SignupMethods.clickSignupButton();

        //Paso 5: Verificar que el registro fue exitoso y que se muestra un mensaje de éxito

        Logger.StepNumber(5);
        Logger.Verification('Verificar que el registro fue exitoso y que se redirige a la página de inicio de sesión');
        SignupMethods.verifySignupSuccess();

    });

        it('Registro de usuario inválido', () => {

        //Paso 1: Navegar a la página de inicio

        Logger.StepNumber(1);
        Logger.Step('Navegar a la página de inicio');
        CommonMethods.NavigateHomePage();

        //Paso 2: Hacer clic en el botón de "Sign up" en la barra de navegación

        Logger.StepNumber(2);
        Logger.Step('Hacer clic en el botón de "Sign up" en la barra de navegación');
        CommonMethods.clickSignUpButton();

        //Paso 3: Ingresar un nombre de usuario y una contraseña inválidos y clickear el botón de "Sign up"

        Logger.StepNumber(3);
        Logger.Step('Ingresar un nombre de usuario y una contraseña inválidos');
        SignupMethods.insertUsername(existingUser);
        SignupMethods.insertPassword(existingPassword);

        //Paso 4: Hacer clic en el botón de "Sign up" para completar el registro

        Logger.StepNumber(4);
        Logger.Step('Hacer clic en el botón de "Sign up" para intentar completar el registro');
        SignupMethods.clickSignupButton();

        //Paso 5: Verificar que el registro fue exitoso y que se muestra un mensaje de éxito

        Logger.StepNumber(5);
        Logger.Verification('Verificar que el registro fue fallido y que muestra un mensaje de error');
        SignupMethods.verifySignupFailed();

    });
});