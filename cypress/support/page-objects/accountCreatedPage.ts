export class AccountCreatedPage {

   getCreatedMessage(){
    return cy.get('[data-qa="account-created"]');
   }

   getContinueButton(){
    return cy.get('[data-qa="continue-button"]');
   }
  
  
  }