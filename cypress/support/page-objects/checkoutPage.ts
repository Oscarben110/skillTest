export class CheckoutPage {

    getCommentField() {
        return cy.get('[class="form-control"]');
    }

    getPlaceOrderButton() {
        return cy.get('[class="btn btn-default check_out"]');
    }

}