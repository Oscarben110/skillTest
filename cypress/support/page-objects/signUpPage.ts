export class SignUpPage {

    getTitle(){
        return cy.get('[class="title text-center"]');
    }

    getGenderTitle(){
        return cy.get('[data-qa="title"]');
    }
  
    getNameField(){
        return cy.get('[data-qa="name"]');
    }

    getEmailField(){
        return cy.get('[data-qa="email"]');
    }

    getPasswordField(){
        return cy.get('[data-qa="password"]');
    }

    getDaysDropDown(){
        return cy.get('[data-qa="days"]');
    }

    getMonthDropDown(){
        return cy.get('[data-qa="months"]');
    }

    getYearDropDown(){
        return cy.get('[data-qa="years"]');
    }

    getFirstNameField(){
        return cy.get('[data-qa="first_name"]');
    }

    getLastNameField(){
        return cy.get('[data-qa="last_name"]');
    }

    getCompanyField(){
        return cy.get('[data-qa="company"]');
    }

    getAddressField(){
        return cy.get('[data-qa="address"]');
    }

    getCountryDropdown(){
        return cy.get('[data-qa="country"]');
    }

    getStateField(){
        return cy.get('[data-qa="state"]');
    }

    getCityField(){
        return cy.get('[data-qa="city"]');
    }

    getZipCodeField(){
        return cy.get('[data-qa="zipcode"]');
    }

    getMobileField(){
        return cy.get('[data-qa="mobile_number"]');
    }

    getCreateButton(){
        return cy.get('[data-qa="create-account"]');
    }

  }