describe('Je peux récupérer les informations sur une promotion', () => {
    it('Les informations sur PULL5 sont récupérables', () => {
        cy.request({
            url: 'http://7a41ef528d6d.ngrok.io/Promotion/PULL5',
        })
            .then((resp) => {
                expect(resp.status).to.eq(200);
                expect(resp.body.id).to.eq("PULL5");
                expect(resp.body.description).to.eq("5% sur les pulls");
                expect(resp.body.dateDebut).to.eq("2020-07-04");
                expect(resp.body.dateFin).to.eq("2020-07-11");
                expect(resp.body.pourcentagePromo).to.eq(5);
                expect(resp.body.leProduit.id).to.eq(1);
                expect(resp.body.leProduit.nomproduit).to.eq("Pull en laine");
                expect(resp.body.leProduit.prix).to.eq(80);
            })
    });
});
