export class HomePage {

    getItemCardsInfo(){
      return cy.get('[class="productinfo text-center"]');
    }

    getViewProductButton(){
        return cy.get('[class="fa fa-plus-square"]');
    }

    getLogoutButton(){
        return cy.get('a[href="/logout"]');
    }

    getContactButton(){
        return cy.get('a[href="/contact_us"]');
    }

}