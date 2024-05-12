export class HomePage {

    getItemCardsInfo(){
      return cy.get('[class="productinfo text-center"]');
    }

    getViewProductButton(){
        return cy.get('[class="fa fa-plus-square"]');
    }

}