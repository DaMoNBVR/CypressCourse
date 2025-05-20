import { PlaceOrderElements } from "./placeOrder.elements";

export class PlaceOrderMethods {
  
    static insertName (name) {
    PlaceOrderElements.textboxes.name.type(name)
    }

    static insertCountry (country) {
        PlaceOrderElements.textboxes.country.type(country)
    }

    static insertCity (city) {
        PlaceOrderElements.textboxes.city.type(city)
    }

    static insertCreditCard (creditCard) {
        PlaceOrderElements.textboxes.creditCard.type(creditCard)
    }

    static insertMonth (month) {
        PlaceOrderElements.textboxes.month.type(month)
    }

    static insertYear (year) {
        PlaceOrderElements.textboxes.year.type(year)
    }

    static clickPurchase () {
        PlaceOrderElements.buttons.purchase.click()
    }

    static clickClose () {
        PlaceOrderElements.buttons.close.click()
    }

    static insertAllFields (data) {
        
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditCard)
        this.insertMonth(data.month)
        this.insertYear(data.year)

    }

}