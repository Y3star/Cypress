import MainPage from "../tests/Pageobject/MainPage";


describe("spec one", () => {
    const mainPage = new MainPage();

    it("Log page ", async () => {
        await cy.visit("https://telnyx.com/");
        await mainPage.CookiesButton.click()
        //await cy.getCookies().should("be.empty");
        await cy
            .get('[name="email"]')
            .type("fake@email.com")
            .should("have.value", "fake@email.com");
    });
});
