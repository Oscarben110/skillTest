export class CartPage {

    getShoppingCartText() {
        return cy.get('[class="active"]');
    }

    getCartMenu() {
        return cy.get('[class="cart_menu"]');
    }

    getItemDescription() {
        return cy.get('[class="cart_description"]');
    }

    getPrice() {
        return cy.get('[class="cart_price"]');
    }

    getQuantity() {
        return cy.get('[class="cart_quantity"]');
    }

    getTotalPrice() {
        return cy.get('[class="cart_total_price"]');
    }

    getProceedButton(){
        return cy.get('[class="btn btn-default check_out"]');
    }

    getCheckoutModal(){
        return cy.get('[class="modal-content"]');
    }

    getRegisterButton(){
        return cy.get('a[href="/login"]');
    }

}