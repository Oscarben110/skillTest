export class DonePaymentPage {

    getOrderMessage(){
        return cy.get('[data-qa="order-placed"]');
    }

    getContinueButton() {
        return cy.get('[data-qa="continue-button"]');
    }

}