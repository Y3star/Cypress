import MainPage from "../tests/Pageobject/MainPage";
import SignUpPage from "../tests/Pageobject/SignUpPage";

const mainPage = new MainPage();
const signUpPage = new SignUpPage();

describe("Test cases", () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 1080p monitor
        // cy.viewport(1920, 1080);
        // but use config its better
        mainPage.goto();
        mainPage.clickCookiesButton();
    });

    it("case 1(Sign Up) all valid *sign up* page", () => {
        mainPage.clickElement(mainPage.SignUp);
        signUpPage.setValueInput(signUpPage.email, "fake@gmail.com");
        signUpPage.setValueInput(signUpPage.fullName, "Fake Name");
        signUpPage.setValueInput(signUpPage.password, "Qw1234df!234d");
        signUpPage.clickElement(signUpPage.checkBoxIAgree);
        signUpPage.clickElement(signUpPage.checkBoxIWant);
        signUpPage.clickElement(signUpPage.clickCreateAcc);
        cy.wait(300);
    });
    it("case 2(Sign Up) with not valid *email*", () => {
        mainPage.clickElement(mainPage.SignUp);
        signUpPage.setValueInput(signUpPage.email, "fake gmail.com");
        signUpPage.setValueInput(signUpPage.fullName, "Fake Name");
        signUpPage.setValueInput(signUpPage.password, "Qw1234df!234d");
        signUpPage.clickElement(signUpPage.clickCreateAcc);
        signUpPage.screenshotElement(
            signUpPage.errorEmail,
            "src_error_email_sign_up"
        );
        cy.wait(300);
    });
    it("case 3(Sign Up) with not valid *full name*", () => {
        mainPage.clickElement(mainPage.SignUp);
        signUpPage.setValueInput(signUpPage.email, "fake@gmail.com");
        signUpPage.setValueInput(signUpPage.password, "Qw1234df!234d");
        signUpPage.clickElement(signUpPage.clickCreateAcc);
        signUpPage.screenshotElement(
            signUpPage.errorFullName,
            "src_error_name_sign_up"
        );
        cy.wait(300);
    });

    it("case 4(Sign Up) with not valid *password*", () => {
        mainPage.clickElement(mainPage.SignUp);
        signUpPage.setValueInput(signUpPage.email, "fake@gmail.com");
        signUpPage.setValueInput(signUpPage.fullName, "Fake Name");
        signUpPage.setValueInput(signUpPage.password, "Qw1234");
        signUpPage.clickElement(signUpPage.clickCreateAcc);
        signUpPage.screenshotElement(
            signUpPage.passwordRequirements,
            "scr_error_pass_requirement_sign_up"
        );
        cy.wait(300);
    });
});
