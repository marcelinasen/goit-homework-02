describe("E2E Test 1", () => {
    it("Open GoIT website", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    });
    it("Type user email", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("user888@gmail.com");
    });
    it("Type user password", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("user888@gmail.com");
        cy.get("#user_password").type("1234567890");
    });
    it("Log in", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("user888@gmail.com");
        cy.get("#user_password").type("1234567890");
        cy.get(".eckniwg2").click();
    });
    it("Log out", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("user888@gmail.com");
        cy.get("#user_password").type("1234567890");
        cy.get(".eckniwg2").click();
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').click();
    });
});