describe('My first simple test with cypress', function () {
	it('should load boos website', function () {
		cy.visit('http://books.toscrape.com/', { timeout: 10000 })
		cy.url().should('include', 'toscrape.com/')
	})
	it('should click on Travel Category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})
})
