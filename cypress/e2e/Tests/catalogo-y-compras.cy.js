import { CommonData } from "../Pages/Common/common.data";
import { CommonMethods } from "../Pages/Common/common.methods";
import { HomeMethods } from "../Pages/Home/home.methods";
import { LoginMethods } from "../Pages/Login/login.methods";
import { Logger } from "../Util/Logger";

describe(CommonData.testSuites.catalogoYCompra, () => {

    it ("Navegación por categorías", () => {
    
        Logger.StepNumber(1);
        Logger.Step('Iniciar sesión como usuario registrado');
        Logger.Substeps('Navegar la página Demoblaze');
        CommonMethods.NavigateHomePage();
        Logger.Substeps('Clickear el botón "Log in"');
        CommonMethods.clickLoginButton();
        Logger.Substeps('Insertar nombre de usuario y contraseña');
        LoginMethods.login(CommonData.testData.existingUser, CommonData.testData.existingPassword);

        Logger.StepNumber(2);
        Logger.Step('Navegar en la página de inicio');
        Logger.Substeps('Clickear el botón "Home"');
        CommonMethods.clickHomeButton();

        Logger.StepNumber(3);
        Logger.Step('Seleccionar una categoría');
        Logger.Substeps('Clickear el botón "Monitors"');
        HomeMethods.clickMonitorsOption();
        Logger.Subverification('Verificar que la categoría "Monitors" esté seleccionada');
        HomeMethods.verifyProductPage('Apple monitor 24');
        HomeMethods.verifyProductPage('ASUS Full HD');

    })

        it ("Agregar Producto al carrito", () => {
    
        Logger.StepNumber(1);
        Logger.Step('Iniciar sesión como usuario registrado');
        Logger.Substeps('Navegar la página Demoblaze');
        CommonMethods.NavigateHomePage();
        Logger.Substeps('Clickear el botón "Log in"');
        CommonMethods.clickLoginButton();
        Logger.Substeps('Insertar nombre de usuario y contraseña');
        LoginMethods.login(CommonData.testData.existingUser, CommonData.testData.existingPassword);

        Logger.StepNumber(2);
        Logger.Step('Navegar en la página de inicio');
        Logger.Substeps('Clickear el botón "Home"');
        CommonMethods.clickHomeButton();

        Logger.StepNumber(3);
        Logger.Step('Seleccionar una categoría');
        Logger.Substeps('Clickear el botón "Monitors"');
        HomeMethods.clickMonitorsOption();

        Logger.Subverification('Verificar que la categoría "Monitors" esté seleccionada');
        HomeMethods.verifyProductPage('Apple monitor 24');
        HomeMethods.verifyProductPage('ASUS Full HD');

        Logger.StepNumber(4);
        HomeMethods.clickProduct('Apple monitor 24');

        Logger.Subverification('Verificar que se muestra la página del producto "Apple monitor 24"');
        

    })

});