import MainPage from "../tests/Pageobject/MainPage";
import SignUpPage from "../tests/Pageobject/SignUpPage";
import LoginPage from "../tests/Pageobject/LoginPage";
import TalkPage from "../tests/Pageobject/TalkPage";
import SupportPage from "../tests/Pageobject/SupportPage";

const mainPage = new MainPage();
const loginPage = new LoginPage();
const talkPage = new TalkPage();
const supportPage = new SupportPage();

describe("Test cases", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 1080p monitor
        // cy.viewport(1920, 1080);
        // but use config its better
        mainPage.goto();
        mainPage.clickCookiesButton();
    });
   
    xit("case 9(Expert page) all valid", () => {
        mainPage.Talk.click();
        cy.wait(2000);
        talkPage.selecter.select("Sales Inquiry");
        talkPage.firstName.type("Fake Name");
        talkPage.lastName.type("Fake last Name");
        talkPage.email.type("fake@gmail.com");
        talkPage.selecter2.select("+1");
        talkPage.phone.type("3453453450");
        talkPage.web.type("https://fake-site.gg");
        talkPage.desc.type("ty ty ty ty ty ty ty ty ty ty ty");
        talkPage.checkBox.click();
        talkPage.submit.click();
        cy.wait(300);
    });
    xit("case 10(assert numbers)", () => {
        mainPage.Talk.click();
        talkPage.phoneEstonia.scrollIntoView();
        cy.wait(300);
        talkPage.phoneEstonia.should("include.text", "+372 699 1435");
        talkPage.phoneFinland.should("include.text", "+358 753 255 300");
        talkPage.phoneIreland.should("include.text", "+353 818 123 457");
        talkPage.phoneIsrael.should("include.text", "+972 772 2000 92");
        talkPage.phoneMexico.should("include.text", "+52 558 897 4917");
        talkPage.phoneNetherlands.should("include.text", "+31 853 018 256");
        cy.wait(300);
    });
    xit("case 11(assert main-menu)", () => {
        mainPage.products.click("bottom", { force: true });
        mainPage.products.should("include.text", "Products");
        mainPage.solutions.click("bottom", { force: true });
        mainPage.solutions.should("include.text", "Solutions");
        mainPage.resources.click("bottom", { force: true });
        mainPage.resources.should("include.text", "Resources");
        mainPage.company.click("bottom", { force: true });
        mainPage.company.should("include.text", "Company");
        mainPage.pricing.click("bottom", { force: true });
        mainPage.pricing.should("include.text", "Pricing");
        cy.wait(300);
    });
    xit("case 12(Scroll and assert bottom title)", () => {
        mainPage.productsBottom
            .should("be.visible")
            .should("include.text", "Products");
        mainPage.resourcesBottom
            .should("be.visible")
            .should("include.text", "Resources");
        mainPage.pricingBottom
            .should("be.visible")
            .should("include.text", "Pricing");
        mainPage.companyBottom
            .should("be.visible")
            .should("include.text", "Company");
        mainPage.missControlBottom
            .should("be.visible")
            .should("include.text", "Mission Control");
        mainPage.socialBottom
            .should("be.visible")
            .should("include.text", "Social");
    });
    xit("case 13(Check element is visible)", async () => {
        cy.get(".sc-1a5981e5-6").should("not.exist");
        cy.scrollTo("center");
        cy.wait(2000);
        cy.get(".sc-1a5981e5-6").should("be.visible");
    });

});
