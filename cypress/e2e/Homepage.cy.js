describe('Assert homepage objects', () => {
  //adding code to ignore all uncaught JS exceptions
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  it('verifies page banner has loaded', () => {
    cy.visit('/')
    cy.get('a#nava')
      .contains('PRODUCT STORE') // Ensure the element contains the expected text
      .should('be.visible'); // Verify that the element is visible on the page
  })

  it('finds the content "carousel-item', () => {
    cy.visit('/') // '/' uses the baseUrl in the cypress.config

    cy.get('div#carouselExampleIndicators').should('exist');

  })

  it('verifies there are 4 items in CATEGORIES including the title', () => {
    cy.visit('/')
    cy.get('.list-group')
      .should('contain', 'CATEGORIES')
      .find('.list-group-item')
      //note list-group has a header + 3 items = 4
      .should('have.length', 4)
      .should('contain', 'Phones')
      .should('contain', 'Laptops')
      .should('contain', 'Monitors');

  })

  it('should have six card titles', () => {
    cy.visit('/')

    // Get all the card titles and assert their count
    cy.get('h4.card-title')
      .find('a')
      .should('have.length', 9)

    // Iterate over each card title and perform assertions
    cy.get('h4.card-title')
      .find('a')
      .each(($title) => {
        const cardTitle = $title.text().trim() //trimming whitespace from titles e.g. vaio i7

        // Perform assertions on each card title
        cy.wrap(cardTitle).should('be.oneOf', ['Nexus 6', 'Samsung galaxy s7', 'Iphone 6 32gb', 'Sony xperia z5', 'HTC One M9', 'Sony vaio i5', 'Sony vaio i7', 'Samsung galaxy s6', 'Nokia lumia 1520', 'Nexus 6'])
      })
  })

  it('check contact us form', () => {

    cy.visit('/')
    cy.contains('.nav-link', 'Contact').click();

    cy.get('h5.modal-title#exampleModalLabel')
      .should('have.text', 'New message');

  })

  // TODO: Click category, verify correct products loaded.

})




