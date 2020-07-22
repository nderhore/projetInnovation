describe('Test End to end lister les promotions', () => {
    it('Je peux accéder à l\'application', () => {
        cy.visit('http://localhost:19006/')
    });

    it('Je peux cliquer sur le bouton liste des promotions', () => {
        cy.contains('Lister les promotions').click()
    });

    it('Je peux revenir à la page d\'accueil', () => {
        cy.contains('Retourner à la page d\'accueil').click()
    });
});

