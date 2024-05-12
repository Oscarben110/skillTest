export class CartPage {

   getShoppingCartText(){
    return cy.get('[class="active"]');
   }

   getCartMenu(){
    return cy.get('[class="cart_menu"]');
   }

   getItemDescription(){
    return cy.get('[class="cart_description"]');
   }

}