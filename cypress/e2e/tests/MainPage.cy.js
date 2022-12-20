import MainPage from "../tests/Pageobject/MainPage";

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
        mainPage.getElement(mainPage.products).should("include.text", "Products");
        mainPage.clickElement(mainPage.solutions);
        mainPage.solutions.should("include.text", "Solutions");
        mainPage.clickElement(mainPage.resources);
        mainPage.resources.should("include.text", "Resources");
        mainPage.clickElement(mainPage.company);
        mainPage.company.should("include.text", "Company");
        mainPage.clickElement(mainPage.pricing);
        mainPage.pricing.should("include.text", "Pricing");
        cy.wait(300);
    });
    it("(Scroll and assert bottom title)", () => {
        mainPage.productsBottomTitle
            .should("be.visible")
            .should("include.text", "Products");
        mainPage.resourcesBottomTitle
            .should("be.visible")
            .should("include.text", "Resources");
        mainPage.pricingBottomTitle
            .should("be.visible")
            .should("include.text", "Pricing");
        mainPage.companyBottomTitle
            .should("be.visible")
            .should("include.text", "Company");
        mainPage.missControlBottomTitle
            .should("be.visible")
            .should("include.text", "Mission Control");
        mainPage.socialBottomTitle
            .should("be.visible")
            .should("include.text", "Social");
    });
    it("(Check element is visible)", () => {
        mainPage.selectElement(mainPage.hiddenElement).should("not.exist");
        cy.scrollTo("center");
        cy.wait(2000);
        mainPage.selectElement(mainPage.hiddenElement).should("be.visible");
    });
});
