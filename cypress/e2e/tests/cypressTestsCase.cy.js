import MainPage from "../tests/Pageobject/MainPage";
import SignUpPage from "../tests/Pageobject/SignUpPage";

describe("Test cases", () => {
    const mainPage = new MainPage();
    const signUpPage = new SignUpPage();

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1920, 1080)
      })

    it("case 1(Sign Up)", async () => {
        await mainPage.site;
        await mainPage.CookiesButton.click();
        await mainPage.SignUp.click();
        await signUpPage.email.type("fake@gmail.com");
        await signUpPage.fullName.type("Fake Name");
        await signUpPage.password.type("Qw1234df!234d");
        await signUpPage.checkBoxIAgree.click();
        await signUpPage.checkBoxIWant.click();
        await signUpPage.clickCreateAcc.click();
        // await cy.wait(1000)
    });
    it("case 2", async () => {
        //  cy
        //     .get('[name="email"]')
        //     .type("fake@email.com")
        //     .should("have.value", "fake@email.com");
    });
    it("case 3", async () => {});
    it("case 4", async () => {});
    it("case 5", async () => {});
    it("case 6", async () => {});
    it("case 7", async () => {});
    it("case 8", async () => {});
    it("case 9", async () => {});
    it("case 10", async () => {});
});
