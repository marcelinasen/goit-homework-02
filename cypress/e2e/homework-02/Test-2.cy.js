describe("E2E Test 2", () => {
    it("Open GoIT website", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    });
    it("Type user email", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("testowyqa@qa.team");
    });
    it("Type user password", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("testowyqa@qa.team");
        cy.get("#user_password").type("QA!automation-1");
    });
    it("Log in", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("testowyqa@qa.team");
        cy.get("#user_password").type("QA!automation-1");
        cy.get(".eckniwg2").click();
    });
    it("Log out", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("testowyqa@qa.team");
        cy.get("#user_password").type("QA!automation-1");
        cy.get(".eckniwg2").click();
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(8) > .next-bve2vl').click();
    });
});
