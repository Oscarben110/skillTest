export class RegisterPage {

  getSignUpForm() {
    return cy.get('[class="signup-form"]');
  }

  getNameField() {
    return cy.get('[data-qa="signup-name"]');
  }

  getEmailField() {
    return cy.get('[data-qa="signup-email"]');
  }

  getSignUpButton() {
    return cy.get('[data-qa="signup-button"]');
  }

  getLogInEmailField() {
    return cy.get('[data-qa="login-email"]');
  }

  getLogInPasswordField() {
    return cy.get('[data-qa="login-password"]');
  }

  getLogInButton() {
    return cy.get('[data-qa="login-button"]');
  }


}