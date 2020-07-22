describe('Test End to end voir les informations sur une promotion', () => {
    it('Je peux accéder à l\'application', () => {
        cy.visit('http://localhost:19006/')
    });

    it('Je peux cliquer sur le bouton liste des promotions', () => {
        cy.contains('Lister les promotions').click()
    });

    it('Attendre 3 secondes que les données soit visible', () => {
        cy.wait(3000)
    });

    it('La promotion PULL5 est visible', () => {
        cy.contains('Code Promotion : PULL5')
    });

    it('La description PULL5 est visible', () => {
        cy.contains('Description : 5% sur les pulls')
    });

    it('Je peux cliquer sur le bouton Plus d\'informations', () => {
        cy.contains('Plus d\'informations').click()
    });

    it('Le description est visible', () => {
        cy.contains('Description de la promotion : 5% sur les pulls')
    });

    it('La date de début de la promotion', () => {
        cy.contains('Date de début de la promotion : 2020-07-04')
    });

    it('La date de fin de la promotion', () => {
        cy.contains('Date de fin de la promotion : 2020-07-11')
    });

    it('La promotion est visible', () => {
        cy.contains('Promotion : 5%')
    });

    it('Le bouton retourner à la page d\'accueil est visible', () => {
        cy.contains("Retourner à la page d'accueil")
    });

    it('Cliquer sur le bouton pour retourner à la page d\'accueil', () => {
        cy.contains("Retourner à la page d'accueil").click({force: true})
    });

    it('Je suis redirigé sur la bonne page', () => {
        cy.contains('Lister les promotions')
    });
});
