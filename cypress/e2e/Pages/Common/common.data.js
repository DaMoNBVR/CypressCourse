export class CommonData {
    static get url() {
        return 'https://www.demoblaze.com/index.html'
    }

    static get testSuites() {
        return {
            registro: "Registro",
            autenticacion: "Autenticación",
            catalogoYCompra: "Catálogo y Compras",
        }
    }

    static get testData() {
        return {
            existingUser: "random01",
            existingPassword: "random01"
        }
    }
}
