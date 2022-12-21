import MainPage from "./Pageobject/MainPage";

const mainPage = new MainPage();

describe("Main page", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 1080p monitor
        // cy.viewport(1920, 1080);
        // but use config its better
        mainPage.goto();
        mainPage.clickCookiesButton();
    });

    it("(Assert main-menu)", () => {
        //cant use hovar right now because my version 12 , and plagin real hovar work in 11v or lowest
        mainPage.clickElement(mainPage.products);
        mainPage
            .getElement(mainPage.products)
            .should("include.text", "Products");
        mainPage.clickElement(mainPage.solutions);
        mainPage
            .getElement(mainPage.solutions)
            .should("include.text", "Solutions");
        mainPage.clickElement(mainPage.resources);
        mainPage
            .getElement(mainPage.resources)
            .should("include.text", "Resources");
        mainPage.clickElement(mainPage.company);
        mainPage.getElement(mainPage.company).should("include.text", "Company");
        mainPage.clickElement(mainPage.pricing);
        mainPage.getElement(mainPage.pricing).should("include.text", "Pricing");
        cy.wait(300);
    });
    it("(Scroll and assert bottom title)", () => {
        mainPage
            .getElement(mainPage.productsBottomTitle)
            .should("be.visible")
            .should("include.text", "Products");
        mainPage
            .getElement(mainPage.resourcesBottomTitle)
            .should("be.visible")
            .should("include.text", "Resources");
        mainPage
            .getElement(mainPage.pricingBottomTitle)
            .should("be.visible")
            .should("include.text", "Pricing");
        mainPage
            .getElement(mainPage.companyBottomTitle)
            .should("be.visible")
            .should("include.text", "Company");
        mainPage
            .getElement(mainPage.missControlBottomTitle)
            .should("be.visible")
            .should("include.text", "Mission Control");
        mainPage
            .getElement(mainPage.socialBottomTitle)
            .should("be.visible")
            .should("include.text", "Social");
    });
    it("(Check element is visible)", () => {
        mainPage.getElement(mainPage.hiddenElement).should("not.exist");
        cy.scrollTo("center");
        cy.wait(2000);
        mainPage.getElement(mainPage.hiddenElement).should("be.visible");
    });
});
