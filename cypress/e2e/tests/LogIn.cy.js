import MainPage from "../tests/Pageobject/MainPage";
import LoginPage from "../tests/Pageobject/LoginPage";

const mainPage = new MainPage();
const loginPage = new LoginPage();

describe("Test cases", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 1080p monitor
        // cy.viewport(1920, 1080);
        // but use config its better
        mainPage.goto();
        mainPage.clickCookiesButton();
    });
    it("case 5(Log In) all valid *log in* page", () => {
        mainPage.clickElement(mainPage.Login);
        loginPage.setValueInput(loginPage.emailInput, "fake@gmail.com");
        loginPage.setValueInput(loginPage.passwordInput, "Qw1234df!234d");
        loginPage.clickElement(loginPage.checkBox);
        loginPage.clickElement(loginPage.submit);
        cy.wait(300);
    });
    it("case 6(Log In) with not valid email", () => {
        mainPage.clickElement(mainPage.Login);
        loginPage.setValueInput(loginPage.emailInput, "fakegmail.com");
        loginPage.setValueInput(loginPage.passwordInput, "Qw1234df!234d");
        loginPage.clickElement(loginPage.checkBox);
        loginPage.clickElement(loginPage.submit);
        loginPage.screenshotElement(loginPage.error, "scr_error_email_log_in");
        cy.wait(300);
    });
    it("case 7(Log In) with not valid password", () => {
        mainPage.clickElement(mainPage.Login);
        loginPage.setValueInput(loginPage.emailInput, "fake@gmail.com");
        loginPage.clickElement(loginPage.checkBox);
        loginPage.clickElement(loginPage.submit);
        loginPage.screenshotElement(
            loginPage.error,
            "scr_error_password_log_in"
        );
        cy.wait(300);
    });
    it("case 8(Log In) with did click on check box", () => {
        mainPage.clickElement(mainPage.Login);
        loginPage.setValueInput(loginPage.emailInput, "fake@gmail.com");
        loginPage.setValueInput(loginPage.passwordInput, "Qw1234df!234d");
        loginPage.clickElement(loginPage.submit);
        cy.wait(100);
        loginPage.screenshotElement(
            loginPage.checkBoxError,
            "scr_error_checkbox_log_in"
        );
    });
});
