export class PaymentPage {

    getCardNameField() {
        return cy.get('[data-qa="name-on-card"]');
    }

    getCardNumberField() {
        return cy.get('[data-qa="card-number"]');
    }

    getCVVField(){
        return cy.get('[data-qa="cvc"]');

    }

    getExpirationMonthField(){
        return cy.get('[data-qa="expiry-month"]');
        
    }

    getExpirationYeardField(){
        return cy.get('[data-qa="expiry-year"]');
        
    }

    getPayButton(){
        return cy.get('[data-qa="pay-button"]');
    }

}