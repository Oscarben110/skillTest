import { HomePage } from "../support/page-objects/homePage";
import { ProductDetailsPage } from "../support/page-objects/productDetailsPage";
import { CartPage } from "../support/page-objects/cartPage";

const homePage = new HomePage();
const productDetailsPage = new ProductDetailsPage();
const cartPage = new CartPage();

describe('Test sales store page', () => {

  before(() => {
    cy.clearAllCookies();
  })

  it('Visit sales store page and scroll to 50% of the page', () => {
    cy.fixture('item').then(function (data) { this.data = data }).then(function () {
      cy.visit('/');
      cy.scrollTo('0%', '50%');
      homePage.getItemCardsInfo().eq(21).should('include.text', this.data.item22); //Check that the item 22 is displayed

    });
  });

  it('Click on view product', () => {
    cy.fixture('item').then(function (data) { this.data = data }).then(function () {
      homePage.getViewProductButton().eq(21).click();
      cy.url().should('contain', '/product_details/28');
      productDetailsPage.getProductInfo().should('include.text', this.data.item22);
      productDetailsPage.getProductInfo().should('include.text', this.data.categoryShirts);
      productDetailsPage.getProductQuantity().invoke('val').then(function (quantity) {
        expect(+quantity).to.be.greaterThan(0);

      });
    });
  });

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
    productDetailsPage.getModalViewCartButton().eq(1).click();
    cartPage.getShoppingCartText().should('include.text', 'Shopping Cart');
    cartPage.getCartMenu().should('include.text', 'Item')
      .should('include.text', 'Description')
      .should('include.text', 'Price')
      .should('include.text', 'Quantity')
      .should('include.text', 'Total');

    cartPage.getItemDescription

  })


})