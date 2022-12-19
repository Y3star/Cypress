import MainPage from "../tests/Pageobject/MainPage";
import SignUpPage from "../tests/Pageobject/SignUpPage";
import LoginPage from "../tests/Pageobject/LoginPage";
import TalkPage from "../tests/Pageobject/TalkPage";
import SupportPage from "../tests/Pageobject/SupportPage";
const mainPage = new MainPage();
const signUpPage = new SignUpPage();
const loginPage = new LoginPage();
const talkPage = new TalkPage();
const supportPage = new SupportPage();


describe("Test cases", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 1080p monitor
        //cy.viewport(1920, 1080);
        mainPage.goto();
        mainPage.clickCookiesButton();
    });

    it("case 1(Sign Up)", () => {
        mainPage.SignUp.click();
        signUpPage.email.type("fake@gmail.com");
        signUpPage.fullName.type("Fake Name");
        signUpPage.password.type("Qw1234df!234d");
        signUpPage.checkBoxIAgree.click();
        signUpPage.checkBoxIWant.click();
        signUpPage.clickCreateAcc.click();
        cy.wait(300);
    });
    it("case 2(Log In)", () => {
        mainPage.Login.click();
        loginPage.setValueInput(loginPage.loginInput, "fake@gmail.com");
        loginPage.password.type("Qw1234df!234d");
        loginPage.checkBox.click();
        loginPage.submit.click();
        cy.wait(300);
    });
    xit("case 3(Talk to an expert)", () => {
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
    xit("case 4(assert numbers)", () => {
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
    xit("case 5(assert main-menu)", () => {
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
    xit("case 6(Support Center)", () => {
        mainPage.supportLink.click();
        supportPage.input.type("getting");
        supportPage.randomSectionclick.click();
        supportPage.input.type("start");
        supportPage.randomSectionclick.click();
        cy.wait(300);
    });
    xit("case 7(Screenshot error message)", () => {
        mainPage.Login.click();
        loginPage.setValueInput(loginPage.loginInput, "fake@gmail.com");
        loginPage.password.type("Qw1234df!234d");
        loginPage.checkBox.click();
        loginPage.submit.click();
        cy.wait(100);
        loginPage.logError.screenshot("scr_error");
    });
    xit("case 8(Scroll and assert bottom title)", () => {
        cy.scrollTo("bottom");
        mainPage.productsBottom.should("include.text", "Products");
        mainPage.resourcesBottom.should("include.text", "Resources");
        mainPage.pricingBottom.should("include.text", "Pricing");
        mainPage.companyBottom.should("include.text", "Company");
        mainPage.missControlBottom.should("include.text", "Mission Control");
        mainPage.socialBottom.should("include.text", "Social");
    });
    // it("case 9", async () => {

    // });
    // it("case 10", async () => {

    // });
});
