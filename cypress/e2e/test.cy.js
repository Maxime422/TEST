describe(`Test e2e - Page d'accueil`, () => {
    it(`Vérfie que le titre est correct`, () => {
        cy.visit(`http://127.0.0.1:3000/index.html`);

        cy.get('[type="text"]').type(`Maxime`);
        cy.get("#submit").click();
        cy.get(`p`).should(`contain`, `Maxime, Bienvenue`);
    });
});

// describe(`Test e2e - Page d'accueil`, () => {
//     it(`Vérfie que l'input est vide`, () => {
//         cy.visit(`http://127.0.0.1:3000/index.html`);
//         cy.get("#submit").clear
//     });
// })