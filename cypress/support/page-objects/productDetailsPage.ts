export class ProductDetailsPage {

    getProductInfo() {
        return cy.get('[class="product-information"]');
    }

    getProductQuantity() {
        return cy.get('[id="quantity"]');
    }

    getAddToCartButton() {
        return cy.get('[class="btn btn-default cart"]');
    }

    getPopUpModal() {
        return cy.get('[class="modal-content"]');
    }

    getModalViewCartButton(){
        return cy.get('a[href="/view_cart"]');
    }

}