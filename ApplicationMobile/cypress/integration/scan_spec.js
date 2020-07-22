
describe('Test End to end scanner un qr code', () => {
    it('Je peux accéder à l\'application', () => {
        cy.visit('http://localhost:19006/')
    });

    it('Je peux cliquer sur le bouton Scanner un code', () => {
        cy.contains('Scanner un code').click()
    });
});
