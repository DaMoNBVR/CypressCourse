import { CartMethods } from "../Pages/Cart/cart.methods";
import { CommonData } from "../Pages/Common/common.data";
import { CommonMethods } from "../Pages/Common/common.methods";
import { HomeMethods } from "../Pages/Home/home.methods";
import { LoginMethods } from "../Pages/Login/login.methods";
import { PlaceOrderData } from "../Pages/PlaceOrder/placeOrder.data";
import { PlaceOrderElements } from "../Pages/PlaceOrder/placeOrder.elements";
import { PlaceOrderMethods } from "../Pages/PlaceOrder/placeOrder.methods";
import { ProductDetailsMethods } from "../Pages/ProductDetails/product-details.methods";
import { PurchaseSuccessMethods } from "../Pages/PurchaseSuccess/purchaseSuccess.methods";
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
        ProductDetailsMethods.verifyProductDetailsPage();

        Logger.StepNumber(5);
        Logger.Step('Agregar el producto al carrito');
        Logger.Substeps('Clickear el botón "Add to cart"');
        ProductDetailsMethods.clickAddToCart();

        Logger.StepNumber(6);
        Logger.Step('Verificar que el producto fue agregado al carrito');
        ProductDetailsMethods.verifyProductAddedMessage();
    })

        
    it ("Realizar una compra", () => {
    
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
        ProductDetailsMethods.verifyProductDetailsPage();

        Logger.StepNumber(5);
        Logger.Step('Agregar el producto al carrito');
        Logger.Substeps('Clickear el botón "Add to cart"');
        ProductDetailsMethods.clickAddToCart();

        Logger.StepNumber(6);
        Logger.Step('Verificar que el producto fue agregado al carrito');
        ProductDetailsMethods.verifyProductAddedMessage();

        Logger.StepNumber(7);
        Logger.Step('Hacer clic en el botón "Cart" en la barra de navegación');
        CommonMethods.clickCartButton();

        Logger.StepNumber(8);
        Logger.Step('Verificar que se muestra la página del carrito');
        CartMethods.verifyCartPage();

        Logger.StepNumber(9);
        Logger.Step('Hacer click en el botón "Place Order"');
        CartMethods.clickPlaceOrder();

        Logger.StepNumber(10);
        Logger.Step('Completar el formulario de compra');
        PlaceOrderMethods.insertAllFields(PlaceOrderData.testData);

        Logger.StepNumber(11);
        Logger.Step('Hacer click en el botón "Purchase"');
        PlaceOrderMethods.clickPurchase();

        Logger.StepNumber(12);
        Logger.Step('Verificar que se muestra el mensaje de confirmación');
        PurchaseSuccessMethods.verifyPurchaseSuccessIcon();

        Logger.StepNumber(13);
        Logger.Step('Hacer click en el botón "Purchase"');
        PlaceOrderMethods.clickPurchase();

        Logger.StepNumber(14);
        Logger.Step('Verificar que se muestra el icono de éxito de compra');
        PurchaseSuccessMethods.verifyPurchaseSuccessIcon();

        Logger.StepNumber(15);
        Logger.Step('hacer click en el botón "OK"');
        PurchaseSuccessMethods.clickOkButton();

        Logger.StepNumber(16);
        Logger.Step('Hacer click en el botón "close"');
        PlaceOrderMethods.clickClose();

        Logger.StepNumber(17);
        Logger.Step('hacer click en home');
        CommonMethods.clickHomeButton();

        Logger.StepNumber(18);
        Logger.Step('Verificar que se muestra la página de inicio');
        HomeMethods.verifyHomePageisShown();

    })

});