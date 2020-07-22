describe('Je peux récupérer des informations sur toutes les promotions', () => {
    it('Les informations sur PULL5, CASQ20 et BASK12 sont récupérables', () => {
        cy.request({
            url: 'http://7a41ef528d6d.ngrok.io/Promotion',
        })
            .then((resp) => {
                expect(resp.status).to.eq(200);

                expect(resp.body[0].id).to.eq("PULL5");
                expect(resp.body[0].description).to.eq("5% sur les pulls");

                expect(resp.body[1].id).to.eq("CASQ20");
                expect(resp.body[1].description).to.eq("20% sur les casquettes");

                expect(resp.body[2].id).to.eq("BASK12");
                expect(resp.body[2].description).to.eq("12% sur les baskets");

            })
    });
});
