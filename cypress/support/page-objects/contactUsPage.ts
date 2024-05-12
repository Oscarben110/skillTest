export class ContactUsPage {

    getNameField(){
        return cy.get('[data-qa="name"]');
    }

    getEmailField(){
        return cy.get('[data-qa="email"]');
    }

    getSubjectField(){
        return cy.get('[data-qa="subject"]');
    }

    getMessageButton(){
        return cy.get('[data-qa="message"]');
    }

    getSubmitButton(){
        return cy.get('[data-qa="submit-button"]');
    }

    getSuccessMessage(){
        return cy.get('[class="status alert alert-success"]');
    }
  
}