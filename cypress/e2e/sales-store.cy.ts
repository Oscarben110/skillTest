import { HomePage } from "../support/page-objects/homePage";
import { ProductDetailsPage } from "../support/page-objects/productDetailsPage";
import { CartPage } from "../support/page-objects/cartPage";
import { RegisterPage } from "../support/page-objects/registerPage";
import { SignUpPage } from "../support/page-objects/signUpPage";
import { AccountCreatedPage } from "../support/page-objects/accountCreatedPage";
import { CheckoutPage } from "../support/page-objects/checkoutPage";
import { PaymentPage } from "../support/page-objects/paymentPage";
import { DonePaymentPage } from "../support/page-objects/donePaymentPage";
import { ContactUsPage } from "../support/page-objects/contactUsPage";
import { faker } from '@faker-js/faker';


const homePage = new HomePage();
const productDetailsPage = new ProductDetailsPage();
const cartPage = new CartPage();
const registerPage = new RegisterPage();
const signUpPage = new SignUpPage();
const accountCreatedPage = new AccountCreatedPage();
const checkoutPage = new CheckoutPage();
const paymentPage = new PaymentPage();
const donePaymentPage = new DonePaymentPage();
const contactUsPage = new ContactUsPage();

const firstName: string = faker.person.firstName();
const last_name: string = faker.person.lastName();
const email: string = faker.internet.email();
const password: string = faker.internet.password();
const address: string = faker.location.streetAddress();
const mobile_number: string = faker.phone.number();
const credit_card: string = faker.finance.creditCardNumber();
const cvv: string = faker.finance.creditCardCVV();

describe('Test sales store page', () => {

  before(() => {
    cy.clearAllCookies();
  })

  it('Visit sales store page and scroll to 50% of the page', () => {
    cy.fixture('item').then(function (data) { this.data = data }).then(function () {
      cy.visit('/');
      cy.scrollTo('0%', '50%');
      homePage.getItemCardsInfo().eq(21).should('include.text', this.data.item22); //Check that the item 22 is displayed

    })
  })

  it('Click on view product', () => {
    cy.fixture('item').then(function (data) { this.data = data }).then(function () {
      homePage.getViewProductButton().eq(21).click();
      cy.url().should('contain', '/product_details/28');
      productDetailsPage.getProductInfo().should('include.text', this.data.item22);
      productDetailsPage.getProductInfo().should('include.text', this.data.categoryShirts);
      productDetailsPage.getProductQuantity().invoke('val').then(function (quantity) {
        expect(+quantity).to.be.greaterThan(0);

      })
    })
  })

  it('Enter a quantity of 30 on the quantity box', () => {
    productDetailsPage.getProductQuantity().clear().type('30');
    productDetailsPage.getProductQuantity().invoke('val').then(function (quantity) {
      expect(+quantity).to.be.equal(30);
    })
  })

  it('Add the 30 items to the cart', () => {
    productDetailsPage.getAddToCartButton().click();
    productDetailsPage.getPopUpModal().should('include.text', 'Added!');
    productDetailsPage.getPopUpModal().should('include.text', 'Your product has been added to cart');

  })

  it('Click on View Cart', () => {
    cy.fixture('item').then(function (data) { this.data = data }).then(function () {
      productDetailsPage.getModalViewCartButton().eq(1).click();
      cartPage.getShoppingCartText().should('include.text', 'Shopping Cart');
      cartPage.getCartMenu().should('include.text', 'Item')
        .should('include.text', 'Description')
        .should('include.text', 'Price')
        .should('include.text', 'Quantity')
        .should('include.text', 'Total');

      cartPage.getItemDescription().should('include.text', this.data.item22);
      cartPage.getPrice().should('include.text', this.data.item22Price);
      cartPage.getQuantity().should('include.text', '30');
      cartPage.getTotalPrice().should('include.text', this.data.totalPrice)

    })

  })

  it('Click on proceed to checkout', () => {
    cartPage.getProceedButton().click();
    cartPage.getCheckoutModal().should('include.text', 'Checkout');

  })

  it('Click on Register/Login', () => {
    cartPage.getRegisterButton().eq(1).click();
    cy.url().should('include', '/login');

  })

  it('Fill the Sign Up fields and click SignUp', () => {
    registerPage.getSignUpForm().should('include.text', 'New User Signup!');
    registerPage.getNameField().type(firstName);
    registerPage.getEmailField().type(email);
    registerPage.getSignUpButton().click();
    signUpPage.getTitle().should('include.text', 'Enter Account Information');

  })

  it('Fill in all information and click on “Create Account”', () => {
    signUpPage.getGenderTitle().eq(0).click; //Selecting 0 will select Mr. and 1 will select Mrs.
    signUpPage.getNameField().should('include.value', firstName)
    signUpPage.getEmailField().should('include.value', email);
    signUpPage.getPasswordField().type(password);
    signUpPage.getDaysDropDown().select(1);
    signUpPage.getMonthDropDown().select(2);
    signUpPage.getYearDropDown().select(2);
    signUpPage.getFirstNameField().type(firstName);
    signUpPage.getLastNameField().type(last_name);
    signUpPage.getCompanyField().type('company');
    signUpPage.getAddressField().type(address);
    signUpPage.getCountryDropdown().select(2);
    signUpPage.getStateField().type('State');
    signUpPage.getCityField().type('City1');
    signUpPage.getZipCodeField().type('12345');
    signUpPage.getMobileField().type(mobile_number);
    signUpPage.getCreateButton().click();

  })

  it('Click continue on created account', () => {
    accountCreatedPage.getCreatedMessage().should('include.text', 'Account Created!');
    accountCreatedPage.getContinueButton().click();
    cy.url().should('include', 'https://automationexercise.com/');
    homePage.getLogoutButton().should('be.visible');

  })

  it('Click on View Cart in the header', () => {
    cy.fixture('item').then(function (data) { this.data = data }).then(function () {
      productDetailsPage.getModalViewCartButton().eq(0).click();
      cartPage.getShoppingCartText().should('include.text', 'Shopping Cart');
      cartPage.getCartMenu().should('include.text', 'Item')
        .should('include.text', 'Description')
        .should('include.text', 'Price')
        .should('include.text', 'Quantity')
        .should('include.text', 'Total');

      cartPage.getItemDescription().should('include.text', this.data.item22);
      cartPage.getPrice().should('include.text', this.data.item22Price);
      cartPage.getQuantity().should('include.text', '30');
      cartPage.getTotalPrice().should('include.text', this.data.totalPrice)

    })

  })

  it('Click on proceed to checkout', () => {
    cartPage.getProceedButton().click();
    cy.url().should('include', '/checkout');

  })

  it('Add comment and click on Place Order', () => {
    checkoutPage.getCommentField().type('Buying 30 tshirts to add to my amazon store');
    checkoutPage.getPlaceOrderButton().click();
    cy.url().should('include', '/payment');

  })

  it('Fill Credit Card data and confirm order', () => {
    paymentPage.getCardNameField().type(firstName);
    paymentPage.getCardNumberField().type(credit_card);
    paymentPage.getCVVField().type(cvv);
    paymentPage.getExpirationMonthField().type('04');
    paymentPage.getExpirationYeardField().type('2030');
    paymentPage.getPayButton().click();
    cy.url().should('include', '/payment_done');
  })

  it('Click continue button', () => {
    donePaymentPage.getOrderMessage().should('include.text', 'Order Placed!');
    donePaymentPage.getContinueButton().click();
    cy.url().should('include', 'https://automationexercise.com/');
  })

  it('Click logout button', () => {
    homePage.getLogoutButton().click();
    cy.url().should('include', 'https://automationexercise.com/login');
  })

  it('Sign in to the same account', () => {
    registerPage.getLogInEmailField().type(email);
    registerPage.getLogInPasswordField().type(password);
    registerPage.getLogInButton().click();
    cy.url().should('include', 'https://automationexercise.com/');

  })

  it('Click on the Contact Us Button', () => {
    homePage.getContactButton().click();
    cy.url().should('include', '/contact_us');

  })

  it('Fill required fields and Submit', () => {
    contactUsPage.getNameField().type(firstName);
    contactUsPage.getEmailField().type(email);
    contactUsPage.getSubjectField().type('test if this works');
    contactUsPage.getMessageButton().type('There is an issue with the tshirts i bought on this site');
    cy.scrollTo('0%', '0%');
    contactUsPage.getSubmitButton().click();

  })

  it('Click Ok in the pop up', () => {
    cy.on('window:confirm', () => true);
    contactUsPage.getSuccessMessage().should('include.text', 'Success! Your details have been submitted successfully.');
  })

  it('Click logout button', () => {
    homePage.getLogoutButton().click();
    cy.url().should('include', 'https://automationexercise.com/login');
  })



})