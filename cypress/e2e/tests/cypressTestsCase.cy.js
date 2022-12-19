import MainPage from "../tests/Pageobject/MainPage";
import SignUpPage from "../tests/Pageobject/SignUpPage";
import LoginPage from "../tests/Pageobject/LoginPage";
import TalkPage from "../tests/Pageobject/TalkPage";
import SupportPage from "../tests/Pageobject/SupportPage";

describe("Test cases", () => {
    const mainPage = new MainPage();
    const signUpPage = new SignUpPage();
    const loginPage = new LoginPage();
    const talkPage = new TalkPage();
    const supportPage = new SupportPage();

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1920, 1080);
    });

    xit("case 1(Sign Up)", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
        await mainPage.SignUp.click();
        await signUpPage.email.type("fake@gmail.com");
        await signUpPage.fullName.type("Fake Name");
        await signUpPage.password.type("Qw1234df!234d");
        await signUpPage.checkBoxIAgree.click();
        await signUpPage.checkBoxIWant.click();
        await signUpPage.clickCreateAcc.click();
        await cy.wait(300);
    });
    xit("case 2(Log In)", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
        await mainPage.LogIn.click()
        await loginPage.email.type("fake@gmail.com");
        await loginPage.password.type("Qw1234df!234d");
        await loginPage.checkBox.click();
        await loginPage.submit.click();
        await cy.wait(300);
    });
    xit("case 3(Talk to an expert)", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
        await mainPage.Talk.click();
        await talkPage.selecter.select('Sales Inquiry')
        await talkPage.firstName.type('Fake Name');
        await talkPage.lastName.type('Fake last Name')
        await talkPage.email.type('fake@gmail.com')
        await talkPage.selecter2.select('+1')
        await talkPage.phone.type('3453453450')
        await talkPage.web.type('https://fake-site.gg')
        await talkPage.desc.type('ty ty ty ty ty ty ty ty ty ty ty')
        await talkPage.checkBox.click()
        await talkPage.submit.click()
        await cy.wait(300)
    });
    xit("case 4(assert numbers)", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
        await mainPage.Talk.click();
        await talkPage.phoneEstonia.scrollIntoView()
        await cy.wait(300)
        await talkPage.phoneEstonia.should('include.text', '+372 699 1435');
        await talkPage.phoneFinland.should('include.text', '+358 753 255 300');
        await talkPage.phoneIreland.should('include.text', '+353 818 123 457');
        await talkPage.phoneIsrael.should('include.text', '+972 772 2000 92');
        await talkPage.phoneMexico.should('include.text', '+52 558 897 4917');
        await talkPage.phoneNetherlands.should('include.text','+31 853 018 256')
        await cy.wait(300)
    });
    xit("case 5(intro main-menu)", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
        await mainPage.products.click('bottom', { force: true });
        await mainPage.products.should('include.text','Products')
        await mainPage.solutions.click('bottom', { force: true });
        await mainPage.solutions.should('include.text','Solutions')
        await mainPage.resources.click('bottom', { force: true });
        await mainPage.resources.should('include.text','Resources')
        await mainPage.company.click('bottom', { force: true });
        await mainPage.company.should('include.text','Company')
        await mainPage.pricing.click('bottom', { force: true });
        await mainPage.pricing.should('include.text','Pricing')
        await cy.wait(300)
    });
    xit("case 6(Support Center)", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
        await mainPage.supportLink.click();
        await supportPage.input.type('getting')
        await supportPage.randomSectionclick.click();
        await supportPage.input.type('start')
        await supportPage.randomSectionclick.click();
        await cy.wait(300)
    });
    it("case 7()", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
    });
    // it("case 8", async () => {
    //     await mainPage.site;
    //     await mainPage.CookiesButton.click();
    // });
    // it("case 9", async () => {
    //     await mainPage.site;
    //     await mainPage.CookiesButton.click();
    // });
    // it("case 10", async () => {
    //     await mainPage.site;
    //     await mainPage.CookiesButton.click();
    // });
});
