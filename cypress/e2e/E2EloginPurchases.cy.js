describe('Login and complete purchase', function () {


  //adding code to ignore all uncaught JS exceptions
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  before(function () {

    cy.visit('/')

    //set up fixture file variables
    cy.fixture('userDetails').then(function (userDetails) {
      this.userDetails = userDetails
    })
  })

  it('Logs in, adds 2 products to cart, completes purchase', function () {
    cy.contains('.nav-link', 'Log in').click();
    //get fixture file objects

    cy.get('#loginusername')
      .type(this.userDetails.username)
      .should('have.value', this.userDetails.username);

    cy.get('#loginpassword')
      .clear()
      .type(this.userDetails.password)
      .should('have.value', this.userDetails.password);

    cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
    cy.contains('.nav-link', this.userDetails.welcomeText);

    //click product #2
    cy.get('a[href="prod.html?idp_=2"].hrefch').click();
    cy.clickLink('Add to cart')

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added.`)
      driver.switchTo().alert().accept();
    })
    
    cy.clickLink('Home');

    //click product #9
    cy.get('a[href="prod.html?idp_=9"].hrefch').click();
    cy.get('a.btn.btn-success.btn-lg')
    cy.clickLink('Add to cart')

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added.`)
      driver.switchTo().alert().accept();
    })
    cy.contains('a.nav-link', 'Home').click();
    //go to cart
    cy.get('a.nav-link#cartur').click();
    cy.get('#page-wrapper > div > div.col-lg-1 > div > div').as("totalBasket"); //this is the totalp selector i.e. basket total
    cy.get("@totalBasket").should("contain", 1610);

    //Add to Cart
    cy.contains('Place Order').click();

    //check Place Order modal title
    cy.get('h5.modal-title#orderModalLabel')
      .should('contain', 'Place order');

    cy.completePurchaseDetails('Sid Spendalot');

    //click purchase
    cy.contains('Purchase').click();

    //purchase success modal
    cy.contains('h2', 'Thank you for your purchase!');
    //click OK button on purchase success pop up
    cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click();

    cy.get('a#nava') //homepage banner
      .contains('PRODUCT STORE')
      .should('be.visible');
  }
  )
}
)

