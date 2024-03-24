describe("E2E Test 1", () => {
    it("Open GoIT website", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    });
    it("Log in user 1", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.signIn("user888@gmail.com", "1234567890");
    });
    it("Log out user 1", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.signIn("user888@gmail.com", "1234567890");
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').click();
    });
});