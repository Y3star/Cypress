import MainPage from "../tests/Pageobject/MainPage";
import TalkPage from "../tests/Pageobject/TalkPage";

const mainPage = new MainPage();
const talkPage = new TalkPage();

describe("Test cases", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 1080p monitor
        // cy.viewport(1920, 1080);
        // but use config its better
        mainPage.goto();
        mainPage.clickCookiesButton();
    });

    it("case 9(Expert page) all valid input fields", () => {
        mainPage.clickElement(mainPage.Talk);
        cy.wait(2000); // need because page bad loading
        talkPage.selectElement(talkPage.selecter, "Support");
        talkPage.setValueInput(talkPage.firstName, "Fake Name");
        talkPage.setValueInput(talkPage.lastName, "Fake last Name");
        talkPage.setValueInput(talkPage.email, "fake@gmail.com");
        talkPage.selectElement(talkPage.selecter2, "+1");
        talkPage.setValueInput(talkPage.phone, "3453453450");
        talkPage.setValueInput(talkPage.web, "https://fake-site.gg");
        talkPage.setValueInput(
            talkPage.describe,
            "ty ty ty ty ty ty ty ty ty ty ty ty"
        );
        talkPage.clickElement(talkPage.checkBox);
        talkPage.clickElement(talkPage.submit);
        cy.wait(300);
    });
});
